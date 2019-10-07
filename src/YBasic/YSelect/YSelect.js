import React from 'react';
import {getGenericThemableSubcomponentBuilder, mergeRefs, outsideClick} from '../../util.js';
import {ThemableYSelectValueContainer} from './YSelectValueContainer.js';
import {ThemableYSelectIndicatorContainer} from './YSelectIndicatorContainer.js';
import {ThemableYSelectMenuContainer, ThemableYSelectMenuOption} from './YSelectMenuContainer.js';
import './YSelectComponents.css';

/**
 * 
 * TODO LIST:
 * remove this.state.selected and require orchestration
 */

const genSubcomponent = getGenericThemableSubcomponentBuilder('y select', globalTheme => ((globalTheme.YBasic || {}).YSelect || {}));

export const ThemableYSelect = globalTheme => {
    const Wrapper = genSubcomponent('', {forwardRef: true})(globalTheme);
    const Stage = genSubcomponent('stage')(globalTheme);

    const ValueContainer = ThemableYSelectValueContainer(globalTheme);
    const IndicatorContainer = ThemableYSelectIndicatorContainer(globalTheme);

    const Menu = ThemableYSelectMenuContainer(globalTheme);
    const MenuOption = ThemableYSelectMenuOption(globalTheme);

    class YSelectComponent extends React.Component {
        constructor(props) {
            super(props);

            this.wrapperRef = React.createRef();
            this.inputRef = React.createRef(); // TODO: replace with virtual ref that just focuses on bind, but how to tab in?
            this.highlightedRef = React.createRef();

            this.state = {
                menuOpen: false,
                selected: null,
                searchString: '',
                highlightIndex: null
            }
        }

        onOutsideClick = () => {
            if(this.state.menuOpen) {
                this.setState({
                    menuOpen: false,
                    searchString: ''
                },
                this.syncInputFocusState
                );
            };
        }

        syncInputFocusState = () => {
            if(this.inputRef.current) {
                if(this.state.menuOpen) {
                    this.inputRef.current.focus();
                } else {
                    this.inputRef.current.blur();
                }
            }
        }

        toggleMenu = () => {
            this.setState(
                ({menuOpen, searchString, ...rest}) => {
                    const nextSearchString = !menuOpen ? searchString : '';
                    return Object.assign(
                        {},
                        rest,
                        {
                            menuOpen: !menuOpen,
                            searchString: nextSearchString,
                            highlightIndex: this.getIndexOfSelectedMenuOptionOrNull(nextSearchString) // auto-highlight selected option
                        }
                    )
                },
                this.syncInputFocusState
        )};

        selectableMenuOption = value => () => this.setState(
            {menuOpen: false, selected: value, searchString: '', highlightIndex: null}, () => (this.props.onChange || (() => {}))(value)
        );
        

        clearSelection = () => {
            const wasntNull = this.state.selected !== null;
            this.setState({
                menuOpen: false,
                selected: null,
                searchString: '',
                highlightIndex: null
            }, () => {
                if(this.inputRef.current){this.inputRef.current.blur();}
                if(wasntNull){(this.props.onChange || (() => {}))(null)}
            }
            );
        }
        
        onSearchStringChange = e => this.setState({searchString: e.target.value, highlightIndex: null});
        
        //Memoized Once
        getMenuOptions = (() => {
            let cachedSearchString = '';
            let cachedOptions = [];
            let cachedValue = [];
            return (
                searchString = '', options = []
            ) => {
                if(
                    searchString === cachedSearchString
                    && cachedOptions === options
                    ) {
                        return cachedValue;
                    }
                     else {
                        cachedSearchString = searchString;
                        cachedOptions = options;
                        cachedValue = options.filter(({label}) => label.toLowerCase().includes(searchString.toLowerCase()))
                        return cachedValue;
                     }
            };
        })();

        getIndexOfSelectedMenuOptionOrNull = (searchStringForward) => this.getMenuOptions(searchStringForward, this.props.options).findIndex(o => o.value === this.state.selected) || null;

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
                    const menuOptionsLength = this.getMenuOptions(this.state.searchString, this.props.options).length;
                    if(nextIndex >= menuOptionsLength) {
                        nextIndex = menuOptionsLength - 1;
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
                const menuOptions = this.getMenuOptions(this.state.searchString, this.props.options);
                if(this.state.highlightIndex !== null && this.state.highlightIndex >= 0 && this.state.highlightIndex < menuOptions.length) {
                    const selectedOption = this.getMenuOptions(this.state.searchString, this.props.options)[this.state.highlightIndex];
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

        selectedAndOrHighlightedRef = (selected, highlighted) => {
            if(selected || highlighted) {
                return {ref: 
                    mergeRefs(...[
                        ...(selected ? [(target) => {
                            if(target !== null) {
                                target.parentNode.scrollTop = target.offsetTop;
                            } // virtual ref isn't actually stored anywhere
                        }] : []),
                        ...(highlighted ? [this.highlightedRef] : [])
                    ])};
            } else {
                return {}
            }
            
        }

        render() {
            const {
                options = [],
                placeholder = 'Select...',
                clearable = true,
                searchable = true,
                noIndicators = false,
                onChange: ignored, // strip out
                forwardedRef,
                ...rest
            } = this.props;

            const menuOptions = this.getMenuOptions(this.state.searchString, options)
            .map(({value, label}, i) => (
                <MenuOption 
                    className={(value === this.state.selected ? 'selected' : '') + (i === this.state.highlightIndex ? ' highlighted' : '')}
                    data-value={value} // I'm here for dev tool visibility
                    onClick={this.selectableMenuOption(value)}
                    key={`${value}-${i}`}
                    {...this.selectedAndOrHighlightedRef(value === this.state.selected, i === this.state.highlightIndex)}
                >
                    {label}
                </MenuOption>));

            return (
                <Wrapper ref={this.wrapperRef}>
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
                        {!noIndicators && <IndicatorContainer
                            selected={this.state.selected}
                            clearable={clearable}
                            clearSelection={this.clearSelection}
                            toggleMenu={this.toggleMenu}
                        />}
                    </Stage>
                    <Menu
                        menuOpen={this.state.menuOpen}
                        menuOptions={menuOptions}
                        options={options}
                    />
                </Wrapper>);
        }
    }
    YSelectComponent.displayName = 'YSelect';
    return outsideClick(YSelectComponent);
}

export default ThemableYSelect();