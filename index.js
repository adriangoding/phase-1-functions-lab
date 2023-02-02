// Code your solution in this file!
// function distanceFromHqInBlocks(someValue){
//     distanceFromHqInBlocks(5)
//     return distanceFromHqInBlocks
// }
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42) {
        return blockNumber - 42; 
    } else if (blockNumber < 42){
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(feetNumber){
    return distanceFromHqInBlocks(feetNumber) * 264
}

function distanceTravelledInFeet(start, destintation){
    if (start > destintation){
        return (start - destintation) * 264; 
    } else if (start < destintation) {
        return (destintation - start) * 264;
    }
}

function calculatesFarePrice(start, destintation){
    const distance = distanceTravelledInFeet(start, destintation)
    
    if (distance <= 400){
        return 0; 
    } else if (distance >= 400 && distance < 2000){
        return .02 * (distance - 400);
    }else if (distance >= 2000 && distance < 2500){
        return 25; 
    }else {
        return 'cannot travel that far'
    }

}