import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const ThemableYThead = buildGenericThemableComponent({
    Tag: 'thead',
    componentClassName: 'y-thead',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YThead || {})
});

export default ThemableYThead();