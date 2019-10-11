import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const YThSortIndicator = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-th-sort-indicator',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YThSortIndicator || {}),
    displayName: 'YThSortIndicator'
});

export default YThSortIndicator;