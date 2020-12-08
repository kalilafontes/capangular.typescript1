"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido() {
    }
    Pedido.prototype.valorTotal = function (pedido) {
        return pedido.valor + pedido.valor * 8 / 100;
    };
    Pedido.prototype.valorComEntrega = function (pedido, entrega) {
        if (entrega.tarifado == true) {
            return pedido.valor + pedido.valor * 15 / 100;
        }
        else {
            return pedido.valor;
        }
    };
    return Pedido;
}());
exports.Pedido = Pedido;
