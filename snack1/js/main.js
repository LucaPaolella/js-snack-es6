"use strict";

const ospiti = [
    {
        nome : "Brad Pitt",
        numPosto : "1",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Johnny Depp",
        numPosto : "2",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Lady Gaga",
        numPosto : "3",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Cristiano Ronaldo",
        numPosto : "4",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Georgina Rodriguez",
        numPosto : "5",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Chiara Ferragni",
        numPosto : "6",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Fedez",
        numPosto : "7",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Gerorge Cloonney",
        numPosto : "8",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Amal Clooney",
        numPosto : "9",
        Tavolo : "Tavolo Vip"
    },
    {
        nome : "Maneskin",
        numPosto : "10",
        Tavolo : "Tavolo Vip"
    }
]

ospiti.forEach(element => {
    console.log(`Il nome dell'ospite è: ${element.nome}.`,
    `Siederà nel posto numero: ${element.numPosto}.`,
    `Il tavolo a lui assegnato è: ${element.Tavolo}.`)
});
