/*
if(condicion logica){
  todo el codigo que quiero realizar si la condicion es verdadera
}
*/

//solicite la edad al usuario e indique si debe votar
// 16 y menores de 18 es optativo, mayores de 70 son los que estan en el rantgo optativo
// 18 a 70

let edad = parseInt(prompt('Ingrese su edad'));
if(edad >= 18){
document.write('Debe votar');
}else{
    document.write('No debe votar')
}