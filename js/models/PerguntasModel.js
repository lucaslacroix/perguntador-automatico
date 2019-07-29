import { config } from '../config/request-config.js';

export default class PerguntasModel{
    constructor(){
    }

    /**
     * @returns Array(object)
     * [{
     *      id,
     *      pergunta
     * }]
     */
    async getPerguntas(){
        const res = await fetch(`${config.url}/perguntas`);
        const perguntas = await res.json();

        return [...perguntas];
    }

    /**
     * @returns (number)
     */
    async getTotalPerguntasCadastradas(){
        const res = await fetch(`${config.url}/totalPerguntasCadastradas`);
        const perguntasCadastradas = await res.json();

        return perguntasCadastradas.totalPerguntas;
    }

}