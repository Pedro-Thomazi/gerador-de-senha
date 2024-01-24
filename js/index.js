const form = document.querySelector('.form')
const finalPassword = document.querySelector('#finalPassword')

const caracteres = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', '1', '2', '3', '4',
  '5', '6', '7', '8', '9', '0',
  '!', '@', '#', '$', '%', '^',
  '&', '*', '?'
]

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const qtdCarac = document.querySelector('#qtdCarac')

  const textqtdCarac = qtdCarac.value

  let palavra = ''
  if (textqtdCarac === '') {
    for (let i = 0; i < 20; i++) {
      let index = Math.floor(Math.random() * caracteres.length)
      palavra += caracteres[index]
    }
  }
  else {
    for (let i = 0; i < textqtdCarac; i++) {
      let index = Math.floor(Math.random() * caracteres.length)
      palavra += caracteres[index]
    }
  }

  // console.log('Nova senha: ' + palavra)
  finalPassword.innerText = palavra
})

finalPassword.addEventListener('click', () =>  {
  navigator.clipboard.writeText(finalPassword.innerText).then(() => {
    alert("Senha Copiada")
  })
})