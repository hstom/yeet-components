import React, {useRef, useCallback, useEffect} from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../../util.js';
import '../YSelectComponents.css';
import '../../../Y.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select menu', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

export const YSelectMenuOption = genSubcomponent('option', {forwardRef: true, extraClassNames: ['padding']});

const Menu = genSubcomponent(undefined, {forwardRef: true});
const MenuList = genSubcomponent('list', {extraClassNames: ['padding']});
const MenuEmpty = genSubcomponent('empty', {extraClassNames: ['padding']});

const YSelectMenuComponent = ({
    yList={},
    yEmpty={},

    menuOpen,
    menuOptions,
    options,
    ...rest
}) => {
    const menuNode = useRef();

    const setPosition = useCallback((e) => {
        if(menuNode.current) {
            if(!(e && e.target && e.target.parentNode && e.target.parentNode === menuNode.current)) { // skip scroll events inside menu
                const { top, left, width, height } = menuNode.current.parentNode.getBoundingClientRect();
                menuNode.current.style.top = (top + height) + 'px';
                menuNode.current.style.left = (left) + 'px';
                menuNode.current.style.width = width + 'px';
            }
        }
    }, []);

    const refAndPosition = useCallback(node => {
        menuNode.current = node;
        setPosition();
    }, [setPosition])

    useEffect(() => {
        document.addEventListener('scroll', setPosition, true);
        return () => {
            document.removeEventListener('scroll', setPosition, true);
        }
    });

    return (menuOpen && <Menu ref={refAndPosition} {...rest}>
        <MenuList {...yList}>
            {
                menuOptions.length
                    ? menuOptions
                    : <MenuEmpty {...yEmpty}>{options.length ? 'No options match' : 'No options'}</MenuEmpty>
            }
        </MenuList>
    </Menu>);
}

YSelectMenuComponent.displayName = 'YSelectMenuComponent';
export const YSelectMenu = YSelectMenuComponent;

export default YSelectMenu;