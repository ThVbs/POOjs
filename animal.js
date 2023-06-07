class Animal{
    constructor(nome, cor, ambiente, comprimento, velocidade, patas){
        this.nome = nome
        this.cor = cor
        this.ambiente = ambiente
        this.comprimento = comprimento
        this.velocidade = velocidade
        this.patas = patas
    }
    AlterarNome(nome){
        this.nome = nome
    }
    AlterarCor(cor){
        this.cor = cor
    }
    AlterarAmbiente(ambiente){
        this.ambiente = ambiente
    }
    AlterarComprimento(comprimento){
        this.comprimento = comprimento
    }
    AlterarVelocidade(velocidade){
        this.velocidade = velocidade
    }
    AlterarPatas(patas){
        this.patas = patas
    }

}