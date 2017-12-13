/**
 * Brady Cassada
 */




/**
 * Carries out coin flip operations and adds to the arrays
 * @param frequency - array of frequencies
 * @param numCoins - number of coins to be flipped
 * @param numReps - how many times each coin will be flipped
 */
function flipCoins(frequency, numCoins, numReps) {

    for(rep=0; rep < numReps; rep++) {
        heads = doSingleFlip(numCoins);
        frequency[heads]++;
    }
    console.log(frequency);
}
/**
 * Flips each coin once
 * @param numCoins - number of coins flipped
 * @returns {number} - how coins were heads
 */
function doSingleFlip(numCoins) {
    var heads = 0;
    for (i=0; i < numCoins; i++) {
        heads += Math.floor(Math.random() * 2);
    }
    return heads;
}

/**
 * Prints a histogram based on the frequency array
 * @param frequency - array of frequencies
 * @param numCoins - number of coins flipped
 * @param numReps - number of times each coin was flipped
 */
function printHistogram(frequency, numCoins, numReps) {
    for(heads = 0; heads <= numCoins; heads++ ) {
        document.write( " " + heads + "  " + frequency[heads] + "  " );
        var fractionOfReps = frequency[heads] / numReps;
        var numOfAsterisks = Math.round(fractionOfReps * 100);
        for(i=0; i < numOfAsterisks; i++ ) {
            document.write("*");
        }
        document.write("<br>");
    }
}

function main(frequency, numCoins, numReps) {
    var frequency = [0, 0, 0, 0, 0, 0];
    var startTime = new Date().getTime();
    flipCoins(frequency, numCoins, numReps);
    printHistogram(frequency, numCoins, numReps);
    var endTime = new Date().getTime();
    document.write("Coin Flipper time: " + (endTime - startTime) + " ms");
}



