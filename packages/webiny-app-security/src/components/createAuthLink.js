// @flow
import { ApolloLink, Observable } from "apollo-link";
import localStorage from "store";

export default ({ token = "webiny-token" }: { token: string } = {}) => {
    return new ApolloLink((operation, forward) => {
        const tokenValue = localStorage.get(token);
        if (tokenValue) {
            operation.setContext({
                headers: {
                    Authorization: tokenValue
                }
            });
        }

        const observable = forward(operation);

        const unsetTokenCodes = ["TOKEN_EXPIRED", "TOKEN_INVALID"];

        return new Observable(observer => {
            const subscription = observable.subscribe({
                next: data => {
                    if (data.errors) {
                        data.errors.forEach(error => {
                            const code = error.code || error.extensions.exception.code;
                            if (unsetTokenCodes.includes(code)) {
                                localStorage.remove(token);
                                data.errors = [];
                            }
                        });
                    }
                    return observer.next.bind(observer)(data);
                },
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer)
            });

            return () => {
                subscription.unsubscribe();
            };
        });
    });
};
