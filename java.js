function show_hello(){
    alert("wellcome codegym.")
}    
function hinhchunhat() {
    var dai = parseInt( document.forms["hinhchunhatform"]["dai"].value);
    var rong = parseInt( document.forms["hinhchunhatform"]["rong"].value);
    var dientich= dai * rong;
    document.getElementById("dientich").innerHTML=dientich;
}