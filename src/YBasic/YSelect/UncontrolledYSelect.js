import React, {useState, useImperativeHandle} from 'react';
import {ThemableYSelect} from './YSelect.js';

/**
 * This is only used to demo handling the state above the YSelect in YSelect.mdx
 */
export const ThemableUncontrolledYSelect = globalTheme => {

    const YSelect = ThemableYSelect(globalTheme);

    const UncontrolledYSelectComponent = ({onChange, ...props}, ref) => {
        const [selected, setSelected] = useState(null);
        useImperativeHandle(ref, () => ({
            value: selected
        }), [selected]);

        const onChangeHook = v => {
            setSelected(v);
            onChange(v);
        };

        return (<YSelect
            selected={selected}
            onChange={onChangeHook}
            {...props}
        />);
    }
    UncontrolledYSelectComponent.displayName = 'UncontrolledYSelect';
    return React.forwardRef(UncontrolledYSelectComponent);

}

export default ThemableUncontrolledYSelect();