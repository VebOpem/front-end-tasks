//all buttons shortened 
const all = document.getElementById("all");
const bigeomat = document.getElementById("BIGEOMAT");
const bwu = document.getElementById("BWU");
const årweb = document.getElementById("ÅRWEB");
const bixd = document.getElementById("BIXD");


//Show all: display all the students
all.addEventListener('click', function () {
    //Remove all content in ul class="studenter"
    document.querySelector("ul.studenter")
        .innerHTML = "";
    //Fetch the JSON file
    fetch('studenter.json')
        .then(res => res.json()
            .then(data => {
                console.log(data);
                //filling the ul with LI elements 
                data.forEach(element => {
                    let student = document.createElement("LI");
                    student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br> 
                                     Studieprogram: ${element.studieprogram} <br> 
                                     Forkortelse: ${element.forkortelse} <br> ----`;
                    let list = document.getElementsByClassName("studenter")[0];
                    list.appendChild(student);
                });
            })
        );
});

//Show just students in BWU when button is clicked
bwu.addEventListener('click', function () {
    //Remove all content in ul class="studenter"
    document.querySelector("ul.studenter")
        .innerHTML = "";
    //Fetch the JSON data
    fetch('studenter.json')
        .then(res => res.json()
            .then(data => {
                //Filter the students which has the key matching BWU
                var filteredData = data.filter((x) =>
                    x.forkortelse === "BWU");
                //changes data to filteredData in the prosess
                console.log(filteredData);
                filteredData.forEach(element => {
                    //filling the ul with LI elements 
                    let student = document.createElement("LI");
                    student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                         Etternavn: ${element.etternavn} <br> 
                                         Studieprogram: ${element.studieprogram} <br> 
                                         Forkortelse: ${element.forkortelse} <br> -----`;
                    let list = document.getElementsByClassName("studenter")[0];
                    list.appendChild(student);
                });
            })
        );
});

//Show just students in BIGEOMAT when button is clicked
bigeomat.addEventListener('click', function () {
    //Remove all content in ul class="studenter"
    document.querySelector("ul.studenter")
        .innerHTML = "";
    //Fetch the JSON data
    fetch('studenter.json')
        .then(res => res.json()
            .then(data => {
                //Filter the students which has the key matching BIGEOMAT
                var filteredData = data.filter((x) =>
                    x.forkortelse === "BIGEOMAT");
                //changes data to filteredData in the prosess
                console.log(filteredData);
                filteredData.forEach(element => {
                    //filling the ul with LI elements 
                    let student = document.createElement("LI");
                    student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                         Etternavn: ${element.etternavn} <br> 
                                         Studieprogram: ${element.studieprogram} <br> 
                                         Forkortelse: ${element.forkortelse} <br> ----`;
                    let list = document.getElementsByClassName("studenter")[0];
                    list.appendChild(student);
                });
            })
        );
});

//Show just students in ÅRWEB when button is clicked
årweb.addEventListener('click', function () {
    //Remove all content in ul class="studenter"
    document.querySelector("ul.studenter")
        .innerHTML = "";
    //Fetch the JSON data
    fetch('studenter.json')
        .then(res => res.json()
            .then(data => {
                //Filter the students which has the key matching ÅRWEB
                var filteredData = data.filter((x) =>
                    x.forkortelse === "ÅRWEB");
                //changes data to filteredData in the prosess
                console.log(filteredData);
                filteredData.forEach(element => {
                    //filling the ul with LI elements 
                    let student = document.createElement("LI");
                    student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br> 
                                     Studieprogram: ${element.studieprogram} <br> 
                                     Forkortelse: ${element.forkortelse} <br> ----`;
                    let list = document.getElementsByClassName("studenter")[0];
                    list.appendChild(student);
                });
            })
        );
});

//Show just students in BIXD when button is clicked
bixd.addEventListener('click', function () {
    //Remove all content in ul class="studenter"
    document.querySelector("ul.studenter")
        .innerHTML = "";
    //Fetch the JSON data
    fetch('studenter.json')
        .then(res => res.json()
            .then(data => {
                //Filter the students which has the key matching BIXD
                var filteredData = data.filter((x) =>
                    x.forkortelse === "BIXD");
                //changes data to filteredData in the prosess
                console.log(filteredData);
                filteredData.forEach(element => {
                    //filling the ul with LI elements 
                    let student = document.createElement("LI");
                    student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br> 
                                     Studieprogram: ${element.studieprogram} <br> 
                                     Forkortelse: ${element.forkortelse} <br> ----`;
                    let list = document.getElementsByClassName("studenter")[0];
                    list.appendChild(student);
                });
            })
        );
});

