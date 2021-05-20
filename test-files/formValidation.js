function validateForm() {
    var fn = document.forms['myForm'] ['FistName'].value;
    var ln =document.forms['myForm'] ['LastName'].vaule;
    var a = document.forms['myForm'] ['Age'].value;
    var numb = document.forms['myForm'] ['Mobile'].value;
    if (fn == null || fn == "") {
        alert("Fist Name can not be empty");
        document.getElementById('fn').focus();
        return false;
    };
    if (ln == null || fn == "") {
        alert("Last Name can not be empty");
        document.getElementById('ln').focus();
        return false
    };
    if (a == null || a == "") {
        alert("Age field can not be empty");
        document.getElementById('age').focus();
        return false;
    }
    else if (parseInt (a) < 13 || parseInt (a) > 85 ) {
        alert("Age must be between 13 and 85");
        document.getElementById('age').focus();
        return false;
    };
    if (numb.length != 7) {
        alert("Phone number bust be 7 digits");
        document.getElementById('num').focus();
        return false;
    }
}
