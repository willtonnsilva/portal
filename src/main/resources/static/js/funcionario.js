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

    var montaGridFuncionarios = function (funcionarios) {

        var table = document.getElementById("grid");

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

    function init() {
        getFuncionarios();
    }

    return {
        init:init
    }

})();

$(document).ready(function() {
    Funcionario.init();
});