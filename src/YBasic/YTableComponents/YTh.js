import React from 'react';
import { catClassName } from '../../util.js';
import './YTableComponents.css';

const YThDefaultClassName = 'y y-th';

export const ThemableYTh = (globalTheme = {}) => {

    const {
        defaultStyle = {},
        defaultClassName = '',
        excludeComponentDefaultClassName = false,
    } = ((globalTheme.YBasic || {}).YTh || {});

    const YThClass = class extends React.Component {
        render() {
            const {
                style = {},

                className: propClassName,
                childClassName: propChildClassName,

                children,
                resizable = true,
                ...props
            } = this.props;

            return (
                <th
                    className={catClassName(
                        (excludeComponentDefaultClassName ? '' : YThDefaultClassName),
                        defaultClassName,
                        resizable ? 'resizable' : '',
                        propClassName
                    )}
                    style={Object.assign({}, defaultStyle, style)}
                    {...props}
                >
                    {children}
                </th>
            );
        }
    }
    return YThClass;
    
}

const YTh = ThemableYTh();
export default YTh;