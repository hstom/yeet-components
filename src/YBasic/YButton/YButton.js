import React from 'react';

const YButtonGenerator = defaultStyle => ({style = defaultStyle, children, ...props}) => {
	const patchedStyle = Object.assign({}, defaultStyle, style);
	return (<button style={patchedStyle} {...props}>{children}</button>);
}

const basicStyle = {
	borderRadius: '4px',
	padding: '0 15px',
	lineHeight: '1.5',
	fontSize: '14px',
	transition: 'border-color 0.15s ease, background-color 0.15s ease',
}

const primaryStyle = {
	border: '1px solid black',
	backgroundColor: '#0ca2d0',
	color: '#ffffff'
};

const secondaryStyle = {
	backgroundColor: '#ffffff',
	color: '#0ca2d0',
	border: '1px solid #0ca2d0'
}

export const Primary = YButtonGenerator(Object.assign({}, basicStyle, primaryStyle));
export const Secondary = YButtonGenerator(Object.assign({}, basicStyle, secondaryStyle));

export default Primary;
