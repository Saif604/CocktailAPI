

const setDrink = (section)=>{
    section.addEventListener('click',(event)=>{
        const id = event.target.parentElement.dataset.id;
        localStorage.setItem("id",id);
    })
}

export default setDrink;