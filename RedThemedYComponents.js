import {ThemableYComponents} from './src/YComponents.js';
import './RedThemedYComponents.css';

const themedComponents = ThemableYComponents({
    YBasic: {
        YButton: {
            defaultClassName: 'red'
        },
        YTh: {
            defaultClassName: 'red'
        },
        
        YTd: {
            defaultClassName: 'red'
        },
        
        YTr: {
            defaultClassName: 'red'
        },
        
        YThSortIndicator: {
            defaultClassName: 'red'
        },
        
    }
});

export const YButtonPrimary = themedComponents.YBasic.YButtonPrimary
export const YModalForm = themedComponents.YFancy.YModalForm;
export const YTable = themedComponents.YBasic.YTable;
export const YThead = themedComponents.YBasic.YThead;
export const YTh = themedComponents.YBasic.YTh;
export const YTbody = themedComponents.YBasic.YTbody;
export const YTr = themedComponents.YBasic.YTr;
export const YTd = themedComponents.YBasic.YTd;
export const YThSortIndicator = themedComponents.YBasic.YThSortIndicator;

export default themedComponents;