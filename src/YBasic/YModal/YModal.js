import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import './YModal.css';

const ThemableYModalWrapper = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-modal',
    themeSelector: globalTheme => ((globalTheme.YBasic || {}).YModal || {}),
    displayName: 'YModal'
});

const ThemableYModalChild = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-modal-child',
    themeSelector: globalTheme => (((globalTheme.YBasic || {}).YModal || {}).child || {}),
    displayName: 'YModalChild'
});

export const ThemableYModal = globalTheme => {
    const ThemedYModalWrapper = ThemableYModalWrapper(globalTheme);
    const ThemedYModalChild = ThemableYModalChild(globalTheme);

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