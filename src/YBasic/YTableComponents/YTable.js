import React from 'react';
import { catClassName } from '../../util.js';
import './YTableComponents.css';
import YTHead from './YThead.js'
import YTh from './YTh.js';
import YTBody from './YTbody.js';
import YTr from './YTr.js';
import YTd from './YTd.js';
import YThSortIndicator from './YThSortIndicator.js';

const YTableDefaultClassName = 'y y-table';

export const ThemableYTable = (globalTheme = {}) => {

    const {
        defaultStyle = {},
        defaultClassName = '',
        excludeComponentDefaultClassName = false,
    } = ((globalTheme.YBasic || {}).YTable || {});

    return class extends React.Component {
        render() {
            const {
                style = {},
    
                className: propClassName,
                childClassName: propChildClassName,
    
                children,
    
                ...props
            } = this.props;
            return (
                <table
                    className={catClassName(
                        (excludeComponentDefaultClassName ? '' : YTableDefaultClassName),
                        defaultClassName,
                        propClassName
                    )}
                    ref={this.tableRef}
                    style={Object.assign({}, defaultStyle, style)}
                    {...props}
                >
                    {children}
                </table>
            );
        }
    }

}

const YTable = ThemableYTable();
export {
    YTable,
    YTHead,
    YTh,
    YTBody,
    YTr,
    YTd,
    YThSortIndicator
}

export default {
    YTable,
    YTHead,
    YTh,
    YTBody,
    YTr,
    YTd
};