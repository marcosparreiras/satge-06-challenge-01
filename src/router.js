class Router {
    constructor(appHtmlElement) {
        this.appHtmlElement = appHtmlElement;
        this.routes = {};
    }

    add(href, page) {
        this.routes[href] = page;
    }

    route(href) {
        window.history.pushState('', '', href);
        const { pathname } = window.location;
        const pagePath = this.routes[pathname] || this.routes[404];
        if (!pagePath) throw new Error('Rote not defined');
        fetch(pagePath)
            .then((response) => response.text())
            .then((html) => (this.appHtmlElement.innerHTML = html));
    }
}

export default Router;
