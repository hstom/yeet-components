import React from 'react';
import {ThemableYModal} from '../../YBasic/YModal/YModal.js';
import {ThemableYButton} from '../../YBasic/YButton/YButton.js';
import {catClassName} from '../../util.js';
import './YModalForm.css';

export const ThemableYModalForm = (globalTheme = {}) => {
    const componentTheme = ((globalTheme.YFancy ||{}).YModalForm) || {}; 

    const {
        overrideHeaderComponent: themeHeaderComponent,
        overrideFooterComponent: themeFooterComponent
    } = componentTheme;

    const YModal = ThemableYModal(globalTheme);
    const { YButtonPrimary, YButtonSecondary} = ThemableYButton(globalTheme);

    const DefaultHeader = ({title}) => 
        <div
            className='y y-modal-form y-modal-form-region y-modal-form-header'
        >
            {title}
        </div>;

    const DefaultFooter = ({submitAction, cancelAction}) =>
        <div
            className='y y-modal-form y-modal-form-region y-modal-form-footer'
        >
            <YButtonSecondary onClick={cancelAction}>Cancel</YButtonSecondary>
            <YButtonPrimary onClick={submitAction}>Submit</YButtonPrimary>
        </div>;

    return ({
        style = {},
        childStyle = {},
        
        className,
        childClassName,
        wrapperClassName,

        overrideHeaderComponent,
        overrideFooterComponent,
        
        title,
        children,
        submitAction,
        cancelAction,
        
        ...props
    }) => {

        const HeaderComponent = overrideHeaderComponent || themeHeaderComponent || DefaultHeader;
        const FooterComponent = overrideFooterComponent || themeFooterComponent || DefaultFooter;

        return (
            <YModal
                className={catClassName('y y-modal-form y-modal-form', className)}
                childClassName={catClassName('y y-modal-form y-modal-form-wrapper', wrapperClassName)}
                {...props}
            >
                <HeaderComponent title={title} />
                <div className={catClassName('y y-modal-form y-modal-form-region', childClassName)}>
                    {children}
                </div>
                <FooterComponent submitAction={submitAction} cancelAction={cancelAction} />
            </YModal>
        );
    }
    
}

export const YModalForm = ThemableYModalForm();
window.ThemableYModalForm = ThemableYModalForm;
export default YModalForm;