

"use strcit";
 
// alert(); para comprobar que el java está bien enlazado

// Ejercicio 1: Crea una variable en donde se muestre tu nombre a través de la función console.log

// Variables

//  let miNombre = "Xena";

//  console.log(miNombre); 

// Ejercicio 2: Cambiar el valor de dicha variable y comprobar que efectivamente cambió

// let miNombre = "Xena";

// miNombre= "Gabriel"; 

// console.log(miNombre);

//Ejercicio 3: Comenta la variable y traba de verla con console.log() y razona lo que pasa
// Me dice que si comento vartiable que no está definida

//Ejercicio 4: Crea tres variables: operador1, operador2, resultado. Inicializa las variables. Suma operador1 y operador2 y guarda el resultado. Muestra por consola el resultado de dicha operación.

// let operador1=3, operador2=5;

// let resultado=0;

// resultado = operador1+operador2;

// console.log(resultado);

// Ejercicos profesor
// Ejercicio 1: Algoritmo de un programa que calcule el área de un círculo dado un radio incializado en una variable. Utilizar una constante PI. La salida será por console.log()

        // area = PI * r *r;

        // let a = 0;

        // let r = 2 ; 

        // const PI = 3.1416;

        // a = PI *r *r;
        // //Mostramos por template literals

        // console.log(`A = π * ${r}²= ${a}`);

//Ejercicio 2: Algoritmo de un programa que muestre por pantalla el área de un triángulo dada la base y un lado.

    // //Nodos
    // const ej2Profe = document.querySelector(".area-triangulo"); 
    // const res2Profe =  document.querySelector("#resultado2");

    // //Funciones

    // const areaTriangulo = () =>{
    //     //Variables (pueden declararse dentro de las funciones)
    //     let aTriangulo = 0;
    //     let base = 3, altura = 2;
    //     //Que los datos los ponga el usuario
    //     base = window.prompt("Dame la base"); //prompt devuelve un string
    //     //Number convierte cualquier cosa en número
    //     base = Number(base);
    //     altura = prompt("Dame la altura")
    //     altura = Number(altura);
    //     aTriangulo = (base * altura) / 2;
    //     // res2Profe.textContent = aTriangulo;
    //     res2Profe.innerHTML = `<code>
    //     A(${base}*${altura}/2)= ${aTriangulo}
    //     </code>`;
    // }


    // //Eventos
    // ej2Profe.addEventListener(
    //     "click",
    //     areaTriangulo

    // );

//Ejercicio 3: Algoritmo de un programa que dada una altura nos digas si una persona es alta si pasa de dos metros y bajas si es inferior a estas altura. En este caso te será necesaro un if

    //nodos

    //elementos li del html del tercer ejercicio del profe
    const alturaLi = document.querySelector(".persona-altura");
    //Nodo en el que va la respuesta de este ejercicio
    const res3Profe =  document.querySelector("#resultado3")

    //declaración de funciones

    const esPersonaAlta = () => {
        let alt = prompt("Dame tu altura"); //prompr devuelve un string

        console.log(`alt (${alt}) es de tipo ${typeof alt}`);
        //quiero convertir el string en número
        alt = Number(alt);

    
    

        console.log(`alt (${alt}) es de tipo ${typeof alt}`);

        //estructura condicional
    
        if(alt>200){
            res3Profe.innerHTML = `La persona de ${alt} cm es alta`;

        }else{
            res3Profe.innerHTML = `La persona de ${alt} cm es baja`;


        }

        
    }
    //evento
    alturaLi.addEventListener( //mínimo 2 parámetros
        "mouseover", //Evento al pasar el ratón por encima
        esPersonaAlta
    );
