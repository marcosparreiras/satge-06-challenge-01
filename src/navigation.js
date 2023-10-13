class Navigation {
    constructor(navigationElement, appHtmlElement, Router) {
        this.navigaton = navigationElement;
        this.router = new Router(appHtmlElement);
        this.configRouter();
        this.startListening();
    }

    configRouter() {
        Array.from(this.navigaton.children).forEach((element) => {
            if (!element.matches('a')) return;
            const href = String(element.href).slice(
                element.href.lastIndexOf('/')
            );
            const page = `/pages${href}.html`;
            this.router.add(href, page);
        });
        this.router.add(404, `/pages/404.html`);
    }

    startListening() {
        this.navigaton.addEventListener('click', (event) => {
            event.preventDefault();
            if (!event.target.matches('a')) return;
            this.handleActiveClass(event.target);
            this.router.route(event.target.href);
        });
    }

    handleActiveClass(target) {
        Array.from(this.navigaton.children).forEach((element) =>
            element.classList.remove('active')
        );
        target.classList.add('active');
    }
}

export default Navigation;
