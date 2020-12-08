"use strict";
exports.__esModule = true;
exports.Estoque = void 0;
var Estoque = /** @class */ (function () {
    function Estoque() {
    }
    Estoque.prototype.removeProduto = function (produto, qtdInicial) {
        var qtdInicial = 50;
        var qtd = produto.quantidade;
        return qtdInicial - qtd;
    };
    return Estoque;
}());
exports.Estoque = Estoque;
