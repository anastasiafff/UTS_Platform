class Navbar extends HTMLElement {
    connectedCallback() {
        this.createShadowRoot();
        this.render();
    }

    isActive(path) {
        return window.location.pathname === `/${path}`;
    }

    createShadowRoot() {
        this.attachShadow({ mode: 'open' });
    }

    render() {
        const pages = [
            { path: 'index.html', label: 'Beranda' },
            { path: 'tentang.html', label: 'Tentang' },
            { path: 'kisah.html', label: 'Kisahku' },
            { path: 'pendidikan.html', label: 'Pendidikan' },
            { path: 'tugas.html', label: 'Tugas' }
        ];

        const currentPath = window.location.pathname;

        const navbarItems = pages.map(page => `
            <li>
                <a href="${page.path}" class="nav-link px-2 text-white ${this.isActive(page.path) ? 'active border-bottom border-white fw-bold' : ''}">
                    ${page.label}
                </a>
            </li>
        `).join('');

        this.shadowRoot.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <header class="absolute z-[100] d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div class="col-md-3 mb-2 mb-md-0">
                </div>
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-red-900 font-extrabold">
                    ${navbarItems}
                </ul>
                <div class="col-md-3 text-end">
                </div>
            </header>
        `;
    }
}

customElements.define('navbar-component', Navbar);