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


const pesoBici = listaBici.map((element) => {
    //console.log(element.pesoInKg);
    return element.pesoInKg;
});
console.log(pesoBici)

console.log(Math.min(...pesoBici));

console.log(`${Math.min(...pesoBici)}`)


