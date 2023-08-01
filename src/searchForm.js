
import getElem from './getElement.js';
import presentDrinks from './presentDrinks.js';

const searchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const defaultURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const form = getElem('.search-form');
const input = getElem('[name = "drink"]');

form.addEventListener("keyup",(event)=>{
    // event.preventDefault();
    const value = input.value;
    if(!value) 
    {
        presentDrinks(defaultURL);
    }
    presentDrinks(`${searchURL}${value}`);
})