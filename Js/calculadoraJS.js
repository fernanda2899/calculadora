function suma (n1, n2){
    var n1=parseFloat(document.getElementById('N1').value);
    var n2=parseFloat(document.getElementById('N2').value);
    var result =n1+n2;

document.getElementById('resultado').value = result;

}

function resta (n1, n2){
    var n1=parseFloat(document.getElementById('N1').value);
    var n2=parseFloat(document.getElementById('N2').value);
    var result =n1-n2;

document.getElementById('resultado').value = result;

}
function division  (n1, n2){
    var n1=parseFloat(document.getElementById('N1').value);
    var n2=parseFloat(document.getElementById('N2').value);
    var result =n1/n2;

document.getElementById('resultado').value = result;

}


function multiplicacion (n1, n2){
    var n1=parseFloat(document.getElementById('N1').value);
    var n2=parseFloat(document.getElementById('N2').value);
    var result =n1*n2;

document.getElementById('resultado').value = result;

}


