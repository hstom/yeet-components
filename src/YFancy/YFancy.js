import YModalForm, {ThemableYModalForm} from './YModalForm/YModalForm';

export const ThemableYFancy = globalTheme => ({
    YModalForm: ThemableYModalForm(globalTheme)
})

export default {
    YModalForm
}