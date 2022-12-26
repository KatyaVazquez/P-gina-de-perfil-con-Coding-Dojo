console.log("page loaded...");
 
function change(){
    username.innerText = "Katya V";
}

function hide(element) {
    element.remove();
}




var counterVal = 500;

function Click() {
    date(++counterVal);
}

function date(val) {
   document.getElementById("valor").innerHTML = val;
}


var counterVal2 = 500;

function incrementClick2() {
    date2(++counterVal2);
}

function date2(val) {
   document.getElementById("valor").innerHTML = val;
}

