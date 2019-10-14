import { getGenericThemableSubcomponentBuilder } from '../../util.js';
import './YButton.css';
import '../../Y.css';

const getGenericButton = getGenericThemableSubcomponentBuilder('y button', globalTheme => ((globalTheme.YBasic || {}).YButton || {}))

export const YButton = getGenericButton(undefined, {
    Tag: 'button',
    dismplayName: 'YButton'
});

export const YButtonPrimary = getGenericButton(undefined, {
    Tag: 'button',
    extraClassNames: ['primary'],
    displayName: 'YButtonPrimary'
});

export const YButtonSecondary = getGenericButton(undefined, {
    Tag: 'button',
    extraClassNames: ['secondary'],
    displayName: 'YButtonPrimary'
});

export default {
	YButtonPrimary,
	YButtonSecondary,
	YButton
};
