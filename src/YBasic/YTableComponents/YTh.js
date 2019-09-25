import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const ThemableYTh =
    globalTheme =>
        ({
            style = {},
            resizable = false,
            ...props
        }) => buildGenericThemableComponent({
            Tag: 'th',
            componentClassName: 'y-th',
            themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YTh || {}),
            displayName: 'YTh'
        })(
            globalTheme
        )(
            Object.assign({}, props, { style: Object.assign({}, style, { resize: resizable ? 'horizontal' : style.resize }) })
        );


export default ThemableYTh();