export async function getCategory() {
    try {
        const category = await fetch ("https://api.chucknorris.io/jokes/categories").then(res=>res.json())
        return category
    } catch (error) {
        console.log(error)
    }
}

//poner nombre de la categoria
export async function getJoke(category:any) {
    try {
        const joke = await fetch (`https://api.chucknorris.io/jokes/random?category=${category}`).then(res=>res.json())
        return joke
    } catch (error) {
        console.log(error)
    }
}