import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Página que contiene los selectores y metodos especificos para la pagina de autenticacion del sitio
 */
class LoginPage extends Page {
    /**
     * define los selectores usando metodos getter 
     */
    get inputUsuario () {
        return $('#user-name');
    }

    get inputContraseña () {
        return $('#password');
    }

    get btnLogin () {
        return $('[type="submit"]');
    }

    get labelErrorUsuarioBloqueado () {
        return $('[data-test="error"]')
    }

    /**
     * @method autenticacionAlSitio Metodo para autenticarse al sitio web
     * @param {String} usuario Nombre del usuario para autenticarse al sitio web
     * @param {String} contraseña Contraseña del usuario para autenticarse al sitio web
     */
    async autenticacionAlSitio (usuario, contraseña) {
        await this.inputUsuario.setValue(usuario); // Mandamos escribir al elemento web el usuario
        await this.inputContraseña.setValue(contraseña); // Mandamos escribir al elemento web la contraseña
        await this.btnLogin.click(); // Le damos click al boton de autenticación del sitio web
    }

    /**
     * @method verificarUsuarioBloqueado Metodo para vericar que el usuario ingresado esta bloqueado y no puede ingresar al sistema
     */
    async verificarUsuarioBloqueado(){
        await expect(this.labelErrorUsuarioBloqueado)
        .toHaveText('Epic sadface: Sorry, this user has been locked out.'); // verificamos que el texto sea el error por estar bloqueado
    }

    /**
     * Sobreescribimos especificamente la opcion que necesitamos para adaptar el objeto página 
     */
    open () {
        return super.open('https://www.saucedemo.com/');
    }
}

export default new LoginPage();
