function store() {
    let storeName = document.getElementById('userName').value;
    localStorage.setItem('name', storeName);
}

function retrieve() {
    let getName = localStorage.getItem('name'); 
    document.getElementById('disp').value = getName;

}
function deleteName() {
    localStorage.removeItem('name');
    document.getElementById('disp').value = "";
}