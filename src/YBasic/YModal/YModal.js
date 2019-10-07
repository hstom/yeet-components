import React from 'react';
import { getGenericThemableSubcomponentBuilder, outsideClick } from '../../util.js';
import './YModal.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y modal', globalTheme => ((globalTheme.YBasic || {}).YModal || {}));

export const ThemableYModal = globalTheme => {
    const ThemedYModalWrapper = genSubcomponent()(globalTheme);
    const ThemedYModalChild = genSubcomponent('child', {forwardRef: true})(globalTheme);

    class YModal extends React.Component {
        constructor(props) {
            super(props);
            this.wrapperRef = React.createRef();
        }

        render() {
            const {
                style = {},
                className = '',
        
                child = {},
                
                children,

                onOutsideClick, // omitted
                
                ...props
            } = this.props;
            
            return (
            <ThemedYModalWrapper
                style={style}
                className={className}
                {...props}
            >
                <ThemedYModalChild
                    ref={this.wrapperRef} // This wraps the content, the real wrapper is 'outside'
                    {...child}
                >
                    {children}
                </ThemedYModalChild>
            </ThemedYModalWrapper>
            );
        }
    }

    return outsideClick(YModal);
}

const YModal = ThemableYModal();
export default YModal;