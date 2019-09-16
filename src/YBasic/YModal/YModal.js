import React from 'react';

const defaultStyle = {
    // display: 'none',
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgb(0,0,0,.4)',
};

const defaultChildStyle = {
    backgroundColor: 'white',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #888',
    borderRadius: '5px',
    width: '80%',
    color: 'black',
    maxHeight: '80%',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: 'translateY(-50%)',
    overflowY: 'auto'
}

export default ({style = {}, childStyle = {}, children, ...props}) => {
    const patchedStyle = Object.assign({}, defaultStyle, style);
    const patchedChildStyle = Object.assign({}, defaultChildStyle, style);
    return (<div style={patchedStyle} {...props}>
        <div style={patchedChildStyle}>
            {children}
        </div>
    </div>);
}
