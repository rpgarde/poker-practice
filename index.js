const fs = require('fs');
const fileName = 'poker-hands.txt';
const readline = require('readline');
const {handEvaluator} = require('./handEvaluator')

// Read the file 
// fs.readFile(fileName, 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log('OK: ' + fileName);
//     console.log(data)
//   });  

const myInterface = readline.createInterface({
    input: fs.createReadStream(fileName)
});

let roundNumber = 0;
let player1Score = 0;
let player2Score = 0;
let exceptionCount = 0;

// Split each line into its own section
myInterface.on('line', function (line) {
    roundNumber++;
    // split Player 1 and Player 2 
    console.log(`Round number ${roundNumber}`);
    let player1 = line.slice(0, 14).trim()
    console.log(`Player 1: ${player1}`)

    console.log(handEvaluator(player1))

    let player2 = line.slice(-15).trim()
    console.log(`Player 2: ${player2}`)
    
    console.log(handEvaluator(player2))

    // 10 royal flush check 
    if(handEvaluator(player1).royalFlush&&!handEvaluator(player2).royalFlush){
        console.log('player 1 won')
        player1Score++
    }
    else if(!handEvaluator(player2).royalFlush&&handEvaluator(player2).royalFlush){
        console.log('player 2 won')
        player2Score++
    }
    // 9 straight flush check
    else if (handEvaluator(player1).straightFlush&&!handEvaluator(player2).straightFlush){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).straightFlush&&handEvaluator(player2).straightFlush){
        console.log('player 2 won')
        player2Score++
    }
    // 8 four of a kind check 
    else if (handEvaluator(player1).fourOfAKind&&!handEvaluator(player2).fourOfAKind){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).fourOfAKind&&handEvaluator(player2).fourOfAKind){
        console.log('player 2 won')
        player2Score++
    }
    // 7 full house check 
    else if (handEvaluator(player1).fullHouse&&!handEvaluator(player2).fullHouse){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).fullHouse&&handEvaluator(player2).fullHouse){
        console.log('player 2 won')
        player2Score++
    }
    // 6 flush 
    else if (handEvaluator(player1).flush&&!handEvaluator(player2).flush){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).flush&&handEvaluator(player2).flush){
        console.log('player 2 won')
        player2Score++
    }
    // 5 straight check
    else if (handEvaluator(player1).straight&&!handEvaluator(player2).straight){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).straight&&handEvaluator(player2).straight){
        console.log('player 2 won')
        player2Score++
    }
    // 4 three of a kind
    else if (handEvaluator(player1).threeOfAKind&&!handEvaluator(player2).threeOfAKind){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).threeOfAKind&&handEvaluator(player2).threeOfAKind){
        console.log('player 2 won')
        player2Score++
    }
    // 3 two pairs 
    else if (handEvaluator(player1).twoPairs&&!handEvaluator(player2).twoPairs){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).twoPairs&&handEvaluator(player2).twoPairs){
        console.log('player 2 won')
        player2Score++
    }   
    // 2 pair 
    else if (handEvaluator(player1).pair&&!handEvaluator(player2).pair){
        console.log('player 1 won')
        player1Score++
    }
    else if (!handEvaluator(player1).pair&&handEvaluator(player2).pair){
        console.log('player 2 won')
        player2Score++
    }  
    // 1 highest card value
    else if (handEvaluator(player1).highestCardValue>handEvaluator(player2).highestCardValue){
        console.log('player 1 won')
        player1Score++
    }
    else if (handEvaluator(player1).highestCardValue<handEvaluator(player2).highestCardValue){
        console.log('player 2 won')
        player2Score++
    }
    else {
        console.log('Exception. No one won!')
        exceptionCount++
    }
    console.log(`Player 1: ${player1Score}`)
    console.log(`Player 2: ${player2Score}`)
    console.log(`Exception count: ${exceptionCount}`)
    return
});




// Player 1 and Player 2's hand each get evaluated 

// Player 1 and Player 2's hands now get compared 

// If there isn't a clear winner, then it goes down more layers of evaluation