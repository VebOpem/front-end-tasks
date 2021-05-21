console.log('linked register')
const users = [];

document.querySelector('#button').addEventListener('click', e=>{
    const user = new Update(e.target.form.name.value, 
                            e.target.form.age.value, 
                            e.target.form.email.value, 
                            e.target.form.number.value); 
    if(e.target.form.idx.value == "") {
        users.push(user);
    } else {
        users[e.target.form.idx.value*1] = user;
        e.target.form.idx.value = '';
    }
    addUser()
});

function addUser() {
    const userList = document.querySelector('ul.users');
    userList.innerHTML= '';

    users.forEach((user, idx)  => {
        const li = document.createElement('LI');
        li.innerHTML = user;
        li.setAttribute('data.idx', idx);
        userList.appendChild()
        alert('User added');
    });
}
function clearForm() {
    const form = document.querySelector('form');
    form.idx.value = ""
    form.name.value = ""
    form.age.value = ""
    form.email.value = "";
    form.number.value = "";
}

const userList = document.querySelector('ul.users');
userList.addEventListener('click', e => {
    console.log(e)
    const idx = e.path[0].dataset.idx*1;
    const user = users[idx];
    const form = document.querySelector('form');
    form.idx.value = idx;
    form.name.value = user.name;
    form.age.value = user.age;
    form.email.value = user.email;
    form.number.value = user.number;
})