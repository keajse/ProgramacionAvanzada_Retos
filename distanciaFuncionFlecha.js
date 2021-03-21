console.log("Función Flecha")

let calcularDistanciaFlecha = (x1,x2,y1,y2)=> Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

console.log("La distancia es: " + calcularDistanciaFlecha(0,70,0,-50));
console.log("La distancia es: " + calcularDistanciaFlecha(0,0,0,40));
console.log("La distancia es: " + calcularDistanciaFlecha(0,-10,0,-10));
console.log("La distancia es: " + calcularDistanciaFlecha(0,50,0,0));