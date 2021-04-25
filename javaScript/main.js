// Intro Page
var bgStripe = document.querySelector('#bgStripe')
var introPage = document.querySelector('#introPage')
var footer = document.querySelector('footer')
var formCard = document.querySelector('#formCard')
var header = document.querySelector('header')
var nameForm = document.querySelector('#name')
var oaksMsg = document.querySelector('#oaksMsg')
var oaksMsgBox = document.querySelector('#oaksMsgContent')
var pageOneBtn = document.querySelector('#pageOneBtn')
var pokeballBtn = document.querySelector('#bigPokeball')
var pokemonSheet = document.querySelector('#pokemonSheet')
var profOak = document.querySelector('#profOak')
var profOakText = document.querySelector('#profOakText')
var showcase = document.querySelector('#showcase')
var skipIntroBtn = document.querySelector('#skipIntro')

// Player & Enemey
var bulbasaur = document.querySelector('#bulbasaur')
var charmander = document.querySelector('#charmander')
var enemyMove = document.querySelector('#enemyMove')
var enemyPokemon = document.querySelector('#enemyPokemon')
var playerPokemon = document.querySelector('#playerPokemon')
var squirtle = document.querySelector('#squirtle')

// Player Info 
var playerSprite = document.querySelector('#playerSprite')

// Gameboy
var screen = document.querySelector('#screen')

// Card
var battleCard = document.querySelector('#battleCard')
var enemyMoveCard = document.querySelector('#enemyMoveCard')
var openingCard = document.querySelector('#openingCard')
var playAgainCard = document.querySelector('#playAgainCard')

// Battle Card
var abilityMove = document.querySelector('#abilityMove')
var bagMove = document.querySelector('#bagMove')
var fightMove = document.querySelector('#fightMove')
var hardenMove = document.querySelector('#hardenMove')
var nextMove = document.querySelector('#nextMove')
var openRunMove = document.querySelector('#openRunMove')
var outcomeMsg = document.querySelector('#outcome')
var playAgainMove = document.querySelector('#playAgainMove')
var runMove = document.querySelector('#runMove')
var swipeMove =  document.querySelector('#swipeMove')

// Battle ER
abilityMove.addEventListener('click', ability)
hardenMove.addEventListener('click', harden)
fightMove.addEventListener('click', showBattleCard)
nextMove.addEventListener('click', showPlayAgainCard)
pageOneBtn.addEventListener('click', gotoNext)
playAgainMove.addEventListener('click', showBattleCard)
pokeballBtn.addEventListener('click', startIntro)
swipeMove.addEventListener('click', swipe)
skipIntroBtn.addEventListener('click', skipIntro)
// bagMove.addEventListener('click', )
// runMove.addEventListener('click', )
// Intro ER
charmander.addEventListener('click', chooseCharmander)
bulbasaur.addEventListener('click', chooseBulbasaur)
squirtle.addEventListener('click', chooseSquirtle)

var playerStory;

