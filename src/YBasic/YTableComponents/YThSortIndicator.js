import React from 'react';
import { catClassName } from '../../util.js';
import './YTableComponents.css';

const YThSortIndicatorDefaultClassName = 'y y-th-sort-indicator';

export const ThemableYThSortIndicator = (globalTheme = {}) => {

    const {
        defaultStyle={},
        defaultClassName='',
        excludeComponentDefaultClassName=false,
    } = ((globalTheme.YBasic || {}).YThSortIndicator || {});

    return ({
        style = {},
        
        className: propClassName,
        childClassName: propChildClassName,
        
        children,
        
        ...props
    }) => {
        return (
            <div
                className={catClassName(
                    (excludeComponentDefaultClassName ? '' : YThSortIndicatorDefaultClassName),
                    defaultClassName,
                    propClassName
                )}
                style={Object.assign({}, defaultStyle, style)}
                {...props}
            >
                {children}
            </div>
        );
    }
    
}

const YThSortIndicator = ThemableYThSortIndicator();
export default YThSortIndicator;