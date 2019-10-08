import React, {useRef} from 'react';
import { getGenericThemableSubcomponentBuilder, useClickOutsideHandler } from '../../util.js';
import './YModal.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y modal', globalTheme => ((globalTheme.YBasic || {}).YModal || {}));

export const ThemableYModal = globalTheme => {
    const ThemedYModalWrapper = genSubcomponent()(globalTheme);
    const ThemedYModalChild = genSubcomponent('child', {forwardRef: true})(globalTheme);

    const YModal =  ({
                style = {},
                className = '',
        
                child = {},
                
                children,

                onOutsideClick,
                
                ...props
            }) => {
                const wrapperRef = useRef();
                useClickOutsideHandler(wrapperRef, (e) => onOutsideClick && onOutsideClick(e));
                
                return (
                <ThemedYModalWrapper
                    style={style}
                    className={className}
                    {...props}
                >
                    <ThemedYModalChild
                        ref={wrapperRef} // This wraps the content, the real wrapper is 'outside'
                        {...child}
                    >
                        {children}
                    </ThemedYModalChild>
                </ThemedYModalWrapper>
                );
        }

    YModal.displayName = 'YModal';
    return YModal;
}

const YModal = ThemableYModal();
export default YModal;