// Introduction
var click = 0
function gotoNext(pokemon) {
  click++
  if(click <= 1) { 
    profOakText.innerHTML = `<p>People affectionately refer to me as the Pokemon professor</p>`
    } else if (click === 2) {
      profOakText.innerHTML = `<p>But you should call me <q>The doctor Professor</q></p>`
    } else if (click === 3) {
      profOakText.innerHTML = `<p>..so mind your manners..</p>`
    }  else if (click === 4) {
      profOakText.innerHTML = `<p>Before you we start, can you tell me... </p>
      <p>What is your name?</p>`
    } else if (click === 5) {
      show(formCard)
      hide(profOakText)
      // trainer.name = name
    } else if (click === 6) {
      profOakText.innerHTML = `<p>${nameForm.value.toUpperCase()}? Well, there are some things in life that we can't choose...</p>`
      hide(formCard)
      show(profOakText) 
    } else if (click === 7) {
      profOakText.innerHTML = `<p>Well ${nameForm.value.toUpperCase()}, you may not be an oak but at least are a pokemo-whaa?!?!</p>`
    } else if (click === 8) {
      profOakText.innerHTML = `<p>Yup, you're a pokemon, so get over it..</p>
      <p>uh, which one are you again?</p>`
    } else if (click === 9) {
      hide(profOakText)
      hide(pageOneBtn)
      show(pokemonSheet)
    } else if (click === 10) {
      hide(pokemonSheet)
      show(pageOneBtn)
      profOakText.innerHTML = `<p>Oh, thats right.. a ${pokemon.toUpperCase()}..</p>
      <p class="tiny-text">probably another trash pokemon...</p>`
      show(profOakText)
    } else if (click === 11) {
      profOakText.innerHTML = `<p>Anyways, ${nameForm.value.toUpperCase()}</p>
      <p>Well, are you ready for your first day?</p>
      <p class="tiny-text">or for anything, lol...</p>`
    } else if (click === 12) {
      hide(introPage)
      show(header)
      show(footer)
      show(showcase)
    }
}
 
function chooseBulbasaur() {
  var bulbasaur = {
    pokemon: 'bulbasaur',
    move: 'vinewhip' 
  }
  playerSprite.src = '/assets/pokemon/01_bulbasaur.png'
  playerSprite.alt = 'bulbasaur'
  gotoNext(bulbasaur.pokemon)
  return playerStory = new Game(nameForm.value, bulbasaur)
}

function chooseCharmander() {
  var charmander = {
    pokemon: 'charmander',
    move: 'ember',
  }
  playerSprite.src = '/assets/pokemon/04_charmander.png'
  playerSprite.alt = 'charmander'
  gotoNext('charmander')
  return playerStory = new Game(nameForm.value, charmander)
}

function chooseSquirtle() {
  var squirtle = {
    pokemon: 'squirtle',
    move: 'bubble' 
  }
  playerSprite.src = '/assets/pokemon/07_squirtle.png"'
  playerSprite.alt = 'squirtle'
  gotoNext(squirtle.pokemon)

}

function skipIntro() {
  hide(introPage)
  show(showcase)
  show(header)
  show(footer)
  return playerStory = new Game('Ash', summonPikachu())
}

function summonPikachu() {
  var pikachu = {
    pokemon: 'pikachu',
    move: 'lightning'
  }
  playerSprite.src = 'assets/pokemon/25_pikachu.png'
  playerSprite.alt = 'pikachu'
  return pikachu
}

  // Player's Moves
  function swipe() {   
  playerStory.triggerFight('swipe')
  showEnemyMoveCard()
  }
  function harden() {
    playerStory.triggerFight('harden')
    showEnemyMoveCard()
  }
  function ability() {
    playerStory.triggerFight('ability')
    showEnemyMoveCard()
  }

// Intro Page
function startIntro() {
  hide(pokeballBtn)
  show(profOak)
  show(bgStripe)
  show(oaksMsg)
  show(oaksMsgBox)
}


// Battle Sequence
function showBattleCard() {
  hide(openingCard)
  hide(screen)
  hide(playAgainCard)
  show(battleCard)
}

function showEnemyMoveCard() {
  hide(battleCard)
  show(enemyMoveCard)
  changeEnemyText()
}

function changeEnemyText() {
  enemyPokemon.innerHTML = `${playerStory.gymleader.pokemon.toUpperCase()}`
  enemyMove.innerHTML = `${playerStory.gymleaderMove.toUpperCase()}`
  playerPokemon.innerHTML = `${playerStory.player.pokemon.toUpperCase()}`
}

function showPlayAgainCard() {
  show(screen)
  hide(enemyMoveCard)
  show(playAgainCard)
}

function showOpeningCard() {
  hide(screen)
  hide(playAgainCard)
  show(showBattleCard)
}


// Helper Function 
function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}

