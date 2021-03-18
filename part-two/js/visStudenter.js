fetch('studenter.json')
    .then(res => res.json()
        .then(data => {
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