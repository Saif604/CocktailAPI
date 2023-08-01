import showDrinks from './src/presentDrinks.js';
import './src/searchForm.js'

const char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','y','z'];
const rand = Math.floor(Math.random() * char.length);
const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char[rand]}`;


window.addEventListener('DOMContentLoaded',()=>{
    showDrinks(URL);
})