/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
// Definindo o nome e a quantidade de experiência (XP) do herói
// Função que calcula o nível com base na quantidade de vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    var saldoVitorias = vitorias - derrotas;

    // Utilizando uma estrutura de decisão para determinar o nível
    var nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando o resultado
    return "O Herói tem um saldo de " + saldoVitorias + " está no nível de " + nivel;
}

// Exemplo de uso da função
var resultado = calcularNivel(60, 20);
console.log(resultado);