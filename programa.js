/*exercicio 1*/
let nome11= "Willian";
console.log("Olá, eu sou o "+ nome11)

/*exercicio 2*/
let noMe= "Willian";
let sobreNome= "Nogueira";
console.log("Olá, eu sou o " + noMe + " " + sobreNome)

/*exercicio 3*/
let primeiroNome= "Willian";
let segundoNome= "Nogueira";
let idade= 32;
console.log("Olá, eu sou o " + primeiroNome + " " + segundoNome + " e tenho " + idade)

/*exercicio 4*/
let preco1= 10;
let preco2= 20;
let precoTotal = preco1 + preco2;
console.log("Comprei uma xicara por " + preco1 + " e dois copos por " + preco2 + " reais. " + precoTotal + " reais.")

/*exercicio 5*/
let numeRo1= 10;
let numeRo2= 30;
let precotOtal= numeRo1 + numeRo2;
console.log("A soma do valor " + numeRo1 + " com o valor " + numeRo2 + " é igual a " + precotOtal)

/*exercicio 6*/
let contaDor= 0;
let soma1= contaDor ++ ;
console.log(soma1)

let contador2= soma1;
let soma2= contaDor ++ ;
console.log(soma2)
 
let contador3= soma2;
let soma3= contaDor ++ ;
console.log(soma3)

let contador4= soma3;
let soma4= contaDor ++ ;
console.log(soma4)


let contador5= soma4;
let soma5= contaDor ++ ;
console.log(soma5)

let contador6= soma5;
let soma6= contaDor ++ ;
console.log(soma6)

/*exercicio 7*/
let anoAtual= 2023;
let anoNascimento= 1991;
let idadeAtual= anoAtual - anoNascimento;
console.log(" No ano " + anoAtual + " eu tenho " + idadeAtual + " qnos de idade.")

/*exercicio 8*/
let alturaRetangulo= 5;
let larguraRetangulo= 7;
let areaRetangulo= alturaRetangulo + larguraRetangulo;
console.log("Um retanulo com largura de " + larguraRetangulo + " cm e altura de " + alturaRetangulo + " possui " + areaRetangulo + " cm² de area total.")

/*exercicio 9*/
let diaAtual= 17;
let mesaTual= 03;
let anoatUal= 2023;
let dataAtualformatada= diaAtual + "/" + mesaTual  + "/" + anoatUal;
console.log("A data de hoje é " + dataAtualformatada)

/*exercicio 10*/
let valorA= 25;
let valorB= 8;
let valoRa=25;
let valorAnteriora= valorA;
let valorAnteriorb= valorB;
valorA= valorB;
valorB= valoRa;
let valoratualA= valorA;
let valoratualB= valorB;
console.log("antes a variavel " + valorA + " possuía o valor " + valorAnteriora + " agora possuí o " + valoratualA)
console.log("antes a variavel " + valorB + " possuía o valor " + valorAnteriorb + " agora possuí o " + valoratualB)
 
/*trabalhando com strings*/
/*exercicio 1*/
let meuNome= "Willian";
length;
let comprimentoMeuNome= 7;
console.log("O meu nome possui " + comprimentoMeuNome + " caracteres de comprimento.")

/*exercicio 2*/
let preco= 15;
let precoFormatado= "R$0,00";
console.log("O valor " + preco + " formatado ficaria assim: " + precoFormatado)

/*exercicio 3*/
let cumprimento="Bom dia";
let nomE= "Willian";
let mensagemCumprimento= cumprimento + nomE; 
console.log( cumprimento + ", " + nomE)

/*praticando com variaveis*/
/*trabalho*/
/*exemplo*
let nomeCliente = prompt("Digite o nome do cliente");
let qtdPaes = parseInt(prompt("Quantas unidades de pães ?"));

let valorCompra = parseFloat(qtdPaes * 0.75);

alert(`Valor da compra é: ${valorCompra.toFixed(2)}`);

let data = Date.now();
let hoje = new Date(data).toUTCString();

alert(
`${nomeCliente} - Valor da compra: ${valorCompra} - Produto: Pães - Quantidade: ${qtdPaes} - Data: ${hoje} `
);*/

/*exercicio pratico*/
let precoDagasolina = 6.80;
let clienteAbasteceu = 13.60;
let litro = clienteAbasteceu/precoDagasolina;
console.log("O cliente abasteceu " + litro + "l")
alert("O cliente abasteceu " + litro + "l")

/*exercicio pratico 2*/
let grausC =22;
let F=(9 * grausC +160) / 5;

alert(`O valor ${grausC} °c em Fahrenheit é ${F}`)

/*exercicio pratico 3*/
let grausF =71.6;
let C = ((grausF - 32) * 5) / 9;

alert(`O valor ${grausF} °f em Celsios é ${C}`)

/*exercicio pratico 4*/
let alTura =6;
let larGura =12;
let comPrimento = 12;
let volume = alTura * larGura * comPrimento;
alert((`O volume é de: ${volume} m³`));
console.log("O volume é de: " + volume + "m³")

/*exercicio pratico 5*/
let numeroInteiro = 12;
let numroaoQuadrado = 144;
alert(`O valor ${numeroInteiro} ao quadrado é ${numroaoQuadrado}`)

/*exercicio pratico 6*/
let notaA = 5;
let notaB = 2;
let notaC = 4;
let notaD = 9;
let notaE = 10;
let notatotal = notaA + notaB + notaC + notaD + notaE;
let Ma = (notaA + notaB + notaC + notaD + notaE) / 5;
alert(`A soma dos valores informados é: ${notatotal} e a média das notas ${Ma}`)

/*exercicio pratico 7*/
let valor1 = 11;
let valor2 = 2;
let valorResultado = valor1 / valor2;
alert(`O resto da divisão de ${valor1} por ${valor2} é: ${valorResultado}`)

/*exercicio pratico 8*/
let texto1 =('pneumoultramicroscopicossilicovulcanoconiótico')
alert(`Esse texto tem ${texto1.length} caracteres`)

/*exercicio pratico 9*/
let frase = ("pneumoultramicroscopicossilicovulcanoconiótico");
let fraseA = (frase[0].toUpperCase())
let fraseB = ( frase[45].toLowerCase());
alert(`A primeira letra desete texto é o ${fraseA} e última é ${fraseB}`);

/*exercicio pratico 10*/
let nome = "geraldo";
let sobrenome = "luiz";
let idadE = 32;
let setor = "Produção";
let nomedoCrachá = (nome.toUpperCase() + " " + sobrenome.toUpperCase())
alert(`nome: ${nomedoCrachá} - idade: ${idadE} - setor: ${setor}`);