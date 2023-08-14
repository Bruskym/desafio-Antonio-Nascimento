import { menuPrincipal, menuExtras } from "./cardapio.js"

export class Database{
    
    buscarItemCardapioPrincipal(item){
        const existe = menuPrincipal.find((opcao) => {
            return opcao.id === item
        })

        if(existe) return existe
        return null

    }

    buscarItemCardapioExtra(item){
        const existe = menuExtras.find((opcao) => {
            return opcao.id === item
        })
        if(existe) return existe
        return null

    }

    validarItem(item){
        if((this.buscarItemCardapioExtra(item)) || (this.buscarItemCardapioPrincipal(item))){
            return true
        }
        return false
    }

    validarExtra(extra, carrinho){
        const { dependencia } = this.buscarItemCardapioExtra(extra)

        const validade = carrinho.find((itemPrincipal) => {
            return dependencia === itemPrincipal[0]
        })
        if(validade) return true
        return false
    }
    
}