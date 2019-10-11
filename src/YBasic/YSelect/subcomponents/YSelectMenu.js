import React from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../../util.js';
import '../YSelectComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select menu', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

export const YSelectMenuOption = genSubcomponent('option', {forwardRef: true});

const Menu = genSubcomponent();
const MenuList = genSubcomponent('list');
const MenuEmpty = genSubcomponent('empty');

const YSelectMenuComponent = ({
    yList={},
    yEmpty={},

    menuOpen,
    menuOptions,
    options,
    ...rest
}) => (menuOpen && <Menu {...rest}>
    <MenuList {...yList}>
        {
            menuOptions.length
                ? menuOptions
                : <MenuEmpty {...yEmpty}>{options.length ? 'No options match' : 'No options'}</MenuEmpty>
        }
    </MenuList>
</Menu>);

YSelectMenuComponent.displayName = 'YSelectMenuComponent';
export const YSelectMenu = YSelectMenuComponent;

export default YSelectMenu;