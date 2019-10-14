import React from 'react';
import {YModal} from '../../YBasic/YModal/YModal.js';
import {YButtonPrimary, YButtonSecondary} from '../../YBasic/YButton/YButton';
import {catClassName, getGenericThemableSubcomponentBuilder} from '../../util.js';
import './YModalForm.css';
import '../../Y.css';

const getSubcomponent = getGenericThemableSubcomponentBuilder('y modal form', globalTheme => (globalTheme.YBasic || {}).YModalForm || {});

const regionClassNames = {extraClassNames: ['y-modal-form-region']};

const YModalFormHeader = getSubcomponent('header', regionClassNames);
const YModalFormBody = getSubcomponent('body', regionClassNames);
const YModalFormFooter = getSubcomponent('footer', regionClassNames);

const YModalFormComponent = ({
    style = {},
    className = '',
    
    yChild = {},
    yHeader = {},
    yBody = {},
    yFooter = {},
    ySubmit = {},
    yCancel = {},

    title,
    submitAction,
    cancelAction,
    
    children,

    ...rest
}) => (
    <YModal
        style={style}
        className={catClassName('y-modal-form', className)}
        child={yChild}
        onOutsideClick={cancelAction}
        {...rest}
    >
        <YModalFormHeader {...yHeader}>
            {title}
        </YModalFormHeader>
        <YModalFormBody {...yBody}>
                {children}
        </YModalFormBody>
        <YModalFormFooter {...yFooter}>
            {/*These are floated backwards */}
            <YButtonSecondary {...ySubmit} onClick={cancelAction}>
                Cancel    
            </YButtonSecondary>
            <YButtonPrimary {...yCancel} onClick={submitAction}>
                Submit
            </YButtonPrimary>
        </YModalFormFooter>

    </YModal>
)

YModalFormComponent.displayName = 'YModalForm';
export const YModalForm = YModalFormComponent;

export default YModalForm;