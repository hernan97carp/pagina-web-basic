function viajar(destino){
if( destino === "Argentina" || destino === "argentina"){
    console.log("gire ala izquierda");
}
else if( destino === "Brazil"|| destino === "brazil"  ){
    console.log("gire ala derecha");
}
else {console.log("NOS PERDIMOS")};

}

viajar("argentina");

function puedeManejar(edad){
    if(edad >= 18){
        console.log("Puede manejar")
    }
    else { console.log("No puede manejar")}
}
puedeManejar(1);