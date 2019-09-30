import { buildGenericThemableComponent } from '../../util.js';
import './YSelect.css';

export const ThemableYSelect = buildGenericThemableComponent({
    Tag: 'select',
    componentClassName: 'y-select',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YSelect || {}),
    displayName: 'YSelect'
});

export default ThemableYSelect();