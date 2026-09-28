const idadeVotante = 19;

if (idadeVotante < 16) {
    console.log("Não vota");
} else if ((idadeVotante >= 16 && idadeVotante <= 17) || idadeVotante > 70) {
    console.log("Voto opcional");
} else {
    console.log("Voto obrigatório");
}
