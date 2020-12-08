"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Fornecedor = void 0;
var Endereco_1 = require("./Endereco");
var Fornecedor = /** @class */ (function (_super) {
    __extends(Fornecedor, _super);
    function Fornecedor(codigoFornecedor, nomeFornecedor, cnpjFornecedor, ruaEndereco, numeroEndereco, bairroEndereco, cepEndereco) {
        var _this = _super.call(this, ruaEndereco, numeroEndereco, bairroEndereco, cepEndereco) || this;
        _this.codigo = codigoFornecedor;
        _this.nome = nomeFornecedor;
        _this.cnpj = cnpjFornecedor;
        return _this;
    }
    return Fornecedor;
}(Endereco_1.Endereco));
exports.Fornecedor = Fornecedor;
