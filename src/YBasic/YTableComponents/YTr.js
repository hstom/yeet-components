import React from 'react';
import { catClassName } from '../../util.js';
import './YTableComponents.css';

const YTrDefaultClassName = 'y y-tr';

export const ThemableYTr = (globalTheme = {}) => {

    const {
        defaultStyle={},
        defaultClassName='',
        excludeComponentDefaultClassName=false,
    } = ((globalTheme.YBasic || {}).YTr || {});

    return ({
        style = {},
        childStyle = {},
        
        className: propClassName,
        childClassName: propChildClassName,
        
        children,
        
        ...props
    }) => {
        return (
            <tr
                className={catClassName(
                    (excludeComponentDefaultClassName ? '' : YTrDefaultClassName),
                    defaultClassName,
                    propClassName
                )}
                style={Object.assign({}, defaultStyle, style)}
                {...props}
            >
                {children}
            </tr>
        );
    }
    
}

const YTr = ThemableYTr();
export default YTr;