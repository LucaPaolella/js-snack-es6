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
    //console.log(element.punti);
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



