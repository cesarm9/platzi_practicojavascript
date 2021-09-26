// Codigo del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){

   return lado * 4;
}
//perimetroCuadrado();
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado+ "cm" );

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
   return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + areaCuadrado + "cm");
console.groupEnd();


console.group("Triangulos")
// Codigo del triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " +
 ladoTriangulo1 + "cm, "+
  ladoTriangulo2 + "cm y "+
   baseTriangulo + "cm");

//console.log("La altura del triangulo es " + alturaTriangulo + "cm");
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1,lado2,base){
   return lado1 + lado2+ base;
}
console.log(perimetroTriangulo);

//const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El perimetro del triangulo es: " + areaTriangulo +"cm^2") 
function areaTriangulo(base, altura){
   return (base * altura / 2);

}
console.groupEnd();

// Codigo del circulo
// console.group("Circulos")
// const radioCirculo = 4; 
// console.log("El radio del circulo es: " + radioCirculo + "cm");
function diametroCirculo (radio) {
   return radio * 2;
}


//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("PI es: " + PI);
// const perimetroCircunferencia = diametroCirculo*PI;

function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * PI
}

//console.log("El perimetro del circulo es: " + perimetroCircunferencia + "cm");
//const areaCirculo = (radioCirculo*radioCirculo) * PI;

function areaCirculo(radio){
   return (radio * radio ) * PI;
}
console.log("El area del circulo es: " + areaCirculo + "cm");
console.groupEnd();

function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado")
   const value = input.value
   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}
function calcularAreaCuadrado(){
   const input = document.getElementById("InputCuadrado")
   const value = input.value
   const area = areaCuadrado(value);
   alert(area);
}

function calcularPerimetroTriangulo(){
   const input1 = document.getElementById("InputTriangulo1")
   const value1 = parseInt(input1.value)
   const input2 = document.getElementById("InputTriangulo2")
   const value2 = parseInt(input2.value)
   const input3 = document.getElementById("InputTriangulo3")
   const value3 = parseInt(input3.value)
   const perimetro = perimetroTriangulo(value1,value2,value3);
   alert(perimetro);
}
function calcularAreaTriangulo(){
   const input1 = document.getElementById("InputTriangulo1")
   const value1 = parseInt(input1.value)
   const input2 = document.getElementById("InputTriangulo2")
   const value2 = parseInt(input2.value)
   const input3 = document.getElementById("InputTriangulo3")
   const value3 = parseInt(input3.value)
   const area = areaTriangulo(value1,value2);
   alert(area);
}

function calcularPerimetroCirculo(){
   const input = document.getElementById("InputCirculo")
   const value = input.value
   const perimetro = perimetroCirculo(value);
   alert(perimetro);
}
function calcularAreaCirculo(){
   const input = document.getElementById("InputCirculo")
   const value = input.value
   const area = areaCirculo(value);
   alert(area);
}