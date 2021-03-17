fetch('studenter.json')
    .then(function (response){
        return response.json();
    })
    .then(function (obj) {
        obj.forEach(element => {
            let student = document.createElement("LI");
            student.innerHTML = `Fornavn: ${element.fornavn} <br> Etternavn: ${element.etternavn} <br> Studieprogram: ${element.studieprogram} <br> Forkortelse: ${element.forkortelse} <br> --`;
            let list = document.getElementsByClassName("studenter")[0];
            list.appendChild(student);
        });
    });

fetch('./studenter.json')
    .then(response => response.json())
    .then(data => console.log(data));