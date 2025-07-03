
let player={
      name:"Per",
      chips:150
}
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false;
let message="";
let messageEl=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
//object creation

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+ ":$" +player.chips

function getRandomCard(){
// Math.random generates a random number between 0 and 1( nit inclusive of 1) Math.random()-> generates 0.000-0.999, Math.random()- 0.00-5.99, Math.floor()->removes decimal part

      let randomNumber=Math.floor(Math.random()*13)+1//
      if(randomNumber>10){
         return 10
      }else if(randomNumber===1){
         return 11
      } else{
        return randomNumber
      }
   }

function startGame(){
   isAlive=true
   let firstCard=getRandomCard()
   let secondCard=getRandomCard()
   sum=firstCard + secondCard;
   cards=[firstCard, secondCard]
   renderGame()
}

function renderGame(){
   cardsEl.textContent ="Cards: "
     for(let i=0; i<cards.length; i++)
      cardsEl.textContent += cards[i]+ " "

   //render out all the cards
    sumEL.textContent= "Sum:" +sum;

    if(sum<=20){
       message="You want to draw a new card?"
    }
    else if(sum===21){
        message="Wohoo, You have got the black jack!"
        hasBlackJack=true
} 
    else{
      message="You are out of the game!"
      isAlive=false;
}
messageEl.textContent= message;
}
function newCard(){

   if(isAlive===true && hasBlackJack===false){
      // cardsEl.textContent="Drawing a new card from the deck"
      let card=getRandomCard()
      sum+=card;
      cards.push(card)
      renderGame()
   } 
}

