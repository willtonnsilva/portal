var Index = (function () {
    'use strict';

    var adicionaEvents = function () {
        document.getElementById("btn-extrato").addEventListener("click", getExtratos );
        document.getElementById("btn-funcionarios").addEventListener("click", getFuncionarios );
    };

    var getExtratos = function () {
        Extrato.init();
    };

    var getFuncionarios = function () {
        Funcionario.init();
    };

    function init() {
      adicionaEvents();
      getExtratos();
    }

    return {
        init:init
    }

})();

$(document).ready(function() {
    Index.init();
});