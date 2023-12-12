let nome = "Pikachu"
let xp = 0.001

let nivel 
const mensagem = ("O herói de nome "+nome+" está no nível de")

console.log ("Desafio Classificador de Nível de Herói")

switch (true){
    case (xp < 1.000):
        nivel = " ferro."
        console.log(mensagem+nivel)
        break
    case (xp> 1.001 && xp < 2.000):
        nivel = " bronze."
        console.log(mensagem+nivel)
        break
    case (xp > 2.001 && xp < 5.000):
        nivel = " prata."
        console.log(mensagem+nivel)
        break    
    case (xp > 6.001 && xp < 7.000):
        nivel = " ouro."
        console.log(mensagem+nivel)
        break    
    case (xp > 7.001 && xp < 8.000):
        nivel = " platina."
        console.log(mensagem+nivel)
        break
    case (xp > 8.001 && xp < 9.000):
        nivel = " ascendente."
        console.log(mensagem+nivel)
        break
    case (xp > 9.001 && xp < 10.000):
        nivel = " imortal."
        console.log(mensagem+nivel)
        break
    case (xp >= 10.001):
        nivel = " radiante."
        console.log(mensagem+nivel)
        break
    default: 
        console.log("Nível do Herói não reconhecido")
        break
}
