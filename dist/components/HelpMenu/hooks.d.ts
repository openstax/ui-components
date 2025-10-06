export interface ApiError {
    type: string;
    detail: string;
}
export interface BusinessHours {
    startTime: number;
    endTime: number;
}
export interface BusinessHoursResponse {
    businessHoursInfo: {
        businessHours: BusinessHours[];
    };
    timestamp: number;
}
export interface ChatConfiguration {
    chatEmbedPath: string;
    businessHours?: {
        hours?: BusinessHoursResponse;
        err?: ApiError;
    };
}
export declare const getPreChatFields: (contactFormParams: {
    key: string;
    value: string;
}[]) => {
    visibleFields: {
        [k: string]: {
            value: string;
            isEditableByEndUser: boolean;
        };
    };
    hiddenFields: {
        [k: string]: string;
    };
};
export declare const useBusinessHours: (hoursResponse: ChatConfiguration["businessHours"] | undefined, gracePeriod?: number) => {
    hours?: BusinessHours | undefined;
    err?: ApiError | undefined;
} | undefined;
export declare const formatBusinessHoursRange: (startTime: number, endTime: number) => string;
export declare const useHoursRange: (businessHours: ChatConfiguration["businessHours"], gracePeriod?: number) => {
    range: string;
    err?: undefined;
} | {
    err: ApiError;
    range?: undefined;
} | {
    range?: undefined;
    err?: undefined;
};
export declare const useChatController: (path: string | undefined, preChatFields: ReturnType<typeof getPreChatFields>) => {
    openChat: () => void;
} | {
    openChat?: undefined;
};
