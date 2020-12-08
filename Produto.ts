

export class Produto {

    nome: string;
    preco: number;
    quantidade: number;
    constructor(nomeProduto: string, precoProduto: number, quantidadeProduto: number) {
      this.nome = nomeProduto;
      this.preco = precoProduto;
      this.quantidade = quantidadeProduto;
    }

    valorProduto(produto: IProduto){
        return produto.preco;
    }
    
}

export interface IProduto{
    numero: number,
    preco: number,
    quantidade: number,
}