import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const YTh = buildGenericThemableComponent({
    Tag: 'th',
    componentClassName: 'y-th',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YTh || {}),
    displayName: 'YTh',
    propMutator:
        ({style = {}, resizable = false, ...props}) =>
        ({style: Object.assign({}, style, {resize: resizable ? 'horizontal': style.resize}), ...props})
});

export default YTh;