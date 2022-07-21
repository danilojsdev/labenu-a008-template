// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

let comparacao
let resultado

console.log("Qual sua idade?", minhaIdade)
console.log("Qual a idade da sua amiga ou amigo?", idadeAmiga)

comparacao = minhaIdade > idadeAmiga
console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)

resultado = minhaIdade - idadeAmiga
console.log(resultado)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

// Não sou maior de idade e quero passear de carro;

!b && d

// Sou maior de idade e vou para a praia, e não quero passear de carro;

(b && a) && !d

// Vou para a praia ou quero passear de carro;

a || d

// Posso tomar uma cervejinha e não vou passear de carro;

c && !d