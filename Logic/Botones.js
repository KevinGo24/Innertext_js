 let Text = document.getElementById("master_boton");

    let Text_1 = false;

function Evento() {

    if (Text_1 == false) {
        Text.innerText = "Que haremos el dia de hoy";
        Text_1 = true;
    } else {
        Text.innerText = "Bienvenidos sean";
        Text_1 = false;
    }


}

