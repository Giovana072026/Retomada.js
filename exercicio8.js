function VerificarSituacao (nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        return "Média: " + media.toFixed(1) + " - Aprovado";
    } else if (media >= 5) {
        return "Média: " + media.toFixed(1) + " - Recuperação";
    } else {
        return "Média: " + media.toFixed(1) + " - Reprovado";
    }  

 }

 console.log(VerificarSituacao(8, 7.5, 9));
  console.log(VerificarSituacao(6, 5, 5.5));
   console.log(VerificarSituacao(4, 3, 2));