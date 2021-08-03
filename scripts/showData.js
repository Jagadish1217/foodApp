
async function getData(url) {
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data;
    }
    catch (err) {
        console.log("err:", err);
    }



}

function showMeals(meals, parent) {
    meals.forEach(({ strArea, strCategory, strInstruction, strMeal, strSource, strYoutube, strMealThumb }) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("div");
        let link = document.createElement("div");
        img.src = strMealThumb;
        name.innerHTML = strMeal;
        link.innerHTML = strSource;
        div.append(img, name, link);
        parent.append(div);
    });


}

export { getData, showMeals }