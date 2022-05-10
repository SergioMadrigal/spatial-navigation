import { RefObject } from 'react';
import { FocusableComponentLayout, FocusDetails, KeyPressDetails } from './SpatialNavigation';
export interface UseFocusableConfig {
    focusable?: boolean;
    saveLastFocusedChild?: boolean;
    trackChildren?: boolean;
    autoRestoreFocus?: boolean;
    isFocusBoundary?: boolean;
    focusKey?: string;
    preferredChildFocusKey?: string;
    onEnterPress?: (props: object, details: KeyPressDetails) => void;
    onEnterRelease?: (props: object) => void;
    onArrowPress?: (direction: string, props: object, details: KeyPressDetails) => boolean;
    onFocus?: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
    onBlur?: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
    extraProps?: object;
}
export interface UseFocusableResult {
    ref: RefObject<any>;
    focusSelf: () => void;
    focused: boolean;
    hasFocusedChild: boolean;
    focusKey: string;
    setFocus: (focusKey: string) => void;
    navigateByDirection: (direction: string, focusDetails: FocusDetails) => void;
    pause: () => void;
    resume: () => void;
    updateAllLayouts: () => void;
}
export declare const useFocusable: ({ focusable, saveLastFocusedChild, trackChildren, autoRestoreFocus, isFocusBoundary, focusKey: propFocusKey, preferredChildFocusKey, onEnterPress, onEnterRelease, onArrowPress, onFocus, onBlur, extraProps }?: UseFocusableConfig) => UseFocusableResult;
