//CODIGO AQUI

// Se eu tenho 15 reais, e recebo mais 22.40. Quanto dinheiro tenho agora?

let saldo = 15 + 22.40
console.log("saldo inicial", saldo)

// Gastei 12.34. E agora, qual é o meu saldo?

saldo = saldo - 12.34
console.log("saldo subtraído", saldo)

// Precisei dividir o dinheiro igualmente com meus dois irmãos. Quanto ficou pra cada um?

saldo = saldo / 3
console.log("saldo dividido", saldo)

// Apliquei minha parte do dinheiro, e ele rendeu até ficar 3.42 vezes maior. Quanto vale agora?

saldo = saldo * 3.42
console.log("saldo aplicado", saldo)

/* Reparti o dinheiro em fatias inteiras entre três contas, e deixei o resto para comprar um chicletinho. 
Quanto dinheiro sobrou para o chiclete? */

saldo = saldo % 3
console.log("chicletinho", saldo)

// Precedência matemática

const multESoma = 2*2+2
console.log(multESoma)

const somaEMult = 2*(2+2)
console.log(somaEMult)

// Igual e Diferente

let comparacaoIgual = 5 === 5 // Retorna "true" pois são iguais e do mesmo tipo (number).
console.log(comparacaoIgual)

comparacaoIgual = 5 == "5" // Retorna "true" pois está analisando apenas o valor e não o tipo.
console.log(comparacaoIgual)

let comparacaoDiferente = 5 !== 5
console.log(comparacaoDiferente)

comparacaoDiferente = 5 !== "5"
console.log(comparacaoDiferente)
 
comparacaoDiferente = 5 != "5" // Retorna "false" pois está analisando apenas o valor e não o tipo.
console.log(comparacaoDiferente)

comparacaoIgual = "5" === "cinco"
console.log(comparacaoIgual)

let tipo = typeof 5 === typeof 20
console.log(tipo)

tipo = typeof "5" === typeof "cinco"
console.log(tipo)

// Menor e Maior (ou igual)

const num1 = 2
const num2 = 8
let resultado

// O primeiro número é igual ao segundo? True/False

resultado = num1 === num2
console.log(resultado)

// O primeiro número é menor ou igual ao segundo? True/False

resultado = num1 <= num2
console.log(resultado)

// O primeiro número é maior que o segundo? True/False

resultado = num1 > num2
console.log(resultado)

// O primeiro número é menor que o segundo? True/False

resultado = num1 < num2
console.log(resultado)

// Mas é LÓGICO que sim! (ou não, né?)

let a = "Quero dirigir um Celta 2012"
let b = "Sou maior de idade"
let c = "consigo comprar o Celta por 22.000 reais"
let d = "consigo alugar o Celta"
let e = "tenho carteira de motorista"

a
!b
b && !e
b && (c || d)
(b && e) && !a