import Router from './router.js';
import Navigaton from './navigation.js';

function app() {
    const navigatonElement = document.querySelector('nav');
    const appElement = document.querySelector('.app');
    new Navigaton(navigatonElement, appElement, Router);
    window.handleHomeButtonClick = () =>
        document.querySelector('nav a[href="/universe"]').click();
}

app();
