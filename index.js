
let sum = 0;
let message;
let isAlive = false
let isbastedOut = false;
let hasBackJack = false
let haveA= false 
let cards = [];
let messageEl = document.getElementById("msg-el")
let cardsEl = document.getElementById("Cards-el")
let sumEl = document.getElementById("Sum-el")
let playerChipsEl  = document.getElementById("playerChips");
let dealer= document.getElementById("casino-baiter")



// console.log(cards)

let player = {
    name: "your chips",
    chips: 145,
    bet: 10
}



function startGame(){

    if(!isAlive  && !hasBackJack  && player.chips >= 10){
        
    cards = []
    sum = 0   
    isAlive = true
    haveA= false
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum = firstCard + secondCard 
    cards.push(firstCard)
    cards.push(secondCard)
    
    renderGame()
    }
}



function renderGame(){
     cardsEl.textContent = "Cards: ";
     for(let i  = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
     }

    sumEl.textContent = "Sum: " + sum ;
    //  Gambler master took you all money! Busted you ou! hell bastered!😊 
    // wanna take a card or else are scared🤨 humm!
    // yo gambler master! you got the backjack! 😮 

     if(sum <21 ){
        message = "Do you want to draw a new card?"
        dealer.textContent = "Dealer: " + "Wanna take a card or else are scared🤨 humm!"

     }else if( sum == 21){
        message = "Wohoo! You got the blackJack!"
        dealer.textContent = "Dealer: Yo gambler master! Don't think you can survive like this for next Time  ╰（‵□′）╯ "
        hasBackJack = true
     }else{
        message = " You'r out of the game!"
        dealer.textContent = "Dealear: " + "Wanna Go Another Around? 🤪😎" 
        isAlive =false
        isbastedOut = true;
     }

     bets();
     if(isbastedOut){
           dealer.textContent = "Dealear: " +  "Gambler master took you all money! Busted you out hell bastered!😊"
     }

     
     
     messageEl.textContent = message  

    playerChipsEl.textContent = player.name + ": $" + player.chips
}





function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    // if(randomNumber >10) return 10;
    // else if(randomNumber == 1) return 11;
    return randomNumber
}


function newCard(){
    if(isAlive && !hasBackJack){
        let card = getRandomNumber()
        
        
        if(card > 11){
            sum +=10;
        }else if(card== 11  || card == 1){
            sum += 1;
            haveA = true;
        }else sum += card;

        if(sum + 10 ===21  && haveA){
           sum += 10;
        }


        if(card == 1  || card == 11){     
            card = "A"
        }else if(card == 10){ 
           card ="J";
        }else if(card == 12){
            card ="Q";
        }else if(card == 13){
            card ="K"
        }


  

        cards.push(card)
        renderGame()
    }
}



function bets(){
    if(hasBackJack){
        player.chips += (player.bet * 2);
        playerChipsEl.textContent = player.name + ": $" + player.chips
    }if(isbastedOut){
        player.chips -= player.bet;
        playerChipsEl.textContent = player.name + ": $" + player.chips
        if(player.chips > 0){
            isbastedOut = false;
        }
    }
}
