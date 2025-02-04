import { $, expect } from '@wdio/globals'
import Page from './page.js';

/**
 * Página que contiene los selectores y metodos especificos para la pagina de carrito del sitio
 */
class CarritoPage extends Page {
    /**
     * define los selectores usando metodos getter 
     */
    get lblArticulo() {
        return $('[data-test="inventory-item-name"]');
    }

    get btnBotonRemover() {
        return $('//div[@class="item_pricebar"]//button');
    }

    /**
     * @method validarArticuloAgregado Metodo para validar que el articulo esta agregado
     * @param {String} nombre Nombre del articulo al cual le daremos agregar al carrito
    */
    async validarArticuloAgregado(nombre) {
        await expect(this.lblArticulo).toHaveText(`${nombre}`);
    }

    /**
     * @method elimnarArticulo Metodo para eliminar articulo del carrito
    */
    async elimnarArticulo() {
        await this.btnBotonRemover.click();
    }

}

export default new CarritoPage();



