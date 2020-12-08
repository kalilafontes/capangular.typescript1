"use strict";
exports.__esModule = true;
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nomeProduto, precoProduto, quantidadeProduto) {
        this.nome = nomeProduto;
        this.preco = precoProduto;
        this.quantidade = quantidadeProduto;
    }
    Produto.prototype.valorProduto = function (produto) {
        return produto.preco;
    };
    return Produto;
}());
exports.Produto = Produto;
