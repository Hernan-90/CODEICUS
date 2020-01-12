const form = document.querySelector('form')
const name = document.getElementById('name')
const list = document.getElementById('list')
const cant = document.getElementById('cant')
const produ_name = document.getElementById('produ_name')
const produ_code = document.getElementById('produ_code')
const produ_stock = document.getElementById('produ_stock')
const comentarios = document.getElementById('coments')
const dni = document.getElementById('dni')
const fecha_entrega = document.getElementById('date')
const fecha = new Date ();
const hoy = fecha.getDate();
const mes = fecha.getMonth();
const año = fecha.getFullYear();

form.addEventListener('change', function(){
  var btn = document.querySelector('button');
  var arrayfecha = fecha_entrega.value.split("-")
  var dia_entrega = parseInt(arrayfecha[2]);
  var mes_entrega = parseInt(arrayfecha[1] - 1);
  var año_entrega = parseInt(arrayfecha[0]);

  if(produ_name.value == '' || produ_name.value == null) {
    btn.disabled = true;
  } else if(name.value == '' || name.value == null) {
    btn.disabled = true;
  } else if(dni.value == '' || dni.value == null) {
    btn.disabled = true;
  } else if(produ_stock.value == 0 || produ_stock.value == null) {
    btn.disabled = true;
  } else if(list.value == 0){
    btn.disabled = true;
  } else if(produ_stock.value < list.value){
    btn.disabled = true;
  } else if(fecha_entrega.value == '' || fecha_entrega.value == undefined) {
    btn.disabled = true;
  } else if(año_entrega < año){
    btn.disabled = true;
  } else if(mes_entrega < mes) {
    btn.disabled = true;
  } else if(dia_entrega < hoy) {
      if(mes_entrega == mes) {
      btn.disabled = true;
    } else {btn.disabled = false;}
  } else {btn.disabled = false;}

  if (btn.disabled){
    btn.style.backgroundColor = "lightgrey";
    btn.style.cursor = "default";
    console.log("false");
  } else {
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "red";
    console.log("true");
  }
})

form.addEventListener('submit', function(e){
  if (btn.disabled){
    e.preventDefault();
  }

  var arrayDatos = ["perros", "gatos", "pajaritos"];
  console.log(arrayDatos);
  e.preventDefault();

})
