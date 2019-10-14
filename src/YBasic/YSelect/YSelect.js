import React, { useState, useRef, useMemo, useCallback } from 'react';
import {getGenericThemableSubcomponentBuilder, useClickOutsideHandler} from '../../util.js';
import {YSelectDisplay} from './subcomponents/YSelectDisplay.js';
import {YSelectIndicator} from './subcomponents/YSelectIndicator.js';
import {YSelectMenu, YSelectMenuOption} from './subcomponents/YSelectMenu.js';
import './YSelectComponents.css';
import '../../Y.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

/**
 * TODO LIST:
 * close menu on input ref blur
 */

const YSelectComponent = ({
    yWrapper={},
    yDisplay={},
    yIndicators={},
    yMenu: {yOption, ...yMenu}={},
    
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

    const Wrapper = useMemo(() => genSubcomponent('', {forwardRef: true}), []);
    const Stage = useMemo(() => genSubcomponent('stage'), []);

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

    const scrollBack = useCallback(
        node => {
            if(node !== null) {
                if(node.scrollIntoViewIfNeeded) {
                    node.scrollIntoViewIfNeeded();
                } else {
                    node.parentNode.scrollTop = node.offsetTop;
                }
            }
        },
        []
    );

    const onArrow = eKey => {
        setTimeout(
            () => setKbIndex(
                lastIndex => {
                    let nextIndex = 0;
                    if(lastIndex !== null){
                        if(eKey === 'ArrowDown') {
                            nextIndex = lastIndex + 1;
                        }
                        if(eKey === 'ArrowUp') {
                            nextIndex = lastIndex - 1;
                        }
                    } else if(selected !== null){
                        nextIndex = filteredOptions.findIndex(option => option.value === selected)
                    }
                    if(nextIndex < 0) {
                        nextIndex = filteredOptions.length - 1;
                    }
                    if(nextIndex >= filteredOptions.length) {
                        nextIndex = 0;
                    }
                    return nextIndex;
                }
            ),
            0
        );
    }

    const keyHandlers = {
        ArrowDown: onArrow,
        ArrowUp: onArrow,
        Enter: () => {
            if(kbIndex !== null && kbIndex >= 0 && kbIndex < filteredOptions.length) {
                const selectedValue = filteredOptions[kbIndex].value;
                closeMenu();
                if(selectedValue !== selected) {
                    onChange(selectedValue);
                }
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

    const menuOptions = useMemo(
        () => filteredOptions
            .map(
                ({value, label}, i) => (
                <YSelectMenuOption
                    {...yOption}
                    className={(value === selected ? 'selected' : '') + (i === kbIndex ? ' highlighted' : '')}
                    data-value={value} // I'm here for dev tool visibility
                    onClick={() => {closeMenu(); selected !== value && onChange(value);}}
                    key={`${value}-${i}`}
                    {...(
                        (selected, highlighted) => {
                            if((selected && kbIndex === null) || highlighted) {
                                return {ref: scrollBack};
                            } else {
                                return {}
                            }
                        })(value === selected, i === kbIndex)
                    }
                >
                    {label}
                </YSelectMenuOption>)),
        [filteredOptions, kbIndex, onChange, selected, yOption, scrollBack]
    );

    return (
        <Wrapper {...yWrapper} ref={wrapperRef}>
            <Stage {...rest}>
                <YSelectDisplay
                    {...yDisplay}
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
                {!noIndicators && <YSelectIndicator
                    {...yIndicators}
                    selected={selected}
                    clearable={clearable}
                    clearSelection={clearSelection}
                    toggleMenu={toggleMenu}
                />}
            </Stage>
            <YSelectMenu
                {...yMenu}
                menuOpen={menuOpen}
                menuOptions={menuOptions}
                options={options}
            />
        </Wrapper>);

}
YSelectComponent.displayName = 'YSelect';
export const YSelect = YSelectComponent;

export default YSelect;