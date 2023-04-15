import styles from "./jokeCard.css"

export enum attributes{
    "joke"="joke"
}

export default class MyCard extends HTMLElement{
    joke?: string;

    static get observedAttributes(){
        const attrs: Record<attributes, null> = {
            joke: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:attributes,
        _:unknown,
        newValue:string
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){ 
        this.shadowRoot.innerHTML = `
        <section>
        <h1>${this.joke}</h1>
        <h3>Chuck Norris</h3>
        </section>
        `;

        const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)
        }
    }
}

customElements.define('my-card', MyCard)