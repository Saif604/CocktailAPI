import fetchDrinks from './fetchDrinks.js';
import getElem from './getElement.js';
import {hideloading, showloading} from './toggleLoading.js';

const displayItem = (drink) =>{
    const title = getElem('title');
    const section = getElem('.single-drink');

    const {idDrink : id, strDrink : name, strInstructions : desc, strDrinkThumb : image} = drink;
    
    //Get drink whose indegridient is not null
    const indegrident = [];
    for(const key in drink)
    {
        if(key.includes('strIngredient',0) && drink[key])
        {
            indegrident.push(drink[key]);
        }
    }
    const list = indegrident.map(ind=>{
        return `<li><i class="fa-solid fa-vial-circle-check"></i>${ind}</li>`
    }).join('');

    title.textContent = name;

    section.innerHTML = `<img src="${image}" class="drink-img" alt="drink-img">
    <article class="drink-info">
      <h2 class="drink-name">${name}</h2>
      <p class="drink-desc">${desc}</p>
      <ul class="drink-ingredients">${list}</ul>
      <a href="index.html" class="btn">all cocktails</a>
    </article>`
    hideloading();
}


const displaySingleDrink = async(url)=>{
    const data = await fetchDrinks(url);
    displayItem(data.drinks[0]);
}

export default displaySingleDrink;