import VendedoresModel from '../models/VendedoresModel.js';
import PerguntasModel from '../models/PerguntasModel.js';
import PerguntadoresModel from '../models/PerguntadoresModel.js';

export default class DashboardController{
    constructor(){
        this.vendedores = [];
        this.perguntadores = [];
        this.perguntas = [];
        this.ultimoEnvio = 0;
        this.proximoEnvio = 0;
        this.totalperguntasCadastradas = 0;
        this.totalAnunciosCadastrados = 0;

        this.inicializar();
    }

    inicializar(){
        this.setVendedores();
        this.setPerguntas();
        this.setPerguntadores();
    }

    async setVendedores(){
        const vendedores = new VendedoresModel();
        const listaHTML = document.querySelector('#lista-de-vendedores');
        const anunciosCadastradosHTML = document.querySelector('#total-anuncios-cadastrados');

        this.vendedores = await vendedores.getVendedores();
        this.totalAnunciosCadastrados = await vendedores.getTotalAnunciosCadastrados();

        anunciosCadastradosHTML.innerHTML = this.totalAnunciosCadastrados;

        for(let vendedor in this.vendedores){
            let li = document.createElement('li');
            const {nickname, totalAnuncios} = this.vendedores[vendedor];

            li.innerHTML = `<span>${nickname}</span><span class="badge badge-primary">${totalAnuncios}</span>`;
            listaHTML.appendChild(li);
        }
    }

    async setPerguntas(){
        const perguntas = new PerguntasModel();
        const listaHTML = document.querySelector('#lista-de-perguntas');
        const perguntasCadastradasHTML = document.querySelector('#total-perguntas-cadastradas');

        this.perguntas = await perguntas.getPerguntas();
        this.totalperguntasCadastradas = await perguntas.getTotalPerguntasCadastradas();

        perguntasCadastradasHTML.innerHTML = this.totalperguntasCadastradas;

        for(let perg in this.perguntas){
            let li = document.createElement('li');
            const {pergunta} = this.perguntas[perg];

            li.innerHTML = `<p>${pergunta}</p>`;
            listaHTML.appendChild(li);
        }
    }

    async setPerguntadores(){
        const perguntadores = new PerguntadoresModel();
        const listaHTML = document.querySelector('#lista-de-perguntadores');

        this.perguntadores = await perguntadores.getPerguntadores();

        for(let perguntador in this.perguntadores){
            let li = document.createElement('li');
            const {id, nickname} = this.perguntadores[perguntador];

            li.innerHTML = `<span>${nickname}</span><span>${id}</span>`;
            listaHTML.appendChild(li);
            
											
        }
    }
}