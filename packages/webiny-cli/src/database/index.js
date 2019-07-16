// @flow
const { MongoClient } = require("mongodb");

const dbInstances = {};
async function getDatabase({ server, databaseName }) {
    if (!process.env.CACHE_DB) {
        console.log("Create DB connection...");
        // Create a new DB connection
        const client = await MongoClient.connect(server, { useNewUrlParser: true });
        return client.db(databaseName);
    }

    if (!dbInstances[databaseName]) {
        console.log("Create DB connection and cache it...");
        const client = await MongoClient.connect(server, { useNewUrlParser: true });
        dbInstances[databaseName] = client.db(databaseName);
    }

    console.log("Return DB connection from cache...");
    return dbInstances[databaseName];
}

function FindCursor(collection: Object, ...args) {
    this._limit = 0;
    this._skip = 0;
    this._sort = null;

    this.limit = (value: number) => {
        this._limit = value;
        return this;
    };

    this.skip = (value: number) => {
        this._skip = value;
        return this;
    };

    this.sort = (value: { [string]: number }) => {
        this._sort = value;
        return this;
    };

    this.toArray = async () => {
        return await collection
            .find(...args)
            .limit(this._limit)
            .skip(this._skip)
            .sort(this._sort)
            .toArray();
    };
}

const Aggregation = function(collection: Object, ...args) {
    this.toArray = async () => {
        return await collection.aggregate(...args).toArray();
    };
};

module.exports.getDatabase = async ({
                                        server,
                                        databaseName
                                    }: {
    server: string,
    databaseName: string
}) => {
    const db = await getDatabase({ server, databaseName });

    return {
        collection: (name: string) => {
            return {
                find: (...args: Array<any>) => {
                    return new FindCursor(db.collection(name), ...args);
                },
                findOne: async (...args: Array<any>) => {
                    return db.collection(name).findOne(...args);
                },
                insert: async (...args: Array<any>) => {
                    return db.collection(name).insert(...args);
                },
                insertOne: async (...args: Array<any>) => {
                    return db.collection(name).insertOne(...args);
                },
                insertMany: async (...args: Array<any>) => {
                    return db.collection(name).insertMany(...args);
                },
                updateMany: async (...args: Array<any>) => {
                    return db.collection(name).updateMany(...args);
                },
                updateOne: async (...args: Array<any>) => {
                    return db.collection(name).updateOne(...args);
                },
                deleteOne: async (...args: Array<any>) => {
                    return db.collection(name).deleteOne(...args);
                },
                deleteMany: async (...args: Array<any>) => {
                    return db.collection(name).deleteMany(...args);
                },
                aggregate: (...args: Array<any>) => {
                    return new Aggregation(db.collection(name), ...args);
                },
                countDocuments: async (...args: Array<any>) => {
                    return db.collection(name).countDocuments(...args);
                }
            };
        }
    };
};
