import {ThemableYButton, ThemableYButtonPrimary, ThemableYButtonSecondary} from './YButton/YButton';
import {ThemableYModal} from './YModal/YModal';
import {ThemableYTable} from './YTableComponents/YTable';
import {ThemableYTbody} from './YTableComponents/YTbody';
import {ThemableYThead} from './YTableComponents/YThead';
import {ThemableYTh} from './YTableComponents/YTh';
import {ThemableYTr} from './YTableComponents/YTr';
import {ThemableYTd} from './YTableComponents/YTd';
import {ThemableYThSortIndicator} from './YTableComponents/YThSortIndicator';

export const ThemableYBasic = globalTheme => {
    return ({
    YButton: ThemableYButton(globalTheme),
    YButtonPrimary: ThemableYButtonPrimary(globalTheme),
    YButtonSecondary: ThemableYButtonSecondary(globalTheme),
    YModal: ThemableYModal(globalTheme),
    YTable: ThemableYTable(globalTheme),
    YThead: ThemableYThead(globalTheme),
    YTh: ThemableYTh(globalTheme),
    YTbody: ThemableYTbody(globalTheme),
    YTr: ThemableYTr(globalTheme),
    YTd: ThemableYTd(globalTheme),
    YThSortIndicator: ThemableYThSortIndicator(globalTheme)
})};

export default ThemableYBasic;