import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import {ThemableYSelectValueContainer} from './YSelectValueContainer.js';
import {dropdownPath, clearablePath} from './YSelectSVGs.js';
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

export const ThemableYSelectMenuEmpty = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-select-menu-empty',
    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YSelect || {}).menuEmpty || {}),
    displayName: 'YSelectMenuEmpty'
});


export const ThemableYSelect = globalTheme => {
    const Wrapper = ThemableYSelectWrapper(globalTheme);
    const Stage = ThemableYSelectStage(globalTheme);

    const ValueContainer = ThemableYSelectValueContainer(globalTheme);


    const IndicatorContainer = ThemableYSelectIndicatorContainer(globalTheme);
    const IndicatorSeparator = ThemableYSelectIndicatorSeparator(globalTheme);
    const IndicatorClearable = ThemableYSelectIndicatorClearable(globalTheme);
    const IndicatorClearableSVG = ThemableYSelectIndicatorClearableSVG(globalTheme);
    const IndicatorDropdown = ThemableYSelectIndicatorDropdown(globalTheme);
    const IndicatorDropdownSVG = ThemableYSelectIndicatorDropdownSVG(globalTheme);

    const Menu = ThemableYSelectMenu(globalTheme);
    const MenuList = ThemableYSelectMenuList(globalTheme);
    const MenuOption = ThemableYSelectMenuOption(globalTheme);
    const MenuEmpty = ThemableYSelectMenuEmpty(globalTheme);

    class YSelectComponent extends React.Component {
        constructor(props) {
            super(props);
            this.ref = React.createRef();
            this.inputRef = React.createRef();
            this.state = {
                menuOpen: false,
                selected: null,
                searchString: ''
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
                this.setState({menuOpen: false, searchString: ''}, () => this.inputRef.current && this.inputRef.current.blur());
            }
        };

        toggleMenu = () => {
            let exitState;
            this.setState(
                ({menuOpen, searchString, ...rest}) => Object.assign(
                    {},
                    rest,
                    {
                        menuOpen: exitState = !menuOpen,
                        searchString: !menuOpen ? searchString : ''
                    }
                ),
                () => this.inputRef.current && (exitState ? this.inputRef.current.focus() : this.inputRef.current.blur())
        )};

        selectableMenuOption = value => () => this.setState(
            {menuOpen: false, selected: value, searchString: ''}, () => (this.props.onChange || (() => {}))(value));

        clearSelection = () => this.setState({menuOpen: false, selected: null, searchString: ''}, () => (this.props.onChange || (() => {}))(null));
        
        onSearchStringChange = e => this.setState({searchString: e.target.value});

        render() {
            const {
                options = [],
                placeholder = 'Select...',
                clearable = true,
                searchable = true
            } = this.props;

            const menuOptions = options
            .filter(({label}) => label.toLowerCase().includes(this.state.searchString.toLowerCase()))
            .map(({value, label}, i) => (
                <MenuOption 
                    className={value === this.state.selected ? 'selected' : ''}
                    data-value={value} // I'm here for dev tool visibility
                    onClick={this.selectableMenuOption(value)}
                    key={`${value}-${i}`}
                >
                    {label}
                </MenuOption>));

            return (<Wrapper ref={this.ref}>
                <Stage>
                    <ValueContainer
                        menuOpen={this.state.menuOpen}
                        toggleMenu={this.toggleMenu}
                        selected={this.state.selected}
                        options={options}
                        placeholder={placeholder}
                        searchable={searchable}
                        onChange={this.onSearchStringChange}
                        searchString={this.state.searchString}
                        ref={this.inputRef}
                    />
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
                        {
                            menuOptions.length
                                ? menuOptions
                                : <MenuEmpty>{options.length ? 'No options match' : 'No options'}</MenuEmpty>
                        } {/* TODO NO OPTIONS INDICATOR */}
                    </MenuList>
                </Menu>}
            </Wrapper>);
        }
    }
    YSelectComponent.displayName = 'YSelect';
    return YSelectComponent;
}

export default ThemableYSelect();