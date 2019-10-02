import React from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../util.js';
// import { clearablePath } from './YSelectSVGs.js';
import './YSelectComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select value', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

// export const ThemableYSelectMultiValueButton = genSubcomponent('multi button');
// export const ThemableYSelectMultiValueLabel = genSubcomponent('multi button label');
// export const ThemableYSelectMultiValueRemove = genSubcomponent('multi button remove');
// export const ThemableYSelectMultiValueRemoveSVG = genSubcomponent('multi button remove svg', {
//     Tag: 'svg',
//     propMutator: () => ({
//         height: '20px',
//         width: '20px',
//         viewBox: '0 0 20 20',
//         'aria-hidden': true,
//         focusable: false,
//         children: <path d={clearablePath}></path>
//     })
// });

export const ThemableYSelectValueContainer = globalTheme => {
    const ValueContainer = genSubcomponent('container')(globalTheme);
    const ValuePlaceholder = genSubcomponent('placeholder')(globalTheme);
    const ValueSingleValue = genSubcomponent('single value')(globalTheme);

    const ValueInputWrapper = genSubcomponent('input wrapper')(globalTheme);
    const ValueInputStage = genSubcomponent('input stage')(globalTheme);
    const ValueInput = genSubcomponent('input', {Tag: 'input', forwardRef: true})(globalTheme);

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
        onChange,
        onKeyDown,
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
        <ValueInputWrapper> 
            <ValueInputStage>
                <ValueInput
                    autoCapitalize='none'
                    autoComplete='off'
                    autoCorrect='off'
                    spellCheck='false'
                    tabIndex={tabindex}
                    type='text'
                    aria-autocomplete='list'
                    value={searchString}
                    ref={forwardedRef}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onFocus={() => {
                        if(!menuOpen) {
                            toggleMenu();
                        }
                    }} 
                    onClick={(e) => {e.stopPropagation(); return false;}}
                    style={{opacity: (searchable && menuOpen) ? '1' : '0'}}
                ></ValueInput>
            </ValueInputStage>
        </ValueInputWrapper>
    </ValueContainer>);

    YSelectValueComponent.displayName = 'YSelectValueContainer';
    return React.forwardRef((props, ref) => {
        return <YSelectValueComponent {...props} forwardedRef={ref} />;
    });
}

export default ThemableYSelectValueContainer();