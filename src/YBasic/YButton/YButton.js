import { buildGenericThemableComponent } from '../../util.js';
import './YButton.css';

export const ThemableYButton = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-button',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {}),
    displayName: 'YButton'
});

export const ThemableYButtonPrimary = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-button primary',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {}),
    displayName: 'YButtonPrimary'
});

export const ThemableYButtonSecondary = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-button secondary',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {}),
    displayName: 'YButtonSecondary'
});

export const YButton = ThemableYButton();
export const YButtonPrimary = ThemableYButtonPrimary()
export const YButtonSecondary = ThemableYButtonSecondary();

export const ThemableYButtons = globalTheme => ({
	YButton: ThemableYButton(globalTheme),
	YButtonPrimary: ThemableYButtonPrimary(globalTheme),
	YButtonSecondary: ThemableYButtonSecondary(globalTheme)
});

export default {
	YButtonPrimary,
	YButtonSecondary,
	YButton
};
