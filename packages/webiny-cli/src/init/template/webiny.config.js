const sharedEnv = {
    MONGODB_SERVER: process.env.MONGODB_SERVER,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
    WEBINY_JWT_SECRET: process.env.WEBINY_JWT_SECRET
};

module.exports = {
    functions: {
        "api-gateway": {
            method: "ALL",
            path: "/function/api",
            env: sharedEnv
        },
        "api-service-page-builder": {
            method: "ALL",
            path: "/function/page-builder",
            env: sharedEnv
        },
        "api-service-security": {
            method: "ALL",
            path: "/function/security",
            env: sharedEnv
        },
        "api-service-files": {
            method: "ALL",
            path: "/function/files",
            env: sharedEnv
        }
    },
    apps: {
        admin: {
            path: "/admin",
            env: {
                PORT: 3001,
                REACT_APP_FUNCTIONS_HOST: process.env.REACT_APP_FUNCTIONS_HOST
            }
        },
        site: {
            path: "/",
            ssr: true,
            env: {
                PORT: 3002,
                REACT_APP_FUNCTIONS_HOST: process.env.REACT_APP_FUNCTIONS_HOST
            }
        }
    }
};
