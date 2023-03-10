import { cards } from './data.js'

const flashCard = document.querySelector(".flashcard")
let playing = false

flashCard.addEventListener('click',function() {
  if(playing)
    return
  
  playing = true
  anime({
    targets: flashCard,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false
    }
  })
})

const levelOne = document.getElementById('level-1')
const levelTwo = document.getElementById('level-2')
const levelThree = document.getElementById('level-3')
const startButton = document.getElementById('start-btn')


levelTwo.addEventListener('change', comingSoon)
levelThree.addEventListener('change', comingSoon)

function comingSoon() {
  document.getElementById('coming-soon').style.display = 'inline'
  levelOne.checked =true
}
startButton.addEventListener('click', renderCards)

function renderCards(){
  
}
