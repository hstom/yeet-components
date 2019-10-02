import React from 'react';

import { buildGenericThemableComponent } from '../../util.js';
import {ThemableYSelect} from '../YSelect/YSelect.js';

export const ThemableYTimePickerStage = buildGenericThemableComponent({
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
export const ThemableYTimePicker = globalTheme => {
    const ThemedYSelect = ThemableYSelect(globalTheme);
    const ThemedYTimePickerStage = ThemableYTimePickerStage(globalTheme);

    return ({
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
        <ThemedYTimePickerStage>
            <ThemedYSelect
                placeholder='hour'
                noIndicators
                options={Array(military ? 24: 12).fill().map((_, i) => ({value: i + 1, label: ""+(i + 1)}))}
                style={{display: 'inline-block'}}
            />
            <ThemedYSelect
                placeholder='minute'
                noIndicators
                options={Array(60).fill().map((_, i) => ({value: i, label: ""+i}))}
                style={{display: 'inline-block'}}
            />
            <ThemedYSelect
                placeholder='second'
                noIndicators
                options={Array(60).fill().map((_, i) => ({value: i, label: ""+i}))}
                style={{display: 'inline-block'}}
            />
            {!military &&
            <ThemedYSelect placeholder='AM/PM'
                noIndicators
                options={['AM', 'PM'].map(val => ({value: val, label: ""+val}))}
                style={{display: 'inline-block'}}
            />
            }
        </ThemedYTimePickerStage>
    )
}

export default ThemableYTimePicker();