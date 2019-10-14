import React, {useState, useImperativeHandle} from 'react';
import {YMultiSelect} from './YMultiSelect.js';
import '../../Y.css';

/**
 * This is only used to demo handling the state above the YSelect in YSelect.mdx
 */
const UncontrolledYMultiSelectComponent = ({onChange, ...props}, ref) => {
    const [selected, setSelected] = useState([]);
    useImperativeHandle(ref, () => ({
        value: selected
    }), [selected]);

    const onChangeHook = v => {
        setSelected(v);
        onChange(v);
    };

    return (<YMultiSelect
        selected={selected}
        onChange={onChangeHook}
        {...props}
    />);
}
UncontrolledYMultiSelectComponent.displayName = 'UncontrolledYSelect';
export const UncontrolledYMultiSelect =  React.forwardRef(UncontrolledYMultiSelectComponent);

export default UncontrolledYMultiSelect;