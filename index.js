const form = document.querySelector('form')
const list = document.querySelector('ul')

form.addEventListener('submit', event => {
  event.preventDefault()
  
  const text = form.title.value
  
  if (!text) return
  
  form.title.value = ''
  list.innerHTML += `<li>${text}</li>`
  
})