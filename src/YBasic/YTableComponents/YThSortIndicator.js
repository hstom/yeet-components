import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const ThemableYThSortIndicator = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-th-sort-indicator',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YThSortIndicator || {})
});

export default ThemableYThSortIndicator();