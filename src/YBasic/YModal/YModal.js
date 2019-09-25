import React from 'react';
import { catClassName } from '../../util.js';
import './YModal.css';

const YModalDefaultClassName = 'y y-modal';
const YModalDefaultChildClassName = 'y y-modal-content'

export const ThemableYModal = (globalTheme = {}) => {

    const {
        defaultStyle={},
        defaultChildStyle={}, 
        defaultClassName='',
        defaultChildClassName='',
        excludeComponentDefaultClassName=false,
        excludeComponentDefaultChildClassName=false
    } = ((globalTheme.YBasic || {}).YTable || {});

    const YModalComponent = ({
        style = {},
        childStyle = {},
        
        className: propClassName,
        childClassName: propChildClassName,
        
        children,
        
        ...props
    }) => {
        return (
            <div
                className={catClassName(
                    (excludeComponentDefaultClassName ? '' : YModalDefaultClassName),
                    defaultClassName,
                    propClassName
                )}
                style={Object.assign({}, defaultStyle, style)}
                {...props}
            >
                <div
                    className={catClassName(
                        (excludeComponentDefaultChildClassName ? '' : YModalDefaultChildClassName),
                        defaultChildClassName,
                        propChildClassName
                    )}
                    style={Object.assign({}, defaultChildStyle, childStyle)}
                >
                    {children}
                </div>
            </div>
        );
    }
    YModalComponent.displayName = 'YModal';
    return YModalComponent;
    
}

const YModal = ThemableYModal();
export default YModal;