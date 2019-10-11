import React from 'react';
import { getGenericThemableSubcomponentBuilder } from '../../../util.js';
// import { clearablePath } from './YSelectSVGs.js';
import '../YSelectComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select display', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

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

const DisplayContainer = genSubcomponent('container');
const DisplayPlaceholder = genSubcomponent('placeholder');
const DisplaySingleValue = genSubcomponent('single value');

const DisplayInputWrapper = genSubcomponent('input wrapper');
const DisplayInputStage = genSubcomponent('input stage');
const DisplayInput = genSubcomponent('input', {Tag: 'input', forwardRef: true});

const YSelectDisplayComponent = ({
    yPlaceholder={},
    ySingleValue={},
    yInputWrapper={},
    yInputStage={},
    yInput={},
    yChild={},


    menuOpen,
    toggleMenu,
    selected,
    options,
    placeholder,
    searchable,
    tabindex = "0",
    searchString,
    forwardedRef,
    onChange,
    onKeyDown,
    ...rest
}) => (<DisplayContainer
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
        ? <DisplayPlaceholder
            {...Object.assign({}, yChild, yPlaceholder)}
        >
            {placeholder}
        </DisplayPlaceholder>
        : <DisplaySingleValue
            {...Object.assign({}, yChild, ySingleValue)}
        >
            {options.filter(o => o.value === selected)[0].label}
        </DisplaySingleValue>
    )}
    <DisplayInputWrapper
        {...yInputWrapper}
    > 
        <DisplayInputStage
            {...yInputStage}
        >
            <DisplayInput
                {...yInput}
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
            ></DisplayInput>
        </DisplayInputStage>
    </DisplayInputWrapper>
</DisplayContainer>);

YSelectDisplayComponent.displayName = 'YSelectDisplayContainer';
export const YSelectDisplay = React.forwardRef((props, ref) => {
    return <YSelectDisplayComponent {...props} forwardedRef={ref} />;
});

export default YSelectDisplay;