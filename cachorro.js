class Cachorro extends Animal{
    constructor(nome, cor, ambiente, comprimento, velocidade, patas, alimento, preco){
        super(nome, cor, ambiente, comprimento, velocidade, patas)
        this.alimento = alimento
        this.preco = preco
    }

}