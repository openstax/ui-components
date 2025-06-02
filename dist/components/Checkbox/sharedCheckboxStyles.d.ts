export declare type CheckboxVariant = keyof typeof checkboxVariants;
export declare type CheckboxSize = 1.4 | 1.6 | 1.8 | 2;
export declare const checkboxVariants: {
    readonly primary: {
        readonly backgroundColor: "#026AA1";
        readonly color: "inherit";
        readonly unCheckedBorder: "1px solid #6f6f6f";
        readonly checkedBorder: "1px solid #026AA1";
        readonly backgroundImage: "data:image/svg+xml,<svg height=\"125px\" width=\"125px\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 17.837 17.837\" xml:space=\"preserve\" fill=\"%23000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g><path style=\"fill:%23fff;\" d=\"M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z\"></path></g></g></svg>";
    };
    readonly light: {
        readonly backgroundColor: "#ffffff";
        readonly color: "inherit";
        readonly unCheckedBorder: "1px solid #d5d5d5";
        readonly checkedBorder: "1px solid #d5d5d5";
        readonly backgroundImage: "data:image/svg+xml,<svg height=\"125px\" width=\"125px\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 17.837 17.837\" xml:space=\"preserve\" fill=\"%23000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g><path style=\"fill:%235e5e5e;\" d=\"M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z\"></path></g></g></svg>";
    };
    readonly error: {
        readonly backgroundColor: "#FBE7EA";
        readonly color: "#c22032";
        readonly unCheckedBorder: "1px solid #e298a0";
        readonly checkedBorder: "1px solid #e298a0";
        readonly backgroundImage: "data:image/svg+xml,<svg height=\"125px\" width=\"125px\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 17.837 17.837\" xml:space=\"preserve\" fill=\"%23000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g><path style=\"fill:%23C22032;\" d=\"M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z\"></path></g></g></svg>";
    };
    readonly disabled: {
        readonly backgroundColor: "#ffffff";
        readonly color: "inherit";
        readonly unCheckedBorder: "1px solid #d5d5d5";
        readonly checkedBorder: "1px solid #d5d5d5";
        readonly backgroundImage: "none";
    };
};
