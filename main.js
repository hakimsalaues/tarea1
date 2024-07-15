function simuladorCompras(){
    const secciones = {
        "Alimentos":[
            {nombre: "Manzana", precio: 0.50},
            {nombre: "Banana", precio: 0.30},
            {nombre: "Naranja", precio: 0.60},
            {nombre: "Pera", precio: 0.80},
            {nombre: "Mango", precio: 1.00},
        ],
        "Electrodomesticos":[
            {nombre: "Licuadora", precio: 50.50},
            {nombre: "Refrigerador", precio: 400.00},
            {nombre: "Lavadora", precio: 250.00},
            {nombre: "Microondas", precio: 150.00},
            {nombre: "Aspiradora", precio: 180.00},
        ],
        "Limpieza":[
            {nombre: "Desinfectante", precio: 10.00},
            {nombre: "Detergente", precio: 20.50},
            {nombre: "Suavizante", precio: 15.00},
            {nombre: "Jabon", precio: 5.00},
            {nombre: "Limpiavidrios", precio: 10.00},
        ],
        "Carnes":[
            {nombre: "Pescado", precio: 12.00}, 
            {nombre: "pollo", precio: 5.00},
            {nombre: "Cerdo", precio: 7.00}, 
            {nombre: "Vaca", precio: 10.00},
            {nombre: "Cordero", precio: 15.00},
        ],

    };


    let productosEscogidos =[];
    let total= 0;

    function seleccionarProducto(seccion){
        const productos = secciones[seccion];
        let listaProductos = `seccion: ${seccion}\n`;
        for (let i=0; i < productos.length; i++){
            listaProductos += `${i+1}. ${productos[i].nombre} - $${productos[i].precio.toFixed(2)}\n`
        }

        listaProductos += '\nEscoge un producto(1-5):';

        let eleccion = parseInt(prompt(listaProductos));
        if(isNaN(eleccion) || eleccion < 1 || eleccion >5){
            alert("por favor , introduce un numero valido entre 1y 5. ");
            return;
        }

        let productosEscogido = productos[eleccion - 1];
        productosEscogidos.push(productosEscogido);
        total += productosEscogido.precio;
    }

    function navegarSecciones(){
        const seccionesNombres = Object.keys(secciones);
        let listaSecciones = "Selecciona una seccion;\n";
        for (let i = 0; i < seccionesNombres.length; i++){
            listaSecciones += `${i + 1}. ${seccionesNombres[i]}\n`;
        }
        listaSecciones += "\nItroduce el numero de la seccion:";

        let eleccionSeccion = parseInt(prompt(listaSecciones));
        if (isNaN(eleccionSeccion)|| eleccionSeccion < 1 || eleccionSeccion > seccionesNombres.length){
            alert("por favor, introduce un numero valido para la seccion.");
            return;
        }

        let seccionSeleccionada = seccionesNombres[eleccionSeccion - 1];
        seleccionarProducto(seccionSeleccionada);
    }

    do {
        navegarSecciones();
    } while(confirm("Quieres seleccionar otro producto,recuerda que puedes precionar Cancelar si deseas terminar el proceso"));

    if(productosEscogidos.length >0 ){
        let mensaje = "productos escogidos:\n";
        for (let producto of productosEscogidos){
             mensaje += `${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
        }
        mensaje += `\nTotal: $${total.toFixed(2)}`;
        alert(mensaje);
    } else{
        alert("no escogiste ningun producto.");
    }

}
// ejecutar la simulacion 
window.onload = simuladorCompras;

