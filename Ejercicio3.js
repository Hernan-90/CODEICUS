const form = document.querySelector('form')
const name = document.getElementById('name')
const list = document.getElementById('list')
const produ_name = document.getElementById('produ_name')
const produ_code = document.getElementById('produ_code')
const produ_stock = document.getElementById('produ_stock')
const comentarios = document.getElementById('coments')
const dni = document.getElementById('dni')

btn.addEventListener('mouseover', function(e){
  var btn = document.querySelector('button');
  if(produ_name.value == '' || produ_name.value == null) {
  } else if(name.value == '' || name.value == null) {
  } else if(dni.value == '' || dni.value == null) {
    btn.style.backgroundColor = "lightgrey";
    btn.style.cursor = "default";
  } else {
    if (list.value > 0){
      btn.style.cursor = "pointer";
      btn.style.backgroundColor = "red";
    } else {btn.style.backgroundColor = "lightgrey";
    btn.style.cursor = "default";}
  }
})
form.addEventListener('submit', function(e){
  if (list.value == 0){
    e.preventDefault();
  }
  if(produ_name.value == '' || produ_name.value == null) {
    e.preventDefault();
  } else if(name.value == '' || name.value == null) {
    e.preventDefault();
  } else if(dni.value == '' || dni.value == null) {
    e.preventDefault();
  } else {   };
})
