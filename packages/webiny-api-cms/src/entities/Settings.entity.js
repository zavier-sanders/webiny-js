// @flow
import { settingsFactory } from "webiny-api/entities";
import { EntityModel } from "webiny-entity";
import { Model } from "webiny-model";

const createSocialMediaModel = context =>
    class SocialMediaModel extends EntityModel {
        constructor() {
            super();
            this.setParentEntity(context.settings);
            this.attr("facebook").char();
            this.attr("twitter").char();
            this.attr("instagram").char();
            this.attr("image").char();
        }
    };

class SettingsPagesModel extends Model {
    constructor() {
        super();
        // These are actually parents, not the ID of the actual page.
        this.attr("home").char();
        this.attr("notFound").char();
        this.attr("error").char();
    }
}

const createPageBuilderSettingsModel = context => {
    return class PageBuilderSettingsModel extends EntityModel {
        constructor() {
            super();
            this.setParentEntity(context.settings);
            this.attr("pages").model(SettingsPagesModel);
            this.attr("name").char();
            this.attr("domain").char();
            this.attr("favicon").char();
            this.attr("logo").char();
            this.attr("social").model(createSocialMediaModel(context));
        }
    };
};

export const pageBuilderSettingsFactory = (context: Object) => {
    return class PageBuilderSettings extends settingsFactory(context) {
        static key = "cms";
        static classId = "PageBuilderSettings";
        static collectionName = "Settings";

        data: Object;
        load: Function;

        constructor() {
            super();
            this.attr("data").model(createPageBuilderSettingsModel({ ...context, settings: this }));
        }
    };
};
