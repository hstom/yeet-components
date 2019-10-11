import { getGenericThemableSubcomponentBuilder } from '../../util.js';
import './YTableComponents.css';

const genSubcomponent = getGenericThemableSubcomponentBuilder('y', globalTheme => ((globalTheme.YBasic || {}).YTable || {}));

export const YTable = genSubcomponent('table', {Tag: 'table'});
export const YTbody = genSubcomponent('tbody', {Tag: 'tbody'});
export const YTd = genSubcomponent('td', {Tag: 'td'});
export const YTh = genSubcomponent('th', {Tag: 'th',
    propMutator:
        ({style = {}, resizable = false, ...props}) =>
        ({style: Object.assign({}, style, {resize: resizable ? 'horizontal': style.resize}), ...props})
});
export const YThead = genSubcomponent('thead', {Tag: 'thead'});
export const YThSortIndicator = genSubcomponent('th sort indicator');
export const YTr = genSubcomponent('tr', {Tag: 'tr'});

export default YTable;