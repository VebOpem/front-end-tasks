//all buttons 
const all = document.getElementById("all")
const bigeomat = document.getElementById("BIGEOMAT")
const bwu = document.getElementById("BWU")
const årweb = document.getElementById("ÅRWEB")
const bixd = document.getElementById("BIXD")

//The JSON array as a var (i know, i know... i could not find a way to find a way to filter the key values)
var arr = [
    { "fornavn": "Marcus Gimse", "etternavn": "Blikstad", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Jose David", "etternavn": "Diaz Gonzalez", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Krzysztof Andrzej", "etternavn": "Jedrusik", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Erik Vågå", "etternavn": "Klæbo", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Aron", "etternavn": "Landgraff", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Embrik", "etternavn": "Lappegård", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Lena", "etternavn": "Mohaugen", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Kasper Jensen", "etternavn": "Nordeng-Lyberg", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Thor Munch", "etternavn": "Rein", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Jan Inge", "etternavn": "Skoknes", "studieprogram": "Bachelor in Engineering, Geomatics", "forkortelse": "BIGEOMAT"},
    { "fornavn": "Marius Skaten", "etternavn": "Aarbakke", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Lena", "etternavn": "Amdal-Larsen", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Ingunn Hatlehol", "etternavn": "Andreassen", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Knut Standal", "etternavn": "Anly", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Lena Hammer", "etternavn": "Antonsen", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Malcolm", "etternavn": "Appiah", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Leonard", "etternavn": "Avdullahu", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Egor", "etternavn": "Bedunkevich", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Simen Tokerød", "etternavn": "Bergo", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Vilde Gunnes", "etternavn": "Bertelsen", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Robin André", "etternavn": "Bolstad", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Even", "etternavn": "Brujordet", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Marius Kvernmo", "etternavn": "Brunvoll", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Piotr Tomasz", "etternavn": "Bylica", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Emil", "etternavn": "Bøen", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Ida Maria Rukke", "etternavn": "Gjeitsund", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Johanne Gustava", "etternavn": "Glimsdal", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Lene", "etternavn": "Gulberg", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Katina Elise Lamb", "etternavn": "Gundersen", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Glenn Eirik", "etternavn": "Hansen", "studieprogram": "Bachelor in Web Development", "forkortelse": "BWU"},
    { "fornavn": "Sigurd", "etternavn": "Hegland", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Tiril", "etternavn": "Hongshagen", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Malin", "etternavn": "Kaashagen", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    { "fornavn": "Ahmad Nariman", "etternavn": "Karim", "studieprogram": "Web Design - One-year programme", "forkortelse": "ÅRWEB"},
    {"fornavn": "Einar Horsberg","etternavn": "Kornstad","studieprogram": "Web Design - One-year programme","forkortelse": "ÅRWEB"},
    {"fornavn": "Ann Margit","etternavn": "Krog","studieprogram": "Web Design - One-year programme","forkortelse": "ÅRWEB"},
    {"fornavn": "Tran Ai","etternavn": "Ly","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Gabriel","etternavn": "Marques","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Andreas","etternavn": "Mella","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Steinar Hjelle","etternavn": "Midthus","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Abdirahman Ahmed","etternavn": "Mohamed","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Mohammed Saied Mohammed","etternavn": "Mokhtar","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Alexander Hunde","etternavn": "Myrvold","studieprogram": "Web Design - One-year programme","forkortelse": "ÅRWEB"},
    {"fornavn": "Simon Alexander","etternavn": "Oppegård","studieprogram": "Web Design - One-year programme","forkortelse": "ÅRWEB"},
    {"fornavn": "Michelle Carina","etternavn": "Osnes","studieprogram": "Interaction Design - Bachelor's Programme","forkortelse": "BIXD"},
    {"fornavn": "Magnus","etternavn": "Paulsen","studieprogram": "Interaction Design - Bachelor's Programme","forkortelse": "BIXD"},
    {"fornavn": "Sean Leonardo","etternavn": "Rohdin-Tvedt","studieprogram": "Web Design - One-year programme","forkortelse": "ÅRWEB"},
    {"fornavn": "Cornelius Ottar","etternavn": "Sandmæl","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Tom","etternavn": "Schrier","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Hanne Børresen","etternavn": "Simenrud","studieprogram": "Web Design - One-year programme","forkortelse": "ÅRWEB"},
    {"fornavn": "Jon Helge","etternavn": "Skjærstein","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Sandra Kristiansen","etternavn": "Smaaberg","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Pål Syvertsen","etternavn": "Stakvik","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Ragni","etternavn": "Støen","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Kristian","etternavn": "Teppan","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Jostein Ødegårdstuen","etternavn": "Tollefsrud","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Ida Therese Hongset","etternavn": "Trøan","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Simen Munch","etternavn": "Wahl","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Håkon","etternavn": "Westby","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Christoffer","etternavn": "Yvoll","studieprogram": "Bachelor in Web Development","forkortelse": "BWU"},
    {"fornavn": "Gabriel","etternavn": "Zouad","studieprogram": "Web Design - One-year programme","forkortelse": "ÅRWEB"}
  ]
//The filters
var resultsBwu = arr.filter(function(obj) {
    return obj.forkortelse === "BWU";
});
var resultsBigeomat = arr.filter(function(obj) {
    return obj.forkortelse === "BIGEOMAT";
});
var resultsÅrweb = arr.filter(function(obj) {
    return obj.forkortelse === "ÅRWEB";
});
var resultsBixd = arr.filter(function(obj) {
    return obj.forkortelse === "BIXD";
});


//Show all: display all the students
all.onclick = function() {
    fetch('studenter.json').then(function (response){
    return response.json();
    })
    .then(function (obj) {
        console.log(obj)
    obj.forEach(element => {
        let student = document.createElement("LI");
        student.innerHTML = `Fornavn: ${element.fornavn} <br>
                             Etternavn: ${element.etternavn} <br>
                             Studieprogram: ${element.studieprogram} <br> 
                             Forkortelse: ${element.forkortelse} <br> ---`;
        let list = document.getElementsByClassName("studenter")[0];
        list.appendChild(student);
        });
    });
};
bwu.addEventListener('click', function() {
    console.log(resultsBwu)
    resultsBwu.forEach(element =>{
        let student = document.createElement("LI");
        student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br> 
                                     Studieprogram: ${element.studieprogram} <br> 
                                     Forkortelse: ${element.forkortelse} <br> ---`;
        let list = document.getElementsByClassName("studenter")[0];
        list.appendChild(student);
    })
});
årweb.addEventListener('click', function() {
    console.log(resultsÅrweb)
    resultsÅrweb.forEach(element =>{
        let student = document.createElement("LI");
        student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br> 
                                     Studieprogram: ${element.studieprogram} <br> 
                                     Forkortelse: ${element.forkortelse} <br> ---`;
        let list = document.getElementsByClassName("studenter")[0];
        list.appendChild(student);
    })
});
bixd.addEventListener('click', function() {
    console.log(resultsBixd)
    resultsBixd.forEach(element =>{
        let student = document.createElement("LI");
        student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br> 
                                     Studieprogram: ${element.studieprogram} <br> 
                                     Forkortelse: ${element.forkortelse} <br> ---`;
        let list = document.getElementsByClassName("studenter")[0];
        list.appendChild(student);
    })
});
bigeomat.addEventListener('click', function() {
    console.log(resultsBigeomat)
    resultsBigeomat.forEach(element =>{
        let student = document.createElement("LI");
        student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br> 
                                     Studieprogram: ${element.studieprogram} <br> 
                                     Forkortelse: ${element.forkortelse} <br> ---`;
        let list = document.getElementsByClassName("studenter")[0];
        list.appendChild(student);
    })
});

    