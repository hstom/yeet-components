import React from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../../util.js';
import { clearablePath, dropdownPath } from './YSelectSVGs.js';
import '../YSelectComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select indicator', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

const IndicatorContainer = genSubcomponent('container');
const IndicatorSeparator = genSubcomponent('separator');
const IndicatorClearable = genSubcomponent('clearable', {Tag: 'button'});
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
});
const IndicatorDropdown = genSubcomponent('dropdown', {Tag: 'button'});
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
});

export const YSelectIndicator = ({
    yClearable={},
    yClearableSVG={},
    ySeparator={},
    yDropdown={},
    yDropdownSVG={},

    selected,
    clearable,
    clearSelection,
    toggleMenu,
    ...rest
}) => (<IndicatorContainer {...rest}>
    {clearable && (selected !== null) && <IndicatorClearable
        {...yClearable}
        onClick={clearSelection}
        aria-label='clear selection'
    >
        <IndicatorClearableSVG {...yClearableSVG}/>
    </IndicatorClearable>
    }
    <IndicatorSeparator {...ySeparator}/>
    <IndicatorDropdown {...yDropdown} onClick={toggleMenu} aria-label='open menu'>
        <IndicatorDropdownSVG {...yDropdownSVG}/>
    </IndicatorDropdown>
</IndicatorContainer>);

export default YSelectIndicator;