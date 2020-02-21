var Funcionario = (function () {
    'use strict';

    var getFuncionarios = function () {
        $.ajax({
            type: 'GET',
            url: "/v1/api/funcionarios",
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
                return montaGridFuncionarios(data);
            },
            error: function(xhr, status, error) {
                $.handleErrorResponse(xhr, status, error);
            }
        });
    };

    //tirando os dados da tabela, mas mantendo o cabecario
    var desmontaDadosAtuaisDaGrid = function () {
        var tabela = document.getElementById('grid');
        var linhas = tabela.getElementsByTagName('tr');

        if (linhas.length < 2) return;

        for (var i = 0; i < linhas.length; i++){
            tabela.deleteRow(1)
        }
    };


    var montaGridFuncionarios = function (funcionarios) {

        if (!funcionarios) return;

        desmontaDadosAtuaisDaGrid();

        var table = document.getElementById("grid");
        // ajustaCabecalhoDaGrid(table);

        funcionarios.forEach(function (funcionario, index) {
            var row = table.tBodies[0].insertRow();
            var dataOperacao = row.insertCell(0);
            var tipoOperacao = row.insertCell(1);
            var valorOperacao = row.insertCell(2);

            dataOperacao.innerHTML = funcionario.matricula;
            tipoOperacao.innerHTML = funcionario.nome;
            valorOperacao.innerHTML = funcionario.funcao;
        });
    };

    var ajustaCabecalhoDaGrid = function (table) {
        table.tHead.deleteRow(0);
        var theadMatricula = document.createElement("th");
        var theadNome = document.createElement("th");
        var theadFuncao = document.createElement("th");
        var theadGrid = document.getElementById("headGrid");
        theadMatricula.innerHTML = "Matricula";
        theadNome.innerHTML = "Nome";
        theadFuncao.innerHTML = "Função";
        var tr = document.createElement("th");
        tr.appendChild(theadMatricula);
        tr.appendChild(theadNome);
        tr.appendChild(theadFuncao);
        theadGrid.appendChild(tr);
    };

    function init() {
        getFuncionarios();
    }

    return {
        init:init
    }

})();