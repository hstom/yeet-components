import React, {useRef} from 'react';
import { getGenericThemableSubcomponentBuilder, useClickOutsideHandler } from '../../util.js';
import './YModal.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y modal', globalTheme => ((globalTheme.YBasic || {}).YModal || {}));

const Wrapper = genSubcomponent();
const Child = genSubcomponent('child', {forwardRef: true});

const YModalComponent =  ({
    style = {},
    className = '',

    yChild = {},
    
    children,

    onOutsideClick,
    
    ...props
}) => {
    const wrapperRef = useRef();
    useClickOutsideHandler(wrapperRef, (e) => onOutsideClick && onOutsideClick(e));
    
    return (
    <Wrapper
        style={style}
        className={className}
        {...props}
    >
        <Child
            ref={wrapperRef} // This wraps the content, the real wrapper is 'outside'
            {...yChild}
        >
            {children}
        </Child>
    </Wrapper>
    );
}

YModalComponent.displayName = 'YModal';
export const YModal = YModalComponent;
export default YModal;