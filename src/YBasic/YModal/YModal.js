import React from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../util.js';
import './YModal.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y modal', globalTheme => ((globalTheme.YBasic || {}).YModal || {}));

export const ThemableYModal = globalTheme => {
    const ThemedYModalWrapper = genSubcomponent()(globalTheme);
    const ThemedYModalChild = genSubcomponent('child')(globalTheme);

    return ({
        style = {},
        className = '',

        child = {},
        
        children,
        
        ...props
    }) => (
    <ThemedYModalWrapper
        style={style}
        className={className}
        {...props}
    >
        <ThemedYModalChild
            {...child}
        >
            {children}
        </ThemedYModalChild>
    </ThemedYModalWrapper>
    );
}

const YModal = ThemableYModal();
export default YModal;