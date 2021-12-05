const fs = require('fs');
const fileName = 'poker-hands.txt';
const readline = require('readline');
const {handEvaluator} = require('./handEvaluator')

const myInterface = readline.createInterface({
    input: fs.createReadStream(fileName)
});

// Counters
let roundNumber = 0;
let player1Score = 0;
let player2Score = 0;
let exceptionCount = 0;

// Split each line into its own section
myInterface.on('line', function (line) {
    roundNumber++;
    // split Player 1 and Player 2 
    console.log(`\nRound number ${roundNumber}`);
    let player1 = line.slice(0, 14).trim()
    console.log(`Player 1: ${player1}`)

    const evaluatedPlayer1 = handEvaluator(player1)
    console.log(evaluatedPlayer1)

    let player2 = line.slice(-15).trim()
    console.log(`Player 2: ${player2}`)

    const evaluatedPlayer2 = handEvaluator(player2)
    console.log(evaluatedPlayer2)

    // 10 royal flush check 
    if(handEvaluator(player1).royalFlush&&!evaluatedPlayer2.royalFlush){
        console.log('player 1 won')
        player1Score++
    }
    else if(!evaluatedPlayer2.royalFlush&&evaluatedPlayer2.royalFlush){
        console.log('player 2 won')
        player2Score++
    }
    //TODO: Add evaluations for when they are equal
    // 9 straight flush check
    else if (evaluatedPlayer1.straightFlush&&!evaluatedPlayer2.straightFlush){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.straightFlush&&evaluatedPlayer2.straightFlush){
        console.log('player 2 won')
        player2Score++
    }
    // 8 four of a kind check 
    else if (evaluatedPlayer1.fourOfAKind&&!evaluatedPlayer2.fourOfAKind){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.fourOfAKind&&evaluatedPlayer2.fourOfAKind){
        console.log('player 2 won')
        player2Score++
    }
    // 7 full house check 
    else if (evaluatedPlayer1.fullHouse&&!evaluatedPlayer2.fullHouse){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.fullHouse&&evaluatedPlayer2.fullHouse){
        console.log('player 2 won')
        player2Score++
    }
    // 6 flush 
    else if (evaluatedPlayer1.flush&&!evaluatedPlayer2.flush){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.flush&&evaluatedPlayer2.flush){
        console.log('player 2 won')
        player2Score++
    }
    // 5 straight check
    else if (evaluatedPlayer1.straight&&!evaluatedPlayer2.straight){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.straight&&evaluatedPlayer2.straight){
        console.log('player 2 won')
        player2Score++
    }
    // 4 three of a kind
    else if (evaluatedPlayer1.threeOfAKind&&!evaluatedPlayer2.threeOfAKind){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.threeOfAKind&&evaluatedPlayer2.threeOfAKind){
        console.log('player 2 won')
        player2Score++
    }
    // 3 two pairs 
    else if (evaluatedPlayer1.twoPairs&&!evaluatedPlayer2.twoPairs){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.twoPairs&&evaluatedPlayer2.twoPairs){
        console.log('player 2 won')
        player2Score++
    }   
    // 2 pair 
    else if (evaluatedPlayer1.pair&&!evaluatedPlayer2.pair){
        console.log('player 1 won')
        player1Score++
    }
    else if (!evaluatedPlayer1.pair&&evaluatedPlayer2.pair){
        console.log('player 2 won')
        player2Score++
    }  
    // 1 highest card value
    else if (evaluatedPlayer1.highestCardValue>evaluatedPlayer2.highestCardValue){
        console.log('player 1 won')
        player1Score++
    }
    else if (evaluatedPlayer1.highestCardValue<evaluatedPlayer2.highestCardValue){
        console.log('player 2 won')
        player2Score++
    }
    else {
        console.log('Exception. No one won!')
        exceptionCount++
    }
    // Now everything gets tallied
    console.log(`\nFINAL SCORES:\n`)
    console.log(`Player 1: ${player1Score}`)
    console.log(`Player 2: ${player2Score}`)
    console.log(`Unscored count: ${exceptionCount}`)
    return
});




// Player 1 and Player 2's hand each get evaluated 

// Player 1 and Player 2's hands now get compared 

// If there isn't a clear winner, then it goes down more layers of evaluation