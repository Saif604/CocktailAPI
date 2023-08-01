import { showloading } from "./toggleLoading.js";

const fetchDrinks = async(url) =>{
    showloading();
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log
        return data;
    }
    catch(err)
    {
        console.log(err);
    }
}

export default fetchDrinks;