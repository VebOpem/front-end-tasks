
//create array
const contacts = [];

// eventlistener 
document.querySelector('button').addEventListener('click', e => {
    // create new contact based on the information in the form
    const contact = new Contact(
        e.target.form.fistName.value,
        e.target.form.lastName.value,
        e.target.form.tlf.value,
        e.target.form.email.value);
    // Conditional for adding contact into the array if empty
    if (e.target.form.idx.value == "") {
        contacts.push(contact);
    } else {
        contacts[e.target.form.idx.value * 1] = contacts;
        e.target.form.idx.value = '';
    }
    addContact();
})

// function to add contacts
function addContact() {
    // identify where to add contact
    const contactList = document.querySelector('ul.contacts');
    contactList.innerHTML = '';
    // foreach for the array
    contacts.forEach((contact, idx) => {
        const li = document.createElement('LI');
        li.innerHTML = contact;
        li.setAttribute('data-idx');
        contactList.appendChild(li);
        alert("Contact added");
    })
}

function clearForm() {
    const form = document.querySelector('form');
    form.idx.value = ""
    form.fistName.value = "";
    form.lastName.value = "";
    form.tlf.value = "";
    form.email.value = "";
}
const contactList = document.querySelector("ul.contacts")
contactList.addEventListener('click', e => {
    const idx = e.path[0].dataset.idx * 1;
    const contact = contacts[idx];
    const form = document.querySelector('form');
    form.idx.value = idx
    form.fistName.value = contact.fistName;
    form.lastName.value = contact.lastName;
    form.tlf.value = contact.tlf;
    form.email.value = contact.email;
})
