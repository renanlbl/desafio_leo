let buttonAdd = document.querySelector('.courses__add')
let buttonClose = document.querySelector('.form__close')
let form = document.querySelector('.form__courses')

openForm()
function openForm () {
  buttonAdd.addEventListener('click', function() {
    form.style.display = 'flex'
  })
}

closeForm() 
function closeForm() {
  buttonClose.addEventListener('click', function() {
    form.style.display = 'none'
  })
}