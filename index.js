/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

let heroi = ['Raff', 11007]
let rank = ''

if (heroi[1] <= 1000) {
  rank = 'ferro'
}
if (heroi[1] >= 1001) {
  rank = 'bronze'
}
if (heroi[1] >= 2001) {
  rank = 'prata'
}
if (heroi[1] >= 5001) {
  rank = 'ouro'
}
if (heroi[1] >= 7001) {
  rank = 'platina'
}
if (heroi[1] >= 8001) {
  rank = 'ascendente'
}
if (heroi[1] >= 9001) {
  rank = 'imortal'
}
if (heroi[1] >= 10001) {
  rank = 'radiante'
}

console.log('O Herói de nome ' + heroi[0] + ' está no nível ' + rank)
