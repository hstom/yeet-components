import { getGenericThemableSubcomponentBuilder } from '../../util.js';
import './YTableComponents.css';
import '../../Y.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y', globalTheme => ((globalTheme.YBasic || {}).YTable || {}));

export const YTable = genSubcomponent('table', {Tag: 'table'});
export const YTbody = genSubcomponent('tbody', {Tag: 'tbody'});
export const YTd = genSubcomponent('td', {
    Tag: 'td',
    extraClassNames: ['big-padding']
});
export const YTh = genSubcomponent('th', {
    Tag: 'th',
    extraClassNames: ['big-padding'],
    propMutator:
        ({style = {}, resizable = false, ...props}) =>
        ({style: Object.assign({}, style, {resize: resizable ? 'horizontal': style.resize}), ...props})
});
export const YThead = genSubcomponent('thead', {Tag: 'thead'});
export const YTr = genSubcomponent('tr', {Tag: 'tr'});

export const YThSortIndicator = genSubcomponent('th sort indicator');
export const YTableScroller = genSubcomponent('div', {extraClassNames: ['y-table-scroller']});

export default {
    YTable,
    YTbody,
    YTd,
    YTh,
    YThead,
    YTr,
    
    YThSortIndicator,
    YTableScroller
};