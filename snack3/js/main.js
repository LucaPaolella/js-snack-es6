"use strict";

const listaBici = [
    {
        nome: "rossa",
        pesoInKg: 5
    },
    {
        nome: "verde",
        pesoInKg: 4
    },
    {
        nome: "gialla",
        pesoInKg: 8
    }
];

//console.log(listaBici)


//const pesoBici = listaBici.map((element) => {
    //console.log(element.pesoInKg);
    /*return element.pesoInKg;
});
console.log(pesoBici)

console.log(Math.min(...pesoBici));

console.log(`${Math.min(...pesoBici)}`)*/

//Altra strada dopo la lezione 

if (listaBici.length === 0){
    console.log (`Non ho bici`);
}
else {
    let theBike = listaBici [0];
    console.log(theBike)

    for (let i=1; i<listaBici.length;i++){
        const currentBike = listaBici[i];

        if(currentBike.pesoInKg < theBike.pesoInKg){
            theBike= currentBike
        }
        console.log(currentBike)
    }
    const {nome, pesoInKg} = theBike
    console.log(`La bici più leggera è la bici ${nome} che pesa ${pesoInKg} kg`)
}


