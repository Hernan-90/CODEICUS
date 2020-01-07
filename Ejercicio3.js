const form = document.querySelector('form')
const name = document.getElementById('name')
const produ_name = document.getElementById('produ_name')
const produ_code = document.getElementById('produ_code')
const produ_stock = document.getElementById('produ_stock')
const comentarios = document.getElementById('coments')
const dni = document.getElementById('dni')


form.addEventListener('submit', function(e){
  if(produ_name.value == '' || produ_name.value == null) {
    e.preventDefault();
  }
  if(name.value == '' || name.value == null) {
    e.preventDefault();
  }
  if(dni.value == '' || dni.value == null) {
    e.preventDefault();
  }
})
