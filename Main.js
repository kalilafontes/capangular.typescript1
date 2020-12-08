"use strict";
exports.__esModule = true;
var Pedido_1 = require("./Pedido");
//import { Produto, IProduto } from "./Produto";
//import { Cliente, ICliente } from "./Cliente";
var valorTotalPedido;
var valorEntrega;
var produto1 = { numero: 1, preco: 5, quantidade: 4 };
var produto2 = { numero: 2, preco: 10, quantidade: 8 };
var valorTotal = produto1.preco * produto1.quantidade + produto2.preco * produto2.quantidade;
var pedido = { numero: 1, valor: valorTotal, desconto: 0, produtos: [produto1, produto2] };
var entrega = { tarifado: true };
valorTotalPedido = new Pedido_1.Pedido().valorTotal(pedido);
console.log("Valor total do pedido é de = R$", valorTotalPedido);
valorEntrega = new Pedido_1.Pedido().valorComEntrega(pedido, entrega);
console.log("Valor total do pedido com a entrega é de = R$", valorEntrega);
if (valorTotalPedido & valorEntrega) {
    console.log("Pedido Realizado com Sucesso!");
}
