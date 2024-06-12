var outarea = document.getElementById("output-area");


function abc(args){
    outarea.innerText = outarea.innerText+=args;
}

function blank(){
    outarea.innerText = " ";
}

function calculate() {
    var p = outarea.innerText;
    var q = eval(p);
    outarea.innerText = q; 
}
   