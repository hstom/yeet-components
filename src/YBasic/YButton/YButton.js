import React from 'react';
import {catClassName} from '../../util.js';
import './YButton.css';

const YButtonDefaultClassName = 'y y-button';

const themableYButtonGenerator = (globalTheme = {}) => {
	const {
		defaultStyle={},
		defaultClassName='',
		excludeComponentDefaultClassName=false
	} = (((globalTheme.YBasic || {}).YButton) || {});

	return ({typeClassName}) => ({style = defaultStyle, className: propClassName, children, ...props}) => {
		return (
			<button
				style={Object.assign({}, defaultStyle, style)}
				className={catClassName(
					(excludeComponentDefaultClassName ? '' : YButtonDefaultClassName),
					defaultClassName,
					typeClassName,
					propClassName
				)}
				{...props}
			>
				{children}
			</button>
		);
	}
}

export const YButton = themableYButtonGenerator()({typeClassName: ''});
export const YButtonPrimary = themableYButtonGenerator()({typeClassName: 'primary'})
export const YButtonSecondary = themableYButtonGenerator()({typeClassName: 'secondary'});

export const ThemableYButton = globalTheme => ({
	YButton: themableYButtonGenerator(globalTheme)({typeClassName: ''}),
	YButtonPrimary: themableYButtonGenerator(globalTheme)({typeClassName: 'primary'}),
	YButtonSecondary: themableYButtonGenerator(globalTheme)({typeClassName: 'secondary'})
});

export default {
	YButtonPrimary,
	YButtonSecondary,
	YButton
};
