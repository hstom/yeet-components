import React from 'react';
import { catClassName } from '../../util.js';
import './YTableComponents.css';

const YTdDefaultClassName = 'y y-td';

export const ThemableYTd = (globalTheme = {}) => {

    const {
        defaultStyle={},
        defaultClassName='',
        excludeComponentDefaultClassName=false,
    } = ((globalTheme.YBasic || {}).YTd || {});

    return ({
        style = {},
        childStyle = {},
        
        className: propClassName,
        childClassName: propChildClassName,
        
        children,
        
        ...props
    }) => {
        return (
            <td
                className={catClassName(
                    (excludeComponentDefaultClassName ? '' : YTdDefaultClassName),
                    defaultClassName,
                    propClassName
                )}
                style={Object.assign({}, defaultStyle, style)}
                {...props}
            >
                {children}
            </td>
        );
    }
    
}

const YTd = ThemableYTd();
export default YTd;