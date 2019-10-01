import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import './YSelectComponents.css';

export const ThemableYSelectMenu = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-menu',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).menu || {}),
    displayName: 'YSelectMenu'
});

export const ThemableYSelectMenuList = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-menu-list',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).menuList || {}),
    displayName: 'YSelectMenuList'
});

export const ThemableYSelectMenuOption = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-menu-option',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).menuOption || {}),
    displayName: 'YSelectMenuOption',
    forwardRef: true
});

export const ThemableYSelectMenuEmpty = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-menu-empty',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).menuEmpty || {}),
    displayName: 'YSelectMenuEmpty'
});

export const ThemableYSelectMenuContainer = globalTheme => {
    const Menu = ThemableYSelectMenu(globalTheme);
    const MenuList = ThemableYSelectMenuList(globalTheme);
    const MenuEmpty = ThemableYSelectMenuEmpty(globalTheme);

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