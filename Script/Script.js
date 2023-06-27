var campo = document.getElementById("campoNumerico");
var parentesisAbierto = false;

var num0 = document.getElementById("num0").onclick = ()=>{
  campo.value +=0;
};
var num1 = document.getElementById("num1").onclick = ()=>{
  campo.value +=1;
};
var num2 = document.getElementById("num2").onclick = ()=>{
  campo.value +=2;
};
var num3 = document.getElementById("num3").onclick = ()=>{
  campo.value +=3;
};
var num4 = document.getElementById("num4").onclick = ()=>{
  campo.value +=4;
};
var num5 = document.getElementById("num5").onclick = ()=>{
  campo.value +=5;
};
var num6 = document.getElementById("num6").onclick = ()=>{
  campo.value +=6;
};
var num7 = document.getElementById("num7").onclick = ()=>{
  campo.value +=7;
};
var num8 = document.getElementById("num8").onclick = ()=>{
  campo.value +=8;
};
var num9 = document.getElementById("num9").onclick = ()=>{
  campo.value +=9;
};
var AC = document.getElementById("AC").onclick = ()=>{
  campo.value = '';
};
var parentesis = document.getElementById("parentesis").onclick = ()=>{
  if(!parentesisAbierto){
    campo.value += '(';
    parentesisAbierto = true;
  }else{
    campo.value += ')';
    parentesisAbierto = false;
  }
};
var division = document.getElementById("division").onclick = ()=>{
  campo.value +='/';
};
var multiplicar = document.getElementById("multiplicacion").onclick = ()=>{
  campo.value += '*';
};
var porcentaje = document.getElementById("porcentaje").onclick = ()=>{
  campo.value += '%';
};
var restar = document.getElementById("restar").onclick = ()=>{
  campo.value += '-';
};
var sumar = document.getElementById("sumar").onclick = ()=>{
  campo.value += '+';
};
var punto = document.getElementById("punto").onclick = ()=>{
  campo.value += '.';
};
var coma = document.getElementById("coma").onclick = ()=>{
  campo.value += ',';
};
var igual = document.getElementById('igual').onclick = ()=>{
  var resultado = eval(campo.value);
  campo.value = resultado;
};
