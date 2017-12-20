document.getElementById('change-password').addEventListener('click', function (event) {
    event.preventDefault();

    var password = document.forms['myForm']['password'].value;
    var secondPassword = document.forms['myForm']['second-password'].value;

    if(password.trim() == ''){
        document.forms['myForm']['password'].value = '';
        document.forms['myForm']['second-password'].value = '';
        alert('neivestas slaptazodis');
        return;
    }

    if(secondPassword.trim() == ''){
        document.forms['myForm']['password'].value = '';
        document.forms['myForm']['second-password'].value = '';
        alert('neivestas pakartotinasslaptazodis');
        return;
    }

    if(password == secondPassword){
        document.forms['myForm']['password'].value = '';
        document.forms['myForm']['second-password'].value = '';
        alert('slaptazodis keiciamas...');

    }else{
        document.forms['myForm']['password'].value = '';
        document.forms['myForm']['second-password'].value = '';
        alert('slaptazodis nesutampa');
    }

});