const tryClick = document.querySelector('#tryClick')
const resetClick = document.querySelector('#resetClick')
const section1 = document.querySelector('.section-01')
const section2 = document.querySelector('.section-02')
const section2P = document.querySelector('.section-02 p')
const section2H1 = document.querySelector('.section-02 h1')

const phrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',
  'Você sempre será a sua melhor companhia!',
  'Não compense na ira o que lhe falta na razão.',
  'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  'A paciência na adversidade é sinal de um coração sensível.',
  'Vencer é 90 por cento suor e 10 por cento de engenho.',
  'A vontade das pessoas é a melhor das leis.',
  'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
  'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.'
]

let randomNumber = Number(Math.round(Math.random() * 10))
let attempts = 0

function handleClick() {
  if(attempts <= 10) {
    section2P.innerText = phrases[randomNumber]
    randomNumber = Number(Math.round(Math.random() * 10))
    
    ++attempts
  }else {
    section2H1.innerText = ('Obrigado pela visita!')
    section2P.innerText = ('Seus biscoitos da sorte acabaram.')

    resetClick.classList.add('hide')
  }

  // checking attempts and random number
  // console.log(`attempts ${attempts}`)
  // console.log(`random ${randomNumber}`)
  toggleScreen()
}

function toggleScreen() {
  section1.classList.toggle('hide')
  section2.classList.toggle('hide')
}

function handleEnterPress(event) {
  if (event.key === 'Enter' && section2.classList.contains('hide')) {
    handleClick()
  }
}

tryClick.addEventListener('click', handleClick)
resetClick.addEventListener('click', toggleScreen)
document.addEventListener('keypress', handleEnterPress)