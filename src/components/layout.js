class Layout extends HTMLElement() {
    constructor() {
        super();
        this.shadowRoot();
        this.render();
    }
    shadowRoot() {
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot().innerHTML = `
        `
    }
}