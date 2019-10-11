import React from 'react';
import {YThemeContext} from './src/util.js'
import './RedThemedYComponents.css';

export default ({children, ...props}) => (
    <YThemeContext.Provider value={{
        YBasic: {
            YButton: {
                defaultClassName: 'red'
            },
            YTable: {
                defaultClassName: 'red'
            },
            YTd: {
                defaultClassName: 'red'
            }
        }
    }} {...props}>
        {children}
    </YThemeContext.Provider>
);