document.addEventListener('DOMContentLoaded', () => {
    import('./components/navbar.js');
    const root = document.getElementById('root');
    const content = document.createElement('div');
    content.innerHTML = `
    <navbar-component/>
    `;
    const htmlContent = document.getElementById('content');
    root.append(content);
    root.append(htmlContent);
});