import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import { clearablePath, dropdownPath } from './YSelectSVGs.js';
import './YSelectComponents.css';


export const ThemableYSelectIndicatorWrapper = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-indicator-container',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).indicator || {}),
    displayName: 'YSelectIndicatorContainer'
});

export const ThemableYSelectIndicatorSeparator = buildGenericThemableComponent({
    Tag: 'span',
    componentClassName: 'y-select-indicator-separator',
    themeSelector: (globalTheme) => ((((globalTheme.YBasic || {}).YSelect || {}).indicator || {}).separator || {}),
    displayName: 'YSelectIndicatorSeparator'
});

export const ThemableYSelectIndicatorClearable  = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-select-indicator-clearable',
    themeSelector: (globalTheme) => ((((globalTheme.YBasic || {}).YSelect || {}).indicator || {}).clearable || {}),
    displayName: 'YSelectIndicatorClearable'
});

export const ThemableYSelectIndicatorClearableSVG = buildGenericThemableComponent({
    Tag: 'svg',
    componentClassName: 'y-select-indicator-dropdown-svg',
    themeSelector: (globalTheme) => (((((globalTheme.YBasic || {}).YSelect || {}).indicator || {}).clearable || {}).svg || {}),
    displayName: 'YSelectIndicatorDropdownSVG',
    propMutator: () => ({
        height: '20px',
        width: '20px',
        viewBox: '0 0 20 20',
        'aria-hidden': true,
        focusable: false,
        children: <path d={clearablePath}></path>
    })
});

export const ThemableYSelectIndicatorDropdown = buildGenericThemableComponent({
    Tag: 'button',
    componentClassName: 'y-select-indicator-dropdown',
    themeSelector: (globalTheme) => ((((globalTheme.YBasic || {}).YSelect || {}).indicator || {}).dropDown || {}),
    displayName: 'YSelectIndicatorDropdown'
});

export const ThemableYSelectIndicatorDropdownSVG = buildGenericThemableComponent({
    Tag: 'svg',
    componentClassName: 'y-select-indicator-dropdown-svg',
    themeSelector: (globalTheme) => (((((globalTheme.YBasic || {}).YSelect || {}).indicator || {}).dropDown || {}).svg || {}),
    displayName: 'YSelectIndicatorDropdownSVG',
    propMutator: () => ({
        height: '20px',
        width: '20px',
        viewBox: '0 0 20 20',
        'aria-hidden': true,
        focusable: false,
        children: <path d={dropdownPath}></path>
    })
});

export const ThemableYSelectIndicatorContainer = globalTheme => {
    const IndicatorContainer = ThemableYSelectIndicatorWrapper(globalTheme);
    const IndicatorSeparator = ThemableYSelectIndicatorSeparator(globalTheme);
    const IndicatorClearable = ThemableYSelectIndicatorClearable(globalTheme);
    const IndicatorClearableSVG = ThemableYSelectIndicatorClearableSVG(globalTheme);
    const IndicatorDropdown = ThemableYSelectIndicatorDropdown(globalTheme);
    const IndicatorDropdownSVG = ThemableYSelectIndicatorDropdownSVG(globalTheme);

    return ({
        selected,
        clearable,
        clearSelection,
        toggleMenu
    }) => (<IndicatorContainer>
        {clearable && (selected !== null) && <IndicatorClearable
            onClick={clearSelection}
            aria-label='clear selection'
        >
            <IndicatorClearableSVG/>
        </IndicatorClearable>
        }
        <IndicatorSeparator/>
        <IndicatorDropdown onClick={toggleMenu} aria-label='open menu'>
            <IndicatorDropdownSVG/>
        </IndicatorDropdown>
    </IndicatorContainer>);
}