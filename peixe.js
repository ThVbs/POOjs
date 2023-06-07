class Peixe extends Animal{
    constructor(nome, cor, ambiente, comprimento, velocidade, patas, caracteristica, preco){
        super(nome, cor, ambiente, comprimento, velocidade, patas)
        this.caracteristica = caracteristica
        this.preco = preco
    }
}