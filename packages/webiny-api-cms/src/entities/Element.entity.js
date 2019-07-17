// @flow
import { Entity } from "webiny-entity";
import createContentAttribute from "./Page/ContentAttribute";

type ElementType = "element" | "block";

export interface IElement extends Entity {
    name: string;
    content: Object;
    type: ElementType;
    category: ?string;
    preview: string;
}

export function elementFactory(context: Object): Class<IElement> {
    return class Element extends Entity {
        static classId = "PageBuilderElement";

        name: string;
        content: Object;
        type: ElementType;
        category: ?string;
        preview: string;

        constructor() {
            super();
            this.attr("name")
                .char()
                .setValidators("required");
            this.attr("category").char();
            this.attr("content").custom(createContentAttribute(context));
            this.attr("type")
                .char()
                .setValidators("required,in:element:block");

            this.attr("preview").char();
        }
    };
}
