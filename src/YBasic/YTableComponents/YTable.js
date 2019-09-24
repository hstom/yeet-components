import { buildGenericThemableComponent } from '../../util.js';
import './YTableComponents.css';

import { ThemableYTbody } from './YTbody.js';
import { ThemableYTd } from './YTd.js';
import { ThemableYTh } from './YTh.js';
import { ThemableYThead } from './YThead.js';
import { ThemableYThSortIndicator } from './YThSortIndicator';
import { ThemableYTr } from './YTr.js';

const ThemableYTable = buildGenericThemableComponent({
    Tag: 'table',
    componentClassName: 'y-table',
    themeSelector: (globalTheme) => ((globalTheme.YBasic || {}).YTable || {})
});

export {
    ThemableYTable,
    ThemableYTbody,
    ThemableYTd,
    ThemableYTh,
    ThemableYThead,
    ThemableYThSortIndicator,
    ThemableYTr
}


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