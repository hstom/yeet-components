import React from 'react';
import { catClassName } from '../../util.js';
import './YTableComponents.css';

const YTbodyDefaultClassName = 'y y-tbody';

export const ThemableYTbody = (globalTheme = {}) => {

    const {
        defaultStyle={},
        defaultClassName='',
        excludeComponentDefaultClassName=false,
    } = ((globalTheme.YBasic || {}).YTbody || {});

    return ({
        style = {},
        
        className: propClassName,
        childClassName: propChildClassName,
        
        children,
        
        ...props
    }) => {
        return (
            <tbody
                className={catClassName(
                    (excludeComponentDefaultClassName ? '' : YTbodyDefaultClassName),
                    defaultClassName,
                    propClassName
                )}
                style={Object.assign({}, defaultStyle, style)}
                {...props}
            >
                {children}
            </tbody>
        );
    }
    
}

const YTbody = ThemableYTbody();
export default YTbody;