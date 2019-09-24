import {ThemableYBasic} from './YBasic/YBasic';
import {ThemableYFancy} from './YFancy/YFancy';

export const ThemableYComponents = globalTheme => ({
    YBasic: ThemableYBasic(globalTheme),
    YFancy: ThemableYFancy(globalTheme)
});

export default ThemableYComponents();