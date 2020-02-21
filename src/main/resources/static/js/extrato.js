var Extrato = (function(){

    'use strict';

    var getExtratos = function () {
        $.ajax({
            type: 'GET',
            url: "/v1/api/extratos",
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
                return montaGridExtratos(data);
            },
            error: function(xhr, status, error) {
                $.handleErrorResponse(xhr, status, error);
            }
        });
    };

    var montaGridExtratos = function (extratos) {

        if (!extratos) return;

        var table = document.getElementById("gridExtratos");
        extratos.forEach(function (extrato, index) {
            var row = table.tBodies[0].insertRow();

            var dataOperacao = row.insertCell(0);
            var tipoOperacao = row.insertCell(1);
            var valorOperacao = row.insertCell(2);

            dataOperacao.innerHTML = extrato.dataOperacao ? new Date(extrato.dataOperacao).toLocaleDateString("pt-br") : null;
            tipoOperacao.innerHTML = extrato.tipoOperacao;
            valorOperacao.innerHTML = adicionaMascarasDoValor(valorOperacao, extrato.valorOperacao);
        });
    };

    var adicionaMascarasDoValor = function(element, valor){
        valor > 0 ? element.classList.add("positivo") : element.classList.add("negativo");
        var valorMask = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return valorMask;
    };

    function init() {
        getExtratos();
    }

    return {
        init:init
    }

})();

$(document).ready(function() {
    Extrato.init();
});