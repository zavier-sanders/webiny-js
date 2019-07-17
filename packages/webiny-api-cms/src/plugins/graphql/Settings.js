// @flow
import { resolveGetSettings, resolveSaveSettings } from "webiny-api/graphql";

export default {
    typeDefs: `
        type PageBuilderSocialMedia {
            facebook: String
            twitter: String
            instagram: String
            image: File
        }

        type PageBuilderSettings {
            name: String
            favicon: File
            logo: File
            domain: String
            social: PageBuilderSocialMedia
            pages: PageBuilderSettingsPages
        }

        type PageBuilderSettingsResponse {
            error: PageBuilderError
            data: PageBuilderSettings
        }

        type PageBuilderSettingsPages {
            home: ID
            notFound: ID
            error: ID
        }

        type PageBuilderDefaultPage {
            id: String
            parent: String
            title: String
        }

        input PageBuilderSocialMediaInput {
            facebook: String
            twitter: String
            instagram: String
            image: RefInput
        }

        input PageBuilderDefaultPageInput {
            id: String
            title: String
        }

        input PageBuilderSettingsInput {
            name: String
            favicon: RefInput
            logo: RefInput
            social: PageBuilderSocialMediaInput
            pages: PageBuilderSettingsPagesInput
        }

        input PageBuilderSettingsPagesInput {
            home: ID
            notFound: ID
            error: ID
        }

        extend type SettingsQuery {
            cms: PageBuilderSettingsResponse
        }

        extend type SettingsMutation {
            cms(data: PageBuilderSettingsInput): PageBuilderSettingsResponse
        }
    `,
    resolvers: {
        SettingsQuery: {
            cms: (_: any, args: Object, ctx: Object, info: Object) => {
                const entity = ctx.getEntity("PageBuilderSettings");
                return resolveGetSettings(entity)(_, args, ctx, info);
            }
        },
        SettingsMutation: {
            cms: (_: any, args: Object, ctx: Object, info: Object) => {
                const entity = ctx.getEntity("PageBuilderSettings");
                return resolveSaveSettings(entity)(_, args, ctx, info);
            }
        }
    }
};
