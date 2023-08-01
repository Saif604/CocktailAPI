import displaySingleDrink from './src/displaySingleDrink.js';
import { showloading } from './src/toggleLoading.js';

const id = localStorage.getItem('id');
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

window.addEventListener('DOMContentLoaded',()=>{
    if(!id)
    window.location.replace('./index.html');
    displaySingleDrink(url);
})
