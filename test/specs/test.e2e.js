import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventarioPage from '../pageobjects/inventario.page.js'
import CarritoPage from '../pageobjects/carrito.page.js';

describe('Autenticarme al sitio web', () => {
    it('Yo deberia poderme autenticar como un usuario estandar', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('standard_user', 'secret_sauce')
        await InventarioPage.verificarAutenticacion()
    })

    it('Yo no deberia poderme autenticar como un usuario bloqueado', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('locked_out_user', 'secret_sauce')
        await LoginPage.verificarUsuarioBloqueado()
    })

    it('Yo deberia poderme autenticar como un usuario con problemas', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('problem_user', 'secret_sauce')
        await InventarioPage.verificarAutenticacion()
    })

    it('Yo deberia poderme autenticar como un usuario con problemas de rendimiento', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('performance_glitch_user', 'secret_sauce')
        await InventarioPage.verificarAutenticacion()
    })

    it('Yo deberia poderme autenticar como un usuario con errores', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('error_user', 'secret_sauce')
        await InventarioPage.verificarAutenticacion()
    })

    it('Yo deberia poderme autenticar como un usuario visual', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('visual_user', 'secret_sauce')
        await InventarioPage.verificarAutenticacion()
    })
})

describe('Agregar articulos al carrito', () => {
    it('Agregar el articulo Sauce Labs Backpack al carrito', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('standard_user', 'secret_sauce')
        await InventarioPage.agregarAlCarrito('Sauce Labs Backpack')
        await InventarioPage.verificarArticuloAgregado('Sauce Labs Backpack')
        await CarritoPage.elimnarArticulo()
    })

    it('Agregar el articulo Sauce Labs Bike Light al carrito', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('standard_user', 'secret_sauce')
        await InventarioPage.agregarAlCarrito('Sauce Labs Bike Light')
        await InventarioPage.verificarArticuloAgregado('Sauce Labs Bike Light')
        await CarritoPage.elimnarArticulo()
    })

    it('Agregar el articulo Sauce Labs Bolt T-Shirt al carrito', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('standard_user', 'secret_sauce')
        await InventarioPage.agregarAlCarrito('Sauce Labs Bolt T-Shirt')
        await InventarioPage.verificarArticuloAgregado('Sauce Labs Bolt T-Shirt')
        await CarritoPage.elimnarArticulo()
    })

    it('Agregar el articulo Sauce Labs Fleece Jacket al carrito', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('standard_user', 'secret_sauce')
        await InventarioPage.agregarAlCarrito('Sauce Labs Fleece Jacket')
        await InventarioPage.verificarArticuloAgregado('Sauce Labs Fleece Jacket')
        await CarritoPage.elimnarArticulo()
    })

    it('Agregar el articulo Sauce Labs Onesie al carrito', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('standard_user', 'secret_sauce')
        await InventarioPage.agregarAlCarrito('Sauce Labs Onesie')
        await InventarioPage.verificarArticuloAgregado('Sauce Labs Onesie')
        await CarritoPage.elimnarArticulo()
    })

    it('Agregar el articulo Test.allTheThings() T-Shirt (Red) al carrito', async () => {
        await LoginPage.open()
        await LoginPage.autenticacionAlSitio('standard_user', 'secret_sauce')
        await InventarioPage.agregarAlCarrito('Test.allTheThings() T-Shirt (Red)')
        await InventarioPage.verificarArticuloAgregado('Test.allTheThings() T-Shirt (Red)')
        await CarritoPage.elimnarArticulo()
    })
})

