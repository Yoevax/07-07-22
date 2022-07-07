today = new Date(); //date d'ojd

today2 = Date.now(); // date d'ojd en timestamp

const d1 = new Date(2021, 2, 10); // 10 mars (index 2 donc 3 element des mois) 2021

const d3 = new Date("21-02-2021"); // va transfo le string en date

today.getDay(); //recup le jour ici "4" car on est jeudi

today.getMonth(); // recup le mois donc ici "6" (index attention pas 7)

today.getFullYear(); //recup l'année ici 2022
