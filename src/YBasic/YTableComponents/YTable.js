import { getGenericThemableSubcomponentBuilder } from '../../util.js';
import './YTableComponents.css';


const genSubcomponent = getGenericThemableSubcomponentBuilder('y', globalTheme => ((globalTheme.YBasic || {}).YTable || {}));

export const ThemableYTbody = genSubcomponent('tbody', {Tag: 'tbody'});
export const ThemableYTd = genSubcomponent('td', {Tag: 'td'});
export const ThemableYTh = genSubcomponent('th', {Tag: 'th',
    propMutator:
        ({style = {}, resizable = false, ...props}) =>
        ({style: Object.assign({}, style, {resize: resizable ? 'horizontal': style.resize}), ...props})
});
export const ThemableYThead = genSubcomponent('thead', {Tag: 'thead'});
export const ThemableYThSortIndicator = genSubcomponent('th sort indicator');
export const ThemableYTr = genSubcomponent('tr', {Tag: 'tr'});
export const ThemableYTable = genSubcomponent('table', {Tag: 'table'});

export const YTable = ThemableYTable();
export const YTBody = ThemableYTbody();
export const YTd = ThemableYTd();
export const YTh = ThemableYTh();
export const YThead = ThemableYThead();
export const YThSortIndicator = ThemableYThSortIndicator();
export const YTr = ThemableYTr();

export default {
    YTable,
    YTBody,
    YTd,
    YTh,
    YThead,
    YThSortIndicator,
    YTr
};