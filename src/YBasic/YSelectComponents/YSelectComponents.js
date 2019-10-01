import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import {ThemableYSelectValueContainer} from './YSelectValueContainer.js';
import {ThemableYSelectIndicatorContainer} from './YSelectIndicatorContainer.js';
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
    displayName: 'YSelectMenuOption',
    forwardRef: true
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

    const Menu = ThemableYSelectMenu(globalTheme);
    const MenuList = ThemableYSelectMenuList(globalTheme);
    const MenuOption = ThemableYSelectMenuOption(globalTheme);
    const MenuEmpty = ThemableYSelectMenuEmpty(globalTheme);

    class YSelectComponent extends React.Component {
        constructor(props) {
            super(props);
            this.ref = React.createRef();
            this.inputRef = React.createRef();
            this.highlightedRef = React.createRef();
            this.selectedRef = React.createRef();
            this.state = {
                menuOpen: false,
                selected: null,
                searchString: '',
                highlightIndex: null
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
            console.log('beep');
            let exitState;
            this.setState(
                ({menuOpen, searchString, ...rest}) => Object.assign(
                    {},
                    rest,
                    {
                        menuOpen: exitState = !menuOpen,
                        searchString: !menuOpen ? searchString : '',
                        highlightIndex: null
                    }
                ),
                () => {
                    if(exitState && this.selectedRef.current) {
                        this.selectedRef.current.parentNode.scrollTop =this.selectedRef.current.offsetTop;
                    }
                    this.inputRef.current && (exitState ? this.inputRef.current.focus() : this.inputRef.current.blur())
                }
        )};

        selectableMenuOption = value => () => {console.log('zooq'); this.setState(
            {menuOpen: false, selected: value, searchString: '', highlightIndex: null}, () => (this.props.onChange || (() => {}))(value));
        }

        clearSelection = () => {
            const wasntNull = this.state.selected !== null;
            this.setState({
                menuOpen: false,
                selected: null,
                searchString: '',
                highlightIndex: null
            }, () => {
                console.log('zooooop');
                if(this.inputRef.current){this.inputRef.current.blur();}
                if(wasntNull){(this.props.onChange || (() => {}))(null)}
            }
            );
        }
        
        onSearchStringChange = e => {
            console.log('borp');
            this.setState({searchString: e.target.value, highlightIndex: null});
        }

        getMenuOptions = () => this.props.options
        .filter(({label}) => label.toLowerCase().includes(this.state.searchString.toLowerCase()));

        onInputKeyDown = e => {
            const eKey = e.key;
            if(eKey === 'ArrowDown' || eKey === 'ArrowUp') {
                this.setState(({highlightIndex}) => {
                    let nextIndex = 0;
                    if(highlightIndex !== null){
                        if(eKey === 'ArrowDown') {
                            nextIndex = highlightIndex + 1;
                        }
                        if(eKey === 'ArrowUp') {
                            nextIndex = highlightIndex - 1;
                        }
                    }
                    if(nextIndex < 0) {
                        nextIndex = 0;
                    }
                    const menuOptionsLength = this.getMenuOptions().length;
                    if(nextIndex >= menuOptionsLength) {
                        nextIndex = menuOptionsLength
                    }
                    
                    return {highlightIndex: nextIndex};
                }, () => {
                    if(this.state.highlightIndex !== null && this.highlightedRef.current) {
                        this.highlightedRef.current.parentNode.scrollTop =this.highlightedRef.current.offsetTop;
                    }
                });
                e.preventDefault();
            }
            if(eKey === 'Enter') {
                const menuOptions = this.getMenuOptions();
                if(this.state.highlightIndex !== null && this.state.highlightIndex >= 0 && this.state.highlightIndex < menuOptions.length) {
                    const selectedOption = this.getMenuOptions()[this.state.highlightIndex];
                    this.selectableMenuOption(selectedOption.value)();
                    this.inputRef.current.blur();
                    e.preventDefault();
                } else {
                    this.setState({highlightIndex: 0});
                    e.preventDefault();
                }
            }
            if(eKey === 'Escape') {
                this.setState({
                    menuOpen: false,
                    searchString: '',
                    highlightIndex: null
                }, () => {
                    if(this.inputRef.current){this.inputRef.current.blur();}
                }
                );
                e.preventDefault();
            }
        }

        render() {
            const {
                options = [],
                placeholder = 'Select...',
                clearable = true,
                searchable = true,
                onChange, // strip out
                ...rest
            } = this.props;

            const menuOptions = this.getMenuOptions()
            .map(({value, label}, i) => (
                <MenuOption 
                    className={(value === this.state.selected ? 'selected' : '') + (i === this.state.highlightIndex ? ' highlighted' : '')}
                    data-value={value} // I'm here for dev tool visibility
                    onClick={this.selectableMenuOption(value)}
                    key={`${value}-${i}`}
                    {
                        ...Object.assign(
                            {},
                            value === this.state.selected
                            ? {ref: this.selectedRef}
                            : {},
                            i === this.state.highlightIndex
                            ? {ref: this.highlightedRef}
                            : {},
                        )
                    }
                >
                    {label}
                </MenuOption>));

            return (<Wrapper ref={this.ref}>
                <Stage {...rest}>
                    <ValueContainer
                        menuOpen={this.state.menuOpen}
                        toggleMenu={this.toggleMenu}
                        selected={this.state.selected}
                        options={options}
                        placeholder={placeholder}
                        searchable={searchable}
                        onChange={this.onSearchStringChange}
                        onKeyDown={this.onInputKeyDown}
                        searchString={this.state.searchString}
                        ref={this.inputRef}
                    />
                    <IndicatorContainer
                        selected={this.state.selected}
                        clearable={clearable}
                        clearSelection={this.clearSelection}
                        toggleMenu={this.toggleMenu}
                    />
                </Stage>
                {this.state.menuOpen && <Menu>
                    <MenuList>
                        {
                            menuOptions.length
                                ? menuOptions
                                : <MenuEmpty>{options.length ? 'No options match' : 'No options'}</MenuEmpty>
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