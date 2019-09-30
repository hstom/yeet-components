import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import './YSelectComponents.css';

/**
 * LAYOUT
 */
export const ThemableYSelectWrapper = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-wrapper',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).wrapper || {}),
    displayName: 'YSelectWrapper',
    forwardRef: true
});

export const ThemableYSelectStage = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-stage',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).stage || {}),
    displayName: 'YSelectStage'
});

/**
 * VALUE REGION
 */

export const ThemableYSelectValueContainer = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-container',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valueContainer || {}),
    displayName: 'YSelectValueContainer'
});

export const ThemableYSelectMultiValueButton = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-multi-value-button',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueButton || {}),
    displayName: 'YSelectMutliValueButton'
});

export const ThemableYSelectMultiValueLabel = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-multi-value-label',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueLabel || {}),
    displayName: 'YSelectMutliValueLabel'
});

export const ThemableYSelectMultiValueRemove = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-multi-value-remove',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueRemove || {}),
    displayName: 'YSelectMutliValueRemove'
});

const clearablePath = "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z";

export const ThemableYSelectMultiValueRemoveSVG = buildGenericThemableComponent({
    Tag: 'svg',
    componentClassName: 'y-select-multi-value-remove-svg',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).multiValueRemoveSVG || {}),
    displayName: 'YSelectMutliValueRemoveSVG',
    propMutator: () => ({
        height: '20px',
        width: '20px',
        viewBox: '0 0 20 20',
        'aria-hidden': true,
        focusable: false,
        children: <path d={clearablePath}></path>
    })
});

export const ThemableYSelectValuePlaceholder = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-placeholder',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valuePlaceholder || {}),
    displayName: 'YSelectValuePlaceholder'
});

export const ThemableYSelectValueSingleValue = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-value-single-value',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).valueSingleValue || {}),
    displayName: 'YSelectValueSingleValue'
});

/**
 * INDICATOR REGION
 */

export const ThemableYSelectIndicatorContainer = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-indicator-container',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).indicatorContainer || {}),
    displayName: 'YSelectIndicatorContainer'
});

export const ThemableYSelectIndicatorSeparator = buildGenericThemableComponent({
    Tag: 'span',
    componentClassName: 'y-select-indicator-separator',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).indicatorSeparator || {}),
    displayName: 'YSelectIndicatorSeparator'
});

export const ThemableYSelectIndicatorClearable  = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-indicator-clearable',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).indicatorClearable || {}),
    displayName: 'YSelectIndicatorClearable'
});

export const ThemableYSelectIndicatorClearableSVG = buildGenericThemableComponent({
    Tag: 'svg',
    componentClassName: 'y-select-indicator-dropdown-svg',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).indicatorClearableSVG || {}),
    displayName: 'YSelectIndicatorDropdownSVG',
    propMutator: () => ({
        height: '20px',
        width: '20px',
        viewBox: '0 0 20 20',
        'aria-hidden': true,
        focusable: false,
        children: <path d={clearablePath}></path>
    })
});

export const ThemableYSelectIndicatorDropdown = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-indicator-dropdown',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).indicatorDropdown || {}),
    displayName: 'YSelectIndicatorDropdown'
});

const dropdownPath = "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z";

export const ThemableYSelectIndicatorDropdownSVG = buildGenericThemableComponent({
    Tag: 'svg',
    componentClassName: 'y-select-indicator-dropdown-svg',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).indicatorDropdownSVG || {}),
    displayName: 'YSelectIndicatorDropdownSVG',
    propMutator: () => ({
        height: '20px',
        width: '20px',
        viewBox: '0 0 20 20',
        'aria-hidden': true,
        focusable: false,
        children: <path d={dropdownPath}></path>
    })
});

/**
 * MENU REGION
 */

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
    displayName: 'YSelectMenuOption'
});


export const ThemableYSelect = globalTheme => {
    const Wrapper = ThemableYSelectWrapper(globalTheme);
    const Stage = ThemableYSelectStage(globalTheme);

    const ValueContainer = ThemableYSelectValueContainer(globalTheme);
    const MultiValueButton = ThemableYSelectMultiValueButton(globalTheme);
    const MultiValueLabel = ThemableYSelectMultiValueLabel(globalTheme);
    const MultiValueRemove = ThemableYSelectMultiValueRemove(globalTheme);
    const MultiValueRemoveSVG = ThemableYSelectMultiValueRemoveSVG(globalTheme);
    const ValuePlaceholder = ThemableYSelectValuePlaceholder(globalTheme);
    const ValueSingleValue = ThemableYSelectValueSingleValue(globalTheme);


    const IndicatorContainer = ThemableYSelectIndicatorContainer(globalTheme);
    const IndicatorSeparator = ThemableYSelectIndicatorSeparator(globalTheme);
    const IndicatorClearable = ThemableYSelectIndicatorClearable(globalTheme);
    const IndicatorClearableSVG = ThemableYSelectIndicatorClearableSVG(globalTheme);
    const IndicatorDropdown = ThemableYSelectIndicatorDropdown(globalTheme);
    const IndicatorDropdownSVG = ThemableYSelectIndicatorDropdownSVG(globalTheme);

    const Menu = ThemableYSelectMenu(globalTheme);
    const MenuList = ThemableYSelectMenuList(globalTheme);
    const MenuOption = ThemableYSelectMenuOption(globalTheme);

    class YSelectComponent extends React.Component {
        constructor(props) {
            super(props);
            this.ref = React.createRef();
            this.state = {
                menuOpen: false,
                selected: null
            }
        }

        componentDidMount() {
            document.addEventListener('mousedown', this.closeOnOutsideClick, false);
        }

        componentWillUnmount() {
            document.removeEventListener('mousedown', this.closeOnOutsideClick, false);
        }

        closeOnOutsideClick = e => {
            if(this.ref.current && !this.ref.current.contains(e.target) && this.state.menuOpen){
                this.setState({menuOpen: false});
            }
        };

        toggleMenu = () => this.setState(({menuOpen, ...rest}) => Object.assign({}, rest, {menuOpen: !menuOpen}));

        selectMenuOption = (e) => {
            debugger;
            this.setState({
                selected: e.target.dataSet().value
            });
        }

        selectableMenuOption = value => () => this.setState({menuOpen: false, selected: value});

        clearSelection = () => this.setState({menuOpen: false, selected: null});

        render() {
            const {
                options = [],
                placeholder = 'Select...',
                clearable = true
            } = this.props;
            return (<Wrapper ref={this.ref}>
                <Stage>
                    <ValueContainer onClick={this.toggleMenu}>
                        {/* <MultiValueButton>
                            <MultiValueLabel>
                                Goofy
                            </MultiValueLabel>
                            <MultiValueRemove>
                                <MultiValueRemoveSVG/>
                            </MultiValueRemove>
                        </MultiValueButton> */}
                        {this.state.selected == null
                            ? <ValuePlaceholder>{placeholder}</ValuePlaceholder>
                            : <ValueSingleValue>
                                {options.filter(o => o.value === this.state.selected)[0].label}
                            </ValueSingleValue>
                        }
                    </ValueContainer>
                    <IndicatorContainer>
                        {clearable && <IndicatorClearable
                            onClick={this.clearSelection}
                        >
                            <IndicatorClearableSVG/>
                        </IndicatorClearable>
                        }
                        <IndicatorSeparator/>
                        <IndicatorDropdown onClick={this.toggleMenu}>
                            <IndicatorDropdownSVG/>
                        </IndicatorDropdown>
                    </IndicatorContainer>
                </Stage>
                {this.state.menuOpen && <Menu>
                    <MenuList>
                        {options.map(({value, label}) => (
                            <MenuOption 
                                className={value === this.state.selected ? 'selected' : ''}
                                data-value={value} // I'm here for dev tool visibility
                                onClick={this.selectableMenuOption(value)}
                            >
                                {label}
                            </MenuOption>))
                        }
                    </MenuList>
                </Menu>}
            </Wrapper>);
        }
    }
    YSelectComponent.displayName = 'YSelect';
    return YSelectComponent;
}

export default ThemableYSelect();