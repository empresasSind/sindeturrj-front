// import { gerarTabela } from "./index.js";
// import { Comeco } from "./index.js";

// import { ListaController } from "./ListaController";

export class EmpresaService {
    // urlBase = "https://empresas-w894.onrender.com/";
    urlBase = "https://laravel.copyconnect.com.br/api";
    //urlBase = "http://127.0.0.1:8000/api/";
    dados = [];

    // constructor() {
    //     // this.altura = altura;
    //     // this.largura = largura;
    // }

    loadingData(success, fail, completed) {
        // loaingTable.classList.remove('d-none');
        let url = this.urlBase + 'company';
        $.ajax({
            url: url,
            dataType: 'json',
            type: "GET",
            contentType: 'application/json',
            success: function (response) {
                success(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {},
            complete: () => {
                loaingTable.classList.add('d-none');
            }
        });
    }
    
    excluirEmpresa(id, success, fail, completed) {
        let url = this.urlBase + "company/" + id;
        $.ajax({
            url: url,
            dataType: 'json',
            type: "DELETE",
            contentType: 'application/json',
            success: (data) => {
                success();
                // this.mostrarToastEmpresaExcluida();
                // this.loadingData();
            },
            error: (jqXHR, textStatus, errorThrown) => {
                fail();
                console.log(textStatus, errorThrown);
            },
            complete: () => {
                // this.hideLoadingInSendButton();
                completed();
            }
        });
    };
    
    adicionaEmpresa(empresa, success, fail, completed) {
        let url = this.urlBase + 'company';
        
        $.ajax({
            url: url,
            dataType: 'json',
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(empresa),
            success: function (data) {
                success(data.id);
                // mostrarToastSucesso();
                // dados.push({ nome: nome, cnpj: cnpj });
                // gerarTabela(dados);
                // clearForm();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                fail();
            },
            complete: function() {
                completed();
                // hideLoadingInSendButton();
            }
        });
    }
    
    searchCNPJ(cnpj, success, fail, completed) {
        let url = this.urlBase + 'v1/empresa' + '?q=' + cnpj;
        $.ajax({
            url: url,
            dataType: 'json',
            type: "GET",
            contentType: 'application/json',
            success: function (response) {
                // console.log(response);
                success(response.data);
                // dados = response.data;
                // gerarTabela(dados);
            },
            error: function (jqXHR, textStatus, errorThrown) {},
            complete: () => {
                completed();
                // loaingTable.classList.add('d-none');
            }
        });
    }
}