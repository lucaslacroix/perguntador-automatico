import { config } from '../config/request-config.js';

export default class VendedoresModel{
    constructor(){
    }

    /**
     * @returns Array(object)
     * [{
     *      nickname,
     *      totalAnuncios
     * }]
     */
    async getVendedores(){
        const res = await fetch(`${config.url}/vendedores`);
        const vendedores = await res.json();

        return [...vendedores];
    }

    /**
     * @returns (number)
     */
    async getTotalAnunciosCadastrados(){
        const res = await fetch(`${config.url}/totalAnunciosCadastrados`);
        const anunciosCadastrados = await res.json();

        return anunciosCadastrados.totalAnuncios;
    }

}