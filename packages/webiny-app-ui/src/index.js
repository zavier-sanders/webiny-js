import fontawesome from "@fortawesome/fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
fontawesome.library.add(solid, regular);

if (window) {
    window.jQuery = window.$ = require("jquery");
}

require("bootstrap-sass");

import "./assets/styles.scss";
import growler from "./services/growler";
import ModalService from "./services/modal";

export { default as ModalComponent } from "./components/Modal/Components/ModalComponent";
export {
    default as ModalConfirmationComponent
} from "./components/Modal/Components/ModalConfirmationComponent";
export { default as FormComponent } from "./components/Form/FormComponent";
export { default as LinkState } from "./components/Form/LinkState";
export { default as OptionComponent } from "./components/Option/OptionComponent";

const app = () => {
    return ({ app }, next) => {
        app.services.register("growler", () => growler);
        app.services.register("modal", () => new ModalService());

        app.modules.register([
            {
                name: "Alert",
                factory: () => import("./components/Alert")
            },
            {
                name: "Animate",
                factory: () => import("./components/Animate")
            },
            {
                name: "Avatar",
                factory: () => import("./components/Avatar")
            },
            {
                name: "Button",
                factory: () => import("./components/Button")
            },
            {
                name: "ButtonGroup",
                factory: () => import("./components/ButtonGroup")
            },
            {
                name: "Carousel",
                factory: () => import("./components/Carousel")
            },
            {
                name: "ChangeConfirm",
                factory: () => import("./components/ChangeConfirm")
            },
            {
                name: "Checkbox",
                factory: () => import("./components/Checkbox")
            },
            {
                name: "CheckboxGroup",
                factory: () => import("./components/CheckboxGroup")
            },
            {
                name: "ClickConfirm",
                factory: () => import("./components/ClickConfirm")
            },
            {
                name: "ClickSuccess",
                factory: () => import("./components/ClickSuccess")
            },
            {
                name: "CodeEditor",
                factory: () => import("./components/CodeEditor")
            },
            {
                name: "CodeHighlight",
                factory: () => import("./components/CodeHighlight")
            },
            {
                name: "Copy",
                factory: () => import("./components/Copy")
            },
            {
                name: "Cropper",
                factory: () => import("./components/Cropper")
            },
            {
                name: "Data",
                factory: () => import("./components/Data")
            },
            {
                name: "DelayedOnChange",
                factory: () => import("./components/DelayedOnChange")
            },
            {
                name: "Downloader",
                factory: () => import("./components/Downloader")
            },
            {
                name: "DownloadLink",
                factory: () => import("./components/DownloadLink")
            },
            {
                name: "Dropdown",
                factory: () => import("./components/Dropdown")
            },
            {
                name: "Dynamic",
                factory: () => import("./components/Dynamic")
            },
            {
                name: "Email",
                factory: () => import("./components/Email")
            },
            {
                name: "File",
                factory: () => import("./components/File")
            },
            {
                name: "Fieldset",
                factory: () => import("./components/Fieldset")
            },
            {
                name: "FileReader",
                factory: () => import("./components/FileReader")
            },
            {
                name: "Form",
                factory: () => import("./components/Form")
            },
            {
                name: "FormGroup",
                factory: () => import("./components/FormGroup")
            },
            {
                name: "Gallery",
                factory: () => import("./components/Gallery")
            },
            {
                name: "GoogleMap",
                factory: () => import("./components/GoogleMap")
            },
            {
                name: "Gravatar",
                factory: () => import("./components/Gravatar")
            },
            {
                name: "Grid",
                factory: () => import("./components/Grid")
            },
            {
                name: "Growl",
                factory: () => import("./components/Growl")
            },
            {
                name: "HtmlEditor",
                factory: () => import("./components/HtmlEditor")
            },
            {
                name: "Icon",
                factory: () => import("./components/Icon")
            },
            {
                name: "IconPicker",
                factory: () => import("./components/IconPicker")
            },
            {
                name: "Image",
                factory: () => import("./components/Image")
            },
            {
                name: "Input",
                factory: () => import("./components/Input")
            },
            {
                name: "Label",
                factory: () => import("./components/Label")
            },
            {
                name: "LazyImage",
                factory: () => import("./components/LazyImage")
            },
            {
                name: "Link",
                factory: () => import("./components/Link")
            },
            {
                name: "List",
                factory: () => import("./components/List")
            },
            {
                name: "Loader",
                factory: () => import("./components/Loader")
            },
            {
                name: "Logic",
                factory: () => import("./components/Logic")
            },
            {
                name: "MarkdownEditor",
                factory: () => import("./components/MarkdownEditor")
            },
            {
                name: "Modal",
                factory: () => import("./components/Modal")
            },
            {
                name: "Panel",
                factory: () => import("./components/Panel")
            },
            {
                name: "Password",
                factory: () => import("./components/Password")
            },
            {
                name: "Popover",
                factory: () => import("./components/Popover")
            },
            {
                name: "Progress",
                factory: () => import("./components/Progress")
            },
            {
                name: "RadioGroup",
                factory: () => import("./components/RadioGroup")
            },
            {
                name: "Search",
                factory: () => import("./components/Search")
            },
            {
                name: "Section",
                factory: () => import("./components/Section")
            },
            {
                name: "Select",
                factory: () => import("./components/Select")
            },
            {
                name: "Settings",
                factory: () => import("./components/Settings")
            },
            {
                name: "Switch",
                factory: () => import("./components/Switch")
            },
            {
                name: "Tabs",
                factory: () => import("./components/Tabs")
            },
            {
                name: "Tags",
                factory: () => import("./components/Tags")
            },
            {
                name: "Textarea",
                factory: () => import("./components/Textarea")
            },
            {
                name: "Tile",
                factory: () => import("./components/Tile")
            },
            {
                name: "Tooltip",
                factory: () => import("./components/Tooltip")
            },
            {
                name: "View",
                factory: () => import("./components/View")
            },
            {
                name: "ViewSwitcher",
                factory: () => import("./components/ViewSwitcher")
            },
            {
                name: "Wizard",
                factory: () => import("./components/Wizard")
            },
            {
                name: "Vendor.Cropper",
                factory: () => import("./vendor/Cropper")
            },
            {
                name: "Vendor.CodeMirror",
                factory: () => import("./vendor/CodeMirror")
            },
            {
                name: "Vendor.OwlCarousel",
                factory: () => import("./vendor/OwlCarousel")
            },
            {
                name: "Vendor.Quill",
                factory: () => import("./vendor/Quill")
            },
            {
                name: "Vendor.Select2",
                factory: () => import("./vendor/Select2")
            }
        ]);

        next();
    };
};

export { app };