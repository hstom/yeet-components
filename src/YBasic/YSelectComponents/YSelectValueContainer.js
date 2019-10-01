import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import { clearablePath } from './YSelectSVGs.js';
import './YSelectComponents.css';

/**
 * VALUE REGION
 */

export const ThemableYSelectValueContainerWrapper = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-container',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valueContainer || {}),
    displayName: 'YSelectValueContainer'
});

export const ThemableYSelectMultiValueButton = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-multi-value-button',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueButton || {}),
    displayName: 'YSelectMutliValueButton'
});

export const ThemableYSelectMultiValueLabel = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-multi-value-label',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueLabel || {}),
    displayName: 'YSelectMutliValueLabel'
});

export const ThemableYSelectMultiValueRemove = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-multi-value-remove',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueRemove || {}),
    displayName: 'YSelectMutliValueRemove'
});

export const ThemableYSelectMultiValueRemoveSVG = buildGenericThemableComponent({
    Tag: 'svg',
    componentClassName: 'y-select-multi-value-remove-svg',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueRemoveSVG || {}),
    displayName: 'YSelectMutliValueRemoveSVG',
    propMutator: () => ({
        height: '20px',
        width: '20px',
        viewBox: '0 0 20 20',
        'aria-hidden': true,
        focusable: false,
        children: <path d={clearablePath}></path>
    })
});

export const ThemableYSelectValuePlaceholder = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-placeholder',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valuePlaceholder || {}),
    displayName: 'YSelectValuePlaceholder'
});

export const ThemableYSelectValueSingleValue = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-single-value',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valueSingleValue || {}),
    displayName: 'YSelectValueSingleValue'
});

/**
 * INPUT REGION
 */

export const ThemableYSelectValueInputWrapper = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-input-wrapper',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valueInputWrapper || {}),
    displayName: 'YSelectValueInputWrapper'
});

export const ThemableYSelectValueInputStage = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-input-stage',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valueInputStage || {}),
    displayName: 'YSelectValueInputStage'
});

export const ThemableYSelectValueInput = buildGenericThemableComponent({
    Tag: 'input',
    componentClassName: 'y-select-value-input',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valueInput || {}),
    displayName: 'YSelectValueInput',
    forwardRef: true
});

export const ThemableYSelectValueContainer = globalTheme => {
    const ValueContainer = ThemableYSelectValueContainerWrapper(globalTheme);
    const ValuePlaceholder = ThemableYSelectValuePlaceholder(globalTheme);
    const ValueSingleValue = ThemableYSelectValueSingleValue(globalTheme);

    const ValueInputWrapper = ThemableYSelectValueInputWrapper(globalTheme);
    const ValueInputStage = ThemableYSelectValueInputStage(globalTheme);
    const ValueInput = ThemableYSelectValueInput(globalTheme);

    const YSelectValueComponent = ({
        menuOpen,
        toggleMenu,
        selected,
        options,
        placeholder,
        searchable,
        child = {},
        tabindex = "0",
        searchString,
        forwardedRef,
        ...rest
    }) => (<ValueContainer
        onClick={toggleMenu}
        {...rest}
    >
        {/* <MultiValueButton>
            <MultiValueLabel>
                Goofy
            </MultiValueLabel>
            <MultiValueRemove>
                <MultiValueRemoveSVG/>
            </MultiValueRemove>
        </MultiValueButton> */}
        {!(searchable && menuOpen) &&
            (selected == null
            ? <ValuePlaceholder
                {...child}
            >
                {placeholder}
            </ValuePlaceholder>
            : <ValueSingleValue
                {...child}
            >
                {options.filter(o => o.value === selected)[0].label}
            </ValueSingleValue>
        )}
        {(searchable && menuOpen) && 
            <ValueInputWrapper>
                <ValueInputStage>
                    <ValueInput
                        autocapitalize='none'
                        autocomplete='off'
                        autocorrect='off'
                        spellcheck='false'
                        tabindex={tabindex}
                        type='text'
                        aria-autocomplete='list'
                        value={searchString}
                        ref={forwardedRef}
                        onClick={(e) => {e.stopPropagation(); return false;}}
                    ></ValueInput>
                </ValueInputStage>
            </ValueInputWrapper>
        }
    </ValueContainer>);

    YSelectValueComponent.displayName = 'YSelectValueContainer';
    return React.forwardRef((props, ref) => {
        return <YSelectValueComponent {...props} forwardedRef={ref} />;
    });
}

export default ThemableYSelectValueContainer();