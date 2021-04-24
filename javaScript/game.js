class Game {
  constructor() {
   this.player = new Player('Ash')
   this.gymleader = new Player('Misty')
   this.playerMove = ''
   this.gymleaderMove = ''
   this.winner = ''
  }
  updatePlayerMove(move) {
    this.playerMove = move
  }
  updateGymleaderMove() {
    var moveChoice = Math.floor(Math.random() * (4 - 1)) + 1
    return moveChoice === 1 ? this.gymleaderMove = 'swipe' : 
    moveChoice === 2 ? this.gymleaderMove = 'harden' :
    moveChoice === 3 ? this.gymleaderMove = 'ability' :
    null
  }
  triggerFight(move) {
    this.updatePlayerMove(move)
    this.updateGymleaderMove()
    var outcome = this.compareMove(this.playerMove, this.gymleaderMove)
    outcome === 'win' ? this.battlesWon++ : null
    outcome === 'win' ? outcomeMsg.innerText = 'You Win!' :
    outcome === 'lose' ? outcomeMsg.innerText = 'You Lose!':
    outcome === 'draw' ? outcomeMsg.innerText = 'Draw!' :
    null
  }

  compareMove(playerMove, gymLeaderMove) {
   return playerMove === 'swipe' &&  gymLeaderMove === 'ability' ? 'win' : 
          playerMove === 'swipe' && gymLeaderMove === 'swipe' ? 'draw' :
          playerMove === 'swipe' && gymLeaderMove === 'harden' ? 'lose' :
          playerMove === 'harden' && gymLeaderMove === 'swipe' ? 'win' :
          playerMove === 'harden' && gymLeaderMove === 'ability' ? 'lose' :
          playerMove === 'harden' && gymLeaderMove === 'harden' ? 'draw' :
          playerMove === 'ability' && gymLeaderMove === 'harden' ? 'win' : 
          playerMove === 'ability' && gymLeaderMove === 'swipe' ? 'lose' :
          playerMove === 'ability' && gymLeaderMove === 'ability' ? 'draw' :
          null
  }
}
