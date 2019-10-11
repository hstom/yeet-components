import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const YTd = buildGenericThemableComponent({
    Tag: 'td',
    componentClassName: 'y-td',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YTd || {}),
    displayName: 'YTd'
});

export default YTd;