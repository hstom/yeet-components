import React from 'react';
import { catClassName } from '../../util.js';
import './YTableComponents.css';

const YTheadDefaultClassName = 'y y-thead';

export const ThemableYThead = (globalTheme = {}) => {

    const {
        defaultStyle={},
        defaultClassName='',
        excludeComponentDefaultClassName=false,
    } = ((globalTheme.YBasic || {}).YThead || {});

    return ({
        style = {},
        
        className: propClassName,
        childClassName: propChildClassName,
        
        children,
        
        ...props
    }) => {
        return (
            <thead
                className={catClassName(
                    (excludeComponentDefaultClassName ? '' : YTheadDefaultClassName),
                    defaultClassName,
                    propClassName
                )}
                style={Object.assign({}, defaultStyle, style)}
                {...props}
            >
                {children}
            </thead>
        );
    }
    
}

const YThead = ThemableYThead();
export default YThead;