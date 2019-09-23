import YButton, {ThemableYButton} from './YButton/YButton';
import YModal, {ThemableYModal} from './YModal/YModal';
import YTable, {ThemableYTable} from './YTableComponents/YTable';
import YTbody, {ThemableYTbody} from './YTableComponents/YTbody';
import YThead, {ThemableYThead} from './YTableComponents/YThead';
import YTh, {ThemableYTh} from './YTableComponents/YTh';
import YTr, {ThemableYTr} from './YTableComponents/YTr';
import YTd, {ThemableYTd} from './YTableComponents/YTd';
import YThSortIndicator, {ThemableYThSortIndicator} from './YTableComponents/YThSortIndicator';

export const ThemableYBasic = globalTheme => {
    return ({
    YButton: ThemableYButton(globalTheme),
    YModal: ThemableYModal(globalTheme),
    YTable: ThemableYTable(globalTheme),
    YThead: ThemableYThead(globalTheme),
    YTh: ThemableYTh(globalTheme),
    YTbody: ThemableYTbody(globalTheme),
    YTr: ThemableYTr(globalTheme),
    YTd: ThemableYTd(globalTheme),
    YThSortIndicator: ThemableYThSortIndicator(globalTheme)
})};

export default {
    YButton,
    YModal,
    YTable,
    YThead,
    YTh,
    YTbody,
    YTr,
    YTd,
    YThSortIndicator
}