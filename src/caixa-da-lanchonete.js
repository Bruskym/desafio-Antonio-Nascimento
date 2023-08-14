import { Database } from "./bancoDeDados.js"

const database = new Database()

class CaixaDaLanchonete {

    formataEntrada(itemStr){
        const itens = []
        itemStr.forEach(element => {
            itens.push(element.split(','))
        })

        return itens
    }

    validaCompra(carrinho){
        for (const item of carrinho) {
            if (!database.validarItem(item[0])) {
                return 'Item inválido!'
            }
            if (Number(item[1]) <= 0) {
               return 'Quantidade inválida!'
            }
            if (database.buscarItemCardapioExtra(item[0])) {
                if (!database.validarExtra(item[0], carrinho)) {
                    return 'Item extra não pode ser pedido sem o principal'
                }
            }
        }
        return false
    }

    calculaValorItem(item, quantidade){
       
        if(database.buscarItemCardapioPrincipal(item)){
            const { preco } = database.buscarItemCardapioPrincipal(item)
            return preco * quantidade
        }

        const { preco } = database.buscarItemCardapioExtra(item)
        return preco * quantidade


    }

    calcularValorTotal(metodo, valor){
        const valorPagamento = {
            'credito': valor * 1.03, // 3% de acrescimo
            'debito': valor,
            'dinheiro': valor * 0.95, // 5% de desconto
        }
        
        return valorPagamento[metodo]

    }

    calcularValorDaCompra(metodoDePagamento, itens) {   
        const compras = this.formataEntrada(itens)
        let valorTotal = 0 
        const metodosValidosPagamento = ['credito', 'debito', 'dinheiro']

        if(!metodosValidosPagamento.includes(metodoDePagamento)){
            return 'Forma de pagamento inválida!'
        }

        if(compras.length === 0){
            return 'Não há itens no carrinho de compra!'
        }

        if(this.validaCompra(compras)){
            return this.validaCompra(compras)
        }

        for (const item of compras){
            valorTotal += this.calculaValorItem(item[0], item[1])
        }
        

        const valorFinal = this.calcularValorTotal(metodoDePagamento, valorTotal)
        const messagemFinal = `R$ ${valorFinal.toFixed(2).replace(".", ",")}`
        
        return messagemFinal
    }

}

const caixa = new CaixaDaLanchonete()

//console.log(caixa.calcularValorDaCompra('dinheiro',['cafe,4', 'sanduiche,3', 'queijo,2']))

export { CaixaDaLanchonete }
