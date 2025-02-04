import { browser } from '@wdio/globals'

/**
* Pagina Objeto principal, que contiene todos los metodos, selectores y funcionalidades 
* que se comparten con las demas paginas objeto.
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (URL) {
        return browser.url(`${URL}`)
    }
}
