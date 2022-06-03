//Somatório 

function somatorio(numeros){
    let soma = 0;

    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    
    return soma;
}

//Primo

function primo(numero){
    let cont = 0;

    for (let i=1; i<=numero; i++){
        if (numero%i == 0){
            cont ++;
        }
    }

    return cont == 2;
}

//Fibonacci
    
function fibo(n){
    
    let termo1 = 0;
    let termo2 = 1;
    let termo3;

   // document.write(termo1 + ", " + termo2);

   let elementos = [termo1, termo2]

    for (i = 1; i <= n; i++)
    {
        termo3 = termo1 + termo2;
        //document.write(", " + termo3);
        elementos.push(termo3)
        termo1 = termo2;
        termo2 = termo3;
    }

    return elementos
}



// //MDC
function mdc(num1,num2){

        //let num1 =          //parseInt(prompt("Digite o primeiro número:"));
        //let num2 =          //parseInt(prompt("Digite o segundo número:"));
        let aux;

        if(num2 > num1){            
            //document.write("O MDC de "+num2+" e "+num1+" é: ")            
            aux = num1;
            num1 = num2;
            num2 = aux;
        }else{
            //document.write("O MDC de "+num1+" e "+num2+" é: ")                
        }    
        while (num2 != 0){
            let mod = num1%num2;
            num1 = num2;
            num2 = mod;
        }
        //document.write(num1);

}
module.exports = {somatorio, primo, fibo, mdc}    
// //Inversão


// let numero = prompt("Informe um número inteiro positivo:");

// let invertido = 0;
// let digito;
// let q = numero;

// while (q > 0)
// {
// digito = q % 10;
// invertido = invertido * 10 + digito;
// q = Math.floor(q / 10);
// }

// document.write("Número original: " + numero + "<br>");
// document.write("Número invertido: " + invertido);

// //Contagem

// let n = prompt("Informe a quantidade notas:");
// let nota;
// let contador = 0;
// let i = 0;

// while (i < n) {
// nota = prompt("Informe uma nota");

// if (nota >= 50) {
//     contador = contador + 1;
// }

// i = i + 1;
// }

// document.write("Número de alunos que passaram no exame: " + contador);