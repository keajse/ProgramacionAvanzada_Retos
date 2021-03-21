//Función Flecha

let robarPlanos=(idPlano,despegar)=>{
    if (idPlano > 0 && idPlano < 11){
        let mensaje = `El plano que se conseguió fue el ${idPlano}`;
        despegar(null, mensaje);
        
    }else{
        let error = `Pilas! No se ha robado un plano real `;
        despegar(error, null);
    }
}

robarPlanos(5,despegar=(error, mensajeOk)=>{

    if(error){
        console.log(error);
        console.log("No despegar")
    }else{
        console.log(mensajeOk);
        console.log("Estamos despegando");
    }    
});
