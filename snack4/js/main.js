"use strict";

//step 1 e 2

const team = [
    {
        nome : "Tivoli",
        punti : 0,
        falli : 0
    },
    {
        nome : "Villa Adriana",
        punti : 0,
        falli : 0
    },
    {
        nome : "Villanova",
        punti : 0,
        falli : 0
    },
    {
        nome : "Castel Madama",
        punti : 0,
        falli : 0
    },
]

console.log(team)
//Step 3 Randomizzo falli e punti
/*const puntiTeamZero = team.map((element) => {
    console.log(element.punti);
    const zeroPunti=element.punti;
    return zeroPunti
});
console.log(puntiTeamZero);

const falliTeamZero = team.map((element) => {
    console.log(element.falli);
    const zeroFalli=element.falli;
    return  zeroFalli
});
console.log(falliTeamZero)*/

const randomPunti = team.map((element) => {
    //console.log(element.punti);
    const zeroPunti =element.punti;
    let unPoDiPunti = "";

    if (zeroPunti === 0){
      let unPoDiPunti =  Math.floor(Math.random() * 100);
      console.log(unPoDiPunti)
      return unPoDiPunti
    }

    return unPoDiPunti
});
console.log(randomPunti);

const randomFalli = team.map((element) => {

    const zeroFalli =element.falli;
    let unPoDiFalli = "";

    if (zeroFalli === 0){
      let unPoDiFalli =  Math.floor(Math.random() * 100);
      console.log(unPoDiFalli)
      return unPoDiFalli
    }

    return unPoDiFalli
});
console.log(randomFalli);

//step4. Nuovo Array 

//Prima estrapolo i nomi dei team 
const nomiTeam = team.map((element) => {
    const tuttiNomi =element.nome;
    console.log(tuttiNomi)

    return tuttiNomi
});
console.log(nomiTeam)

/*nomiTeam.push(randomFalli[0],randomFalli[1],randomFalli[2],randomFalli[3] )
console.log(nomiTeam)*/

//Poi randomizzo nomi e falli
console.log("Nome squadra:", nomiTeam[0], "Falli subiti:", randomFalli[0] );
console.log("Nome squadra:", nomiTeam[1], "Falli subiti:", randomFalli[1] );
console.log("Nome squadra:", nomiTeam[2], "Falli subiti:", randomFalli[2] );
console.log("Nome squadra:", nomiTeam[3], "Falli subiti:", randomFalli[3] );

