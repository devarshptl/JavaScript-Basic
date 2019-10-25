let state = Array("Gujarat", "Kerala", "Jammu");
let dom_state = document.getElementById("state");

let city = {
    "Gujarat" : Array("Ahmedabad", "Surat", "Rajkot"),
    "Kerala" : Array("Thiru", "Challa"),
    "Jammu" : Array("Katra", "Srinagar", "Vaishnodevi")
}
let dom_city = document.getElementById("city");

for(i = 0; i<state.length ; i++){
    let opt = document.createElement("option");
    opt.appendChild(document.createTextNode(state[i]));
    opt.value = state[i];
    dom_state.appendChild(opt);  
}

function onChange() {
    let temp_state = dom_state.value;
    let value1 = city[temp_state];
    for ( i=dom_city.options.length - 1; i>0 ; i--){
        dom_city.remove(i);
    }
    for( i=0; i<value1.length ; i++){
        let opt = document.createElement("option");
        opt.appendChild(document.createTextNode(value1[i]));
        opt.value = value1[i];
        dom_city.appendChild(opt);
    }
}
