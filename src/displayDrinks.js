import getElem from './getElement.js';
import { hideloading } from './toggleLoading.js';

const section = getElem('.section-center');
const title = getElem('.title');
const displayDrinks = ({drinks}) =>{
    if(!drinks)
    {
        hideloading();
        title.textContent = 'Sorry, no drink match your search';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks;
    section.innerHTML = newDrinks.map(drink=>{
        const{idDrink: id, strDrink: name, strDrinkThumb: image} = drink;
        return `<a href="drink.html">
        <article class="cocktail" data-id = "${id}">
          <img src="${image}" aria-multiline="cocktail" alt="">
          <h3>${name}</h3>
        </article>
      </a>`
    }).join('');
    
    hideloading();
    title.textContent = ''; 
    return section;

}

export default displayDrinks;