import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

export const ThemableYTbody = buildGenericThemableComponent({
    Tag: 'tbody',
    componentClassName: 'y-tbody',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YTbody || {})
});

export default ThemableYTbody();