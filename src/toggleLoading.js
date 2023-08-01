import getElem from './getElement.js';

const loading = getElem('.loading');

export const showloading = ()=>{
    loading.classList.remove('hide-loding');
}
export const hideloading = ()=>{
    loading.classList.add('hide-loading');
}