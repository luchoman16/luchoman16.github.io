function mostrarCarta(){
 estados = document.getElementById('estados').value;
if(estados === "Feliz"){
        document.getElementById('carta1').style.display = "flex";
        document.getElementById('carta2').style.display = "none";
        document.getElementById('carta3').style.display = "none";
        document.getElementById('carta4').style.display = "none";
    }else if (estados === "Triste"){
        document.getElementById('carta1').style.display = "none";
        document.getElementById('carta2').style.display = "flex";
        document.getElementById('carta3').style.display = "none";
        document.getElementById('carta4').style.display = "none";
    }else if (estados === "Enojada"){
        document.getElementById('carta1').style.display = "none";
        document.getElementById('carta2').style.display = "none";
        document.getElementById('carta3').style.display = "flex";
        document.getElementById('carta4').style.display = "none";
    }else if (estados === "Preocupada"){
        document.getElementById('carta1').style.display = "none";
        document.getElementById('carta2').style.display = "none";
        document.getElementById('carta3').style.display = "none";
        document.getElementById('carta4').style.display = "flex";
    }

}

