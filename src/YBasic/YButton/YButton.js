import { buildGenericThemableComponent } from '../../util.js';
import './YButton.css';

const _ThemableYButton = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-button',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {}),
    displayName: 'YButton'
});

const _ThemableYButtonPrimary = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-button primary',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {}),
    displayName: 'YButtonPrimary'
});

const _ThemableYButtonSecondary = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-button secondary',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {}),
    displayName: 'YButtonSecondary'
});

export const YButton = _ThemableYButton();
export const YButtonPrimary = _ThemableYButtonPrimary()
export const YButtonSecondary = _ThemableYButtonSecondary();

export const ThemableYButton = globalTheme => ({
	YButton: _ThemableYButton(globalTheme),
	YButtonPrimary: _ThemableYButtonPrimary(globalTheme),
	YButtonSecondary: _ThemableYButtonSecondary(globalTheme)
});

export default {
	YButtonPrimary,
	YButtonSecondary,
	YButton
};
