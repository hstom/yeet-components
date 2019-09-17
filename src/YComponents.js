import YBasic, {ThemableYBasic} from './YBasic/YBasic';
import YFancy, {ThemableYFancy} from './YFancy/YFancy';

export const ThemableYComponents = globalTheme => ({
    YBasic: ThemableYBasic(globalTheme),
    YFancy: ThemableYFancy(globalTheme)
});

export {
    YBasic,
    YFancy
}