import React from 'react';
import { buildGenericThemableComponent } from '../../util.js';
import {ThemableYSelect} from '../../YBasic/YSelect/YSelect.js';
//import {ThemableYOption} from '../../YBasic/YSelect/YOption.js';

const ThemableYFilterSelectWrapper = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-filter-select',
    themeSelector: globalTheme => ((globalTheme.YFancy || {}).YFilterSelect || {}),
    displayName: 'YFilterSelect'
});

export const ThemableYFilterSelect = globalTheme => {
    const ThemedYFilterSelectWrapper = ThemableYFilterSelectWrapper(globalTheme);
    const ThemedYSelect = ThemableYSelect(globalTheme);
    //const ThemedYOption = ThemableYOption(globalTheme);

    class YFilterSelect extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                filterString: ''
            }
        }
        render() {
            const filteredChildren = React.Children.toArray(this.props.children).filter(child => {
                return child.props.children.toLowerCase().includes(this.state.filterString.toLowerCase());
            });

            return (<ThemedYFilterSelectWrapper>
                <input value={this.state.filterString} onChange={(e)=>this.setState({filterString: e.target.value})}></input>
                <ThemedYSelect {...this.props}>
                    {filteredChildren}
                </ThemedYSelect>
            </ThemedYFilterSelectWrapper>);
        }
    }
    return YFilterSelect;
}

export default ThemableYFilterSelect();