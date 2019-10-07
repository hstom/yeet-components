import React from 'react';
import {ThemableYModal} from '../../YBasic/YModal/YModal.js';
import {ThemableYButtonPrimary, ThemableYButtonSecondary} from '../../YBasic/YButton/YButton';
import {catClassName, buildGenericThemableComponent} from '../../util.js';
import './YModalForm.css';

const ThemableYModalFormHeader = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-modal-form-header y-modal-form-region',
    themeSelector: globalTheme => (((globalTheme.YBasic || {}).YModalForm || {}).header || {}),
    displayName: 'YModalFormHeader'
});

const ThemableYModalFormBody = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-modal-form-body y-modal-form-region',
    themeSelector: globalTheme => (((globalTheme.YBasic || {}).YModalForm || {}).body || {}),
    displayName: 'YModalFormBody'
});

const ThemableYModalFormFooter = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-modal-form-footer y-modal-form-region',
    themeSelector: globalTheme => (((globalTheme.YBasic || {}).YModalForm || {}).footer || {}),
    displayName: 'YModalFormFooter'
});

export const ThemableYModalForm = globalTheme => {
    const ThemedYModal = ThemableYModal(globalTheme);
    const ThemedYButtonPrimary = ThemableYButtonPrimary(globalTheme);
    const ThemedYButtonSecondary = ThemableYButtonSecondary(globalTheme);

    const ThemedYModalFormHeader = ThemableYModalFormHeader(globalTheme);
    const ThemedYModalFormBody = ThemableYModalFormBody(globalTheme);
    const ThemedYModalFormFooter = ThemableYModalFormFooter(globalTheme);

    const YModalFormComponent = ({
        style = {},
        className = '',
        
        child = {},
        header = {},
        body = {},
        footer = {},

        title,
        submitAction,
        cancelAction,
        
        children,

        ...props
    }) => (
        <ThemedYModal
            style={style}
            className={catClassName('y-modal-form', className)}
            child={child}
            onOutsideClick={cancelAction}
            {...props}
        >
            <ThemedYModalFormHeader
                {...header}
            >
                {title}
            </ThemedYModalFormHeader>
            <ThemedYModalFormBody
                {...body}
            >
                    {children}
            </ThemedYModalFormBody>
            <ThemedYModalFormFooter
                {...footer}
            > {/*These are floated backwards */}
                <ThemedYButtonSecondary onClick={cancelAction}>
                    Cancel    
                </ThemedYButtonSecondary>
                <ThemedYButtonPrimary onClick={submitAction}>
                    Submit
                </ThemedYButtonPrimary>
            </ThemedYModalFormFooter>

        </ThemedYModal>
    )

    YModalFormComponent.displayName = 'YModalForm';
    return YModalFormComponent;
}

export default ThemableYModalForm();