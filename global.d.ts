// 언어 변경 이벤트 타입 정의
interface LocaleChangeEventDetail {
    locale: string;
}

interface CustomEventMap {
    localeChange: CustomEvent<LocaleChangeEventDetail>;
}

interface WindowEventMap extends CustomEventMap {}

interface Window {
    // For Electron detection
    process?: {
        type?: string;
        versions?: {
            electron?: string;
        };
    };
    // For Android WebView
    Android?: any;
    // For React Native WebView
    ReactNativeWebView?: any;

    // For iOS WebView
    webkit?: {
        messageHandlers?: {
            [key: string]: {
                postMessage: (message: any) => void;
            };
        };
    };
    // For Custom Android WebView injection
    webview?: {
        [key: string]: any;
    };
}
