import {ThemableYComponents} from './src/YComponents.js';

const themedComponents = ThemableYComponents({
    YButton: {
        defaultStyle: {
            backgroundColor: 'red'
        }
    }
});
window.themedComponents = themedComponents;
export const YButtonPrimary = themedComponents.YBasic.YButton.YButtonPrimary
export const YModalForm = themedComponents.YFancy.YModalForm;

export default themedComponents;