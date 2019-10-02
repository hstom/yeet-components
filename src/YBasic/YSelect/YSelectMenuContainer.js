import React from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../util.js';
import './YSelectComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select menu', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

export const ThemableYSelectMenuOption = genSubcomponent('option', {forwardRef: true});

export const ThemableYSelectMenuContainer = globalTheme => {
    const Menu = genSubcomponent()(globalTheme);
    const MenuList = genSubcomponent('list')(globalTheme);
    const MenuEmpty = genSubcomponent('empty')(globalTheme);

    const YSelectValueComponent = ({
        menuOpen,
        menuOptions,
        options
    }) => (menuOpen && <Menu>
        <MenuList>
            {
                menuOptions.length
                    ? menuOptions
                    : <MenuEmpty>{options.length ? 'No options match' : 'No options'}</MenuEmpty>
            }
        </MenuList>
    </Menu>);

    YSelectValueComponent.displayName = 'YSelectMenuContainer';
    return React.forwardRef((props, ref) => {
        return <YSelectValueComponent {...props} forwardedRef={ref} />;
    });
}

export default ThemableYSelectMenuContainer();