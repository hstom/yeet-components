export const catClassName = (...classNames) => {
    return [].concat.apply([], 
        classNames.map((className = '') => Array.from(new Set(className.split(' ').filter(z => !!z))))
    ).join(' ');
};


export default {
    catClassName
}