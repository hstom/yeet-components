import React from 'react';
import '../../Y.css';

import { buildGenericThemableComponent } from '../../util.js';
import {YSelect} from '../YSelect/YSelect.js';

export const YTimePickerStage = buildGenericThemableComponent({
    Tag: 'div',
    componentClassName: 'y-time-picker',
    themeSelector: (globalTheme) => (globalTheme.YBasic || {}).YTimePicker || {},
    displayName: 'YTimePicker'
});

/**
 * TODO LIST
 * add indicator steppers to yselect
 * externalize DST transition disambiguation
 */

export const YTimePicker = ({
    showHour,
    hour,

    showMinute,
    minute,

    showSecond,
    second,

    showMillisecond,
    millisecond,

    military = false,
    showMilitary,

    onChange
}) => (
    // FLEXIZE
    <YTimePickerStage>
        <YSelect
            placeholder='hour'
            noIndicators
            options={Array(military ? 24: 12).fill().map((_, i) => ({value: i + 1, label: ""+(i + 1)}))}
            style={{display: 'inline-block'}}
        />
        <YSelect
            placeholder='minute'
            noIndicators
            options={Array(60).fill().map((_, i) => ({value: i, label: ""+i}))}
            style={{display: 'inline-block'}}
        />
        <YSelect
            placeholder='second'
            noIndicators
            options={Array(60).fill().map((_, i) => ({value: i, label: ""+i}))}
            style={{display: 'inline-block'}}
        />
        {!military &&
        <YSelect placeholder='AM/PM'
            noIndicators
            options={['AM', 'PM'].map(val => ({value: val, label: ""+val}))}
            style={{display: 'inline-block'}}
        />
        }
    </YTimePickerStage>
)

export default YTimePicker;