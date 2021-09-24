// Codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+ "cm" );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El perimetro del cuadrado es: " + areaCuadrado + "cm");
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

console.log("La altura del triangulo es " + alturaTriangulo + "cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(perimetroTriangulo);

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El perimetro del triangulo es: " + areaTriangulo +"cm^2") 
console.groupEnd();

// Codigo del circulo
console.group("Circulos")
const radioCirculo = 4; 
console.log("El radio del circulo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("PI es: " + PI);
const perimetroCircunferencia = diametroCirculo*PI;
console.log("El perimetro del circulo es: " + perimetroCircunferencia + "cm");
const areaCirculo = (radioCirculo*radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm");
console.groupEnd();
