"use strict";
//primo passo

const students = [
    {
        id: "213",
        name: "Marco Della Rovere",
        grades: "78"
    },
    {
        id: "110",
        name: "Paola Cortellessa",
        grades: "96"
    },
    {
        id: "250",
        name: "Andrea Mantegna",
        grades: "48"
    },
    {
        id: "145",
        name: "Gaia Borromini",
        grades: "74"
    },
    {
        id: "196",
        name: "Luigi Grimaldello",
        grades: "68"
    },
    {
        id: "102",
        name: "Piero della Fracesca",
        grades: "50"
    },
    {
        id: "120",
        name: "Francesca da Polenta",
        grades: "84"
    }
]
//Lista Caps Lock

//Strada 1
/*for (let i = 0; i < students.length; i++) {
    const targa = students[i];
    /*console.log(targa);*/

    /*const targaNome = targa.name.toUpperCase();
    console.log(targaNome);
};*/

//Strada 2

const targheStudenti = [];

students.forEach((studente) => {
    /*console.log(studente.name.toUpperCase())*/
    targheStudenti.push(studente.name.toUpperCase())

});
console.log(targheStudenti)

//Secondo passo: Lista voti 70+

//Strada 1

/*for (let i = 0; i < students.length; i++) {
    const gradesValue = students[i];
    /*console.log(targa);*/

    /*const goodStudents = gradesValue.grades >= 70
    /*console.log(goodStudents);*/

    /*if (goodStudents == true ){
        console.log(gradesValue.name)
    }*/

    //Terzo passo

    /*const selectedStudents = gradesValue.id > 120;
    if (goodStudents == true && selectedStudents == true){
        console.log(gradesValue.name)
    }
};*/

/*const goodStudents = students[i].map(() => {
    return valori.id >= 70;
})
console.log(goodStudents)*/

//Strada 2 per il punto 2

const studentiTop= [];

students.forEach (function(studente){
   /*console.log(studente.grades);
    console.log(studente.name);*/
    
    if (studente.grades > 70){
        studentiTop.push(studente.name)
    }
});

console.log(studentiTop);

//Strada 2 per il punto 3

const studentiSelezionati= [];

students.forEach (function(studente){
   /*console.log(studente.grades);
    console.log(studente.name);*/
    
    if (studente.grades > 70 && studente.id > 120){
        studentiSelezionati.push(studente.name)
    }
});

console.log(studentiSelezionati);
