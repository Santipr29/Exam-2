import "./components/export"
import {getCategory} from "./components/data"
import {getJoke} from "./components/data"

import {attribute} from "./components/button/button"
import {attributes} from "./components/jokeCard/jokeCard"

import styles from "./index.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const category = await getCategory();
        this.render(category)
    }

    render(category:any) {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1 class="tittle">Awesome Jokes App</h1>
            `;

            category.forEach( (category:any) => {
                const button = this.ownerDocument.createElement('my-button')
                button.setAttribute(attribute.btn_category, category)
                
                button.addEventListener('click', async ()=>{
                   const joke = await getJoke(category)
                   console.log(joke);

                   const card = this.ownerDocument.createElement('my-card')
                   card.setAttribute(attributes.joke, joke.value)
                   this.shadowRoot?.appendChild(card)

                })
                
                const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

                this.shadowRoot?.appendChild(button)
            });
        }
    }
}

customElements.define('app-container', AppContainer)