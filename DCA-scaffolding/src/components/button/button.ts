import styles from "./button.css"

export enum attribute{
    "btn_category"="btn_category"
}

export default class MyButton extends HTMLElement{
    btn_category?: string;

    static get observedAttributes(){
        const attrs: Record<attribute, null> = {
            btn_category: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:attribute,
        _:unknown,
        newValue:string,
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
        this.shadowRoot.innerHTML = '';

        const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.btn_category}`;

        this.shadowRoot?.appendChild(button)
        }
    }

}

customElements.define('my-button', MyButton)