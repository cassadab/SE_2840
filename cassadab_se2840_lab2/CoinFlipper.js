/**
 * Created by cassadab on 12/6/2017.
 */

const numOfCoins = 5;
const numOfReps = 100000;

var frequency = new Array();
var heads = 0;


function flipCoins(frequency, numCoins, numReps) {
    for(rep=0; rep < numReps; rep++) {
        var heads = doSingleFlip(numCoins);
        frequency[heads]++;
    }
    console.log(frequency);
}

function doSingleFlip(numCoins) {
    var heads = 0;
    for (i=0; i < numCoins; i++) {
        heads += Math.floor(Math.random() * 2);
    }
    return heads;
}

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
    var startTime = new Date().getTime();
    flipCoins(frequency, numCoins, numReps);
    printHistogram(frequency, numCoins, numReps);
    var endTime = new Date().getTime();
    document.write("Coin Flipper time: " + (endTime - startTime) + " ms");
}

main(frequency, numOfCoins, numOfReps);
