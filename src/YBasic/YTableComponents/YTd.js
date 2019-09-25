import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const ThemableYTd = buildGenericThemableComponent({
    Tag: 'td',
    componentClassName: 'y-td',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YTd || {}),
    displayName: 'YTd'
});

export default ThemableYTd();