import React from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../util.js';
import { clearablePath, dropdownPath } from './YSelectSVGs.js';
import './YSelectComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select indicator', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

export const ThemableYSelectIndicatorContainer = globalTheme => {
    const IndicatorContainer = genSubcomponent('container')(globalTheme);
    const IndicatorSeparator = genSubcomponent('separator')(globalTheme);
    const IndicatorClearable = genSubcomponent('clearable', {Tag: 'button'})(globalTheme);
    const IndicatorClearableSVG = genSubcomponent('clearable svg', {
        Tag: 'svg',
        propMutator: () => ({
            height: '20px',
            width: '20px',
            viewBox: '0 0 20 20',
            'aria-hidden': true,
            focusable: false,
            children: <path d={clearablePath}></path>
        })
    })(globalTheme);
    const IndicatorDropdown = genSubcomponent('dropdown', {Tag: 'button'})(globalTheme);
    const IndicatorDropdownSVG = genSubcomponent('dropdown svg', {
        Tag: 'svg',
        propMutator: () => ({
            height: '20px',
            width: '20px',
            viewBox: '0 0 20 20',
            'aria-hidden': true,
            focusable: false,
            children: <path d={dropdownPath}></path>
        })
    })(globalTheme);

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