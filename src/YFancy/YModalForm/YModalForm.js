import React from 'react';
import YModal from '../../YBasic/YModal/YModal.js';
import YButton from '../../YBasic/YButton/YButton.js';

export const DefaultHeader = ({title}) => 
    <div style={Object.assign({}, defaultRegionStyles, defaultBottomBorder)}>
        {title}
    </div>;
export const DefaultFooter = ({submitAction, cancelAction}) =>
    <div style={defaultRegionStyles}>
        <YButton onClick={cancelAction}>Cancel</YButton>
        <YButton onClick={submitAction}>Submit</YButton>
    </div>;

const defaultModalStyleOverrides = {
    padding: '15px 0'
};

const defaultBottomBorder = {
    borderBottom: '4px solid rgba(0, 0, 0, .3)'
}

const defaultRegionStyles = {
    padding: '0 15px'
};

const YModalForm = ({
    Header=DefaultHeader,
    Footer=DefaultFooter,
    title,
    children,
    submitAction,
    cancelAction,
    style,
    ...props
    }) => {
        const patchedStyle = Object.assign({}, defaultModalStyleOverrides, style);
        return (<YModal style={patchedStyle} {...props}>
    <Header title={title}/>
    <div style={Object.assign({}, defaultRegionStyles, defaultBottomBorder)}>
        {children}
    </div>
    <Footer submitAction={submitAction} cancelAction={cancelAction}/>
</YModal>);}

export default YModalForm;