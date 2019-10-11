import React, {useState, useImperativeHandle} from 'react';
import {YSelect} from './YSelect.js';

/**
 * This is only used to demo handling the state above the YSelect in YSelect.mdx
 */
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
export const UncontrolledYSelect =  React.forwardRef(UncontrolledYSelectComponent);

export default UncontrolledYSelect;