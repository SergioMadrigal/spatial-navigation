export declare const ROOT_FOCUS_KEY = "SN:ROOT";
export interface FocusableComponentLayout {
    left: number;
    top: number;
    width: number;
    height: number;
    x: number;
    y: number;
    node: HTMLElement;
}
export declare type PressedKeys = {
    [index: string]: number;
};
/**
 * Extra details about pressed keys passed on the key events
 */
export interface KeyPressDetails {
    pressedKeys: PressedKeys;
}
/**
 * Extra details passed from outside to be bounced back on other callbacks
 */
export interface FocusDetails {
    event?: KeyboardEvent;
}
export declare type KeyMap = {
    [index: string]: number;
};
export declare const init: ({ debug, visualDebug, nativeMode, throttle: throttleParam, throttleKeypresses }?: {
    debug?: boolean;
    visualDebug?: boolean;
    nativeMode?: boolean;
    throttle?: number;
    throttleKeypresses?: boolean;
}) => void, destroy: () => void, setKeyMap: (keyMap: KeyMap) => void;
