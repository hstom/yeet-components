import YButton, {ThemableYButton} from './YButton/YButton';
import YModal, {ThemableYModal} from './YModal/YModal';

export const ThemableYBasic = globalTheme => {
    return ({
    YButton: ThemableYButton(globalTheme),
    YModal: ThemableYModal(globalTheme)
})};

export default {
    YButton,
    YModal
}