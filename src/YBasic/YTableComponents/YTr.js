import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const ThemableYTr = buildGenericThemableComponent({
    Tag: 'tr',
    componentClassName: 'y-tr',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YTr || {}),
    displayName: 'YTr'
});

export default ThemableYTr();