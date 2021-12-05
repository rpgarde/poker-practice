const testHand = '3C 4H 5D 2D 6D'

const royalSample = [ 10, 11, 12, 13, 14 ]
// creates a faceValue key value pair so that we can accurately compare the non-numeric values
const faceValue = (face) => {
    if (face == 'A'){
        return 14
    }
    else if(face == 'K'){
        return 13
    }
    else if(face == 'Q'){
        return 12
    }
    else if (face == 'J'){
        return 11
    }
    else if (face == 'T'){
        return 10
    }
    else{
        return parseInt(face, 10)
    }
}

const handEvaluator = (hand) => {
    // create hand array that splits face and suit
    const handArr = hand.split(' ')
        .map((card)=>{
            return {
                face: card.slice(0, -1),
                suit: card.slice(-1),
                faceValue: faceValue(card.slice(0,-1))
            }
        })
        // and this sorts it
        .sort(function (a, b) {
            return a.faceValue - b.faceValue;
        });

    // console.log(handArr)

    const flush = handArr.every(card => card.suit === handArr[0].suit)

    // console.log(flush)

    const handFaceValues = (handArr.map(card => card.faceValue))

    const straight = handFaceValues.every((card,index,arr)=> {
            if(index==0){
                return true
            }
            else if((card - arr[index-1]) == 1){
                return true            
            }
        })

    const royal = () => {
        for (const i = 0; i < handFaceValues.length; i++){
            if (handFaceValues[i] != royalSample[i]){
                return false
            }
        // If all elements were same. 
        return true
        }
    }

    // console.log(royal())
    const occurrencesWithDupes = []
    
    handFaceValues.forEach(card => {
        const count = handFaceValues.filter((item)=>item == card)
        const occurrence = {value:card,count:count.length}
        occurrencesWithDupes.push(occurrence)
    });

    const occurrences = [...new Map(occurrencesWithDupes.map(v => [JSON.stringify([v.value,v.count]), v])).values()]
      
    const fourOfAKind = occurrences.filter((item)=> item.count === 4).length > 0

    const threeOfAKind = occurrences.filter((item)=> item.count === 3).length > 0

    const pairLength = occurrences.filter((item)=> item.count === 2).length

    const fullHouse = threeOfAKind&&pairLength>0

    const twoPairs = pairLength == 2

    const pair = pairLength == 1
    // console.log(occurrences)
    
    return{
        royalFlush:straight&&flush&&royal(),
        straightFlush:straight&&flush,
        fullHouse:fullHouse,
        flush:flush,
        straight:straight,
        threeOfAKind:threeOfAKind,
        twoPairs:twoPairs,
        pair:pair,
        occurrences:occurrences,
        fourOfAKind:fourOfAKind,
        handFaceValues: handFaceValues,
        highestCardValue:handFaceValues[4]
    }
   }

//    console.log(handEvaluator(testHand))
exports.handEvaluator = handEvaluator