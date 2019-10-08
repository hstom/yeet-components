import React, { useState, useRef, useMemo, useCallback } from 'react';
import {getGenericThemableSubcomponentBuilder, useClickOutsideHandler} from '../../util.js';
import {ThemableYSelectValueContainer} from './YSelectValueContainer.js';
import {ThemableYSelectIndicatorContainer} from './YSelectIndicatorContainer.js';
import {ThemableYSelectMenuContainer, ThemableYSelectMenuOption} from './YSelectMenuContainer.js';
import './YSelectComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

/**
 * TODO LIST:
 * close menu on input ref blur
 */
export const ThemableYSelect = globalTheme =>  {
    const YSelectComponent = ({
        options = [],
        placeholder = 'Select...',
        clearable = true,
        searchable = true,
        noIndicators = false,
        selected,
        onChange,
        forwardedRef,
        ...rest
    }) => {

        const Wrapper = useMemo(() => genSubcomponent('', {forwardRef: true})(globalTheme), []);
        const Stage = useMemo(() => genSubcomponent('stage')(globalTheme), []);

        const ValueContainer = useMemo(() => ThemableYSelectValueContainer(globalTheme), []);
        const IndicatorContainer = useMemo(() => ThemableYSelectIndicatorContainer(globalTheme), []);

        const Menu = useMemo(() => ThemableYSelectMenuContainer(globalTheme), []);
        const MenuOption = useMemo(() => ThemableYSelectMenuOption(globalTheme), []);

        const [menuOpen, setMenuOpen] = useState(false);
        const [searchString, setSearchString] = useState('');
        const [kbIndex, setKbIndex] = useState(null);

        const wrapperRef = useRef();
        const inputRef = useRef();

        const closeMenu = () => {
            setMenuOpen(false); setSearchString(''); setKbIndex(null);
        }

        useClickOutsideHandler(wrapperRef, useCallback(() => {
            if(menuOpen) {
                closeMenu();
            }
        }, [menuOpen]));

        const filteredOptions = useMemo(
            () => options.filter(({label}) => label.toLowerCase().includes(searchString.toLowerCase())),
            [searchString, options]
        );

        const scrollBack = useCallback(node => {
            if(node !== null) { // TODO add necessity check
                if(node.scrollIntoViewIfNeeded) {
                    node.scrollIntoViewIfNeeded();
                } else {
                    node.parentNode.scrollTop = node.offsetTop;
                }
            }
        }, []);

        const selectedAndOrHighlightedRef = (selected, highlighted) => {
            if((selected && kbIndex === null) || highlighted) {
                return {ref: scrollBack};
            } else {
                return {}
            }
        }

        const lastKeyTime = useRef(new Date().getTime());

        const onArrow = eKey => {
            const keyTime = new Date().getTime();
            if((keyTime - lastKeyTime.current) > 30) {
                let nextIndex = 0;
                if(kbIndex !== null){
                    if(eKey === 'ArrowDown') {
                        nextIndex = kbIndex + 1;
                    }
                    if(eKey === 'ArrowUp') {
                        nextIndex = kbIndex - 1;
                    }
                }
                if(nextIndex < 0) {
                    nextIndex = filteredOptions.length - 1;
                }
                if(nextIndex >= filteredOptions.length) {
                    nextIndex = 0;
                }
                if(kbIndex !== nextIndex){
                    setTimeout(() => setKbIndex(nextIndex), 0);
                }
                lastKeyTime.current = keyTime;
            } else {
                console.log('skipped'); // remove throttler?
            }
        }
        const keyHandlers = {
            ArrowDown: onArrow,
            ArrowUp: onArrow,
            Enter: () => {
                if(kbIndex !== null && kbIndex >= 0 && kbIndex < filteredOptions.length) {
                    const selectedValue = filteredOptions[kbIndex].value;
                    closeMenu();
                    onChange(selectedValue);
                    inputRef.current && inputRef.current.blur();
                } else {
                    setKbIndex(0);
                }
            },
            Escape: () => {
                closeMenu();
            }
        }
        const onInputKeyDown = e => {
            const eKey = e.key;
            if(keyHandlers[eKey]) {
                keyHandlers[eKey](eKey);
                e.preventDefault();
            }
        }

        const toggleMenu = () => {
            if(menuOpen) {
                closeMenu();
            } else {
                setMenuOpen(true);
                console.log(inputRef.current);
                inputRef.current && inputRef.current.focus();
            }
        }

        const clearSelection = useCallback(() => {
            const wasNull = selected === null;
            if(!wasNull) {
                onChange(null);
            }
        }, [selected, onChange]);

        const onSearchStringChange = e => setSearchString(e.target.value);

        const menuOptions = filteredOptions  // TODO memoize
            .map(({value, label}, i) => (
                <MenuOption 
                    className={(value === selected ? 'selected' : '') + (i === kbIndex ? ' highlighted' : '')}
                    data-value={value} // I'm here for dev tool visibility
                    onClick={() => {closeMenu(); selected !== value && onChange(value);}}
                    key={`${value}-${i}`}
                    {...selectedAndOrHighlightedRef(value === selected, i === kbIndex)}
                >
                    {label}
                </MenuOption>));

        return (
            <Wrapper ref={wrapperRef}>
                <Stage {...rest}>
                    <ValueContainer
                        menuOpen={menuOpen}
                        toggleMenu={toggleMenu}
                        selected={selected}
                        options={options}
                        placeholder={placeholder}
                        searchable={searchable}
                        onChange={onSearchStringChange}
                        onKeyDown={onInputKeyDown}
                        searchString={searchString}
                        ref={inputRef}
                    />
                    {!noIndicators && <IndicatorContainer
                        selected={selected}
                        clearable={clearable}
                        clearSelection={clearSelection}
                        toggleMenu={toggleMenu}
                    />}
                </Stage>
                <Menu
                    menuOpen={menuOpen}
                    menuOptions={menuOptions}
                    options={options}
                />
            </Wrapper>);
    
    }
    YSelectComponent.displayName = 'YSelect';
    return YSelectComponent;
}


export default ThemableYSelect();