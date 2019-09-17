import {ThemableYComponents} from './src/YComponents.js';
import './RedThemedYComponents.css';

const themedComponents = ThemableYComponents({
    YButton: {
        defaultClassName: 'red'
    }
});
export const YButtonPrimary = themedComponents.YBasic.YButton.YButtonPrimary
export const YModalForm = themedComponents.YFancy.YModalForm;

export default themedComponents;