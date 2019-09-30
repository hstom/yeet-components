import { buildGenericThemableComponent } from '../../util.js';
import './YSelect.css';

export const ThemableYOption = buildGenericThemableComponent({
    Tag: 'option',
    componentClassName: 'y-option',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YOption || {}),
    displayName: 'YOption'
});

export default ThemableYOption();