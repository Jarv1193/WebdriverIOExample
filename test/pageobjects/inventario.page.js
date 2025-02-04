import { $, expect } from '@wdio/globals'
import Page from './page.js';
import CarritoPage from './carrito.page.js';

/**
 * Página que contiene los selectores y metodos especificos para la pagina de inventario del sitio
 */
class InventarioPage extends Page {
    /**
     * define los selectores usando metodos getter 
     */
    get btnMenu() {
        return $('#react-burger-menu-btn');
    }

    get lnkCarrito() {
        return $('[data-test="shopping-cart-link"]');
    }

    get inputLogOut() {
        return $('#logout_sidebar_link');
    }

    /**
     * @method verificarAutenticacion Metodo para verificar que si estamos autenticados al sitio
     */
    async verificarAutenticacion() {
        await this.btnMenu.click();
        await expect(this.inputLogOut).toBePresent();
    }

    /**
     * @method agregarAlCarrito Metodo para agregar articulos al carrito
     * @param {String} nombre Nombre del articulo al cual le daremos agregar al carrito
    */
    async agregarAlCarrito(nombre) {
        let botonAgregar = $(`//div[contains(text(),'${nombre}')]/parent::a/parent::div/parent::div//button`);
        await botonAgregar.click();
        await expect(botonAgregar).toHaveText('Remove');
    }

    /**
     * @method verificarArticuloAgregado Metodo para verificar que el articulo si se agrego
     * @param {String} nombre Nombre del articulo al cual le daremos agregar al carrito
     */
    async verificarArticuloAgregado(nombre) {
        await this.lnkCarrito.click();
        await CarritoPage.validarArticuloAgregado(nombre);
    }

}

export default new InventarioPage();
