
function isOldEnoughToVote(age) {
    return age >= 18;
    // your code here
}

function getProperty(obj, key) {
    return obj[key];
    // your code here
}

function addProperty(obj, key) {
    obj[key] = true;
    // your code here
}

function removeProperty(obj, key) {
    // your code here
    delete obj[key];
}

function isEven(num) {
    // your code here
    return (num % 2 == 0);
}

function isOdd(num) {
    // your code here
    return (num % 2 == 0) ? false : true;
}

function addToFront(arr, element) {
// your code here
    arr.splice(0, 0, element);
    return arr;
}

function addToBack(arr, element) {
    arr.push(element);
    return arr ;
    // your code here
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
    // your code here
}

function getAllWords(str) {
    // your code here
    return  (str.length != 0) ? str.split(" ").map(String) : [];
}

function extend(obj1, obj2) {
    // your code here
    for (var key in obj2) {
        if (!obj1.hasOwnProperty(key) ) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {

    for (var key in obj) {
        if (typeof obj[key] == "string" ) {
            delete obj[key];
        }
    }
}

function getIndexOf(char, str) {
    // your code here

    for (i = 0; i < str.length; i++) {
        if ( str.charAt(i) == char ) {
            return i;
        }
    }
    return -1;
}

function keep(array, keeper) {
    for (i = 0; i < array.length; i++) {
        if (array[i] != keeper) {
            array.splice(i, 1);
            i-=1;
        }
    }
    return array;
    // your code here
}

function getLargestElementAtProperty(obj, key) {
    var biggestValue;

    if ( Array.isArray(obj[key])  ) {
        for ( var i = 0; i < obj[key].length; i++ ) {
            if (obj[key][i] > biggestValue || biggestValue == null) {
                biggestValue = obj[key][i];
            }

        }
    }
    return biggestValue;
    // your code here
}

function calculateBillTotal(preTaxAndTipAmount) {

    const taxAmount = preTaxAndTipAmount * 0.095;
    const tipAmount = preTaxAndTipAmount * 0.15;

    return taxAmount + tipAmount + preTaxAndTipAmount;
    // your code here
}

function sumDigits(num) {

    var numString = num.toString();
    var finalNumber = 0;
    for (var i = 0; i < numString.length; i++) {
        var number;
        if ( parseInt(numString.charAt(i))  ) {
            number = parseInt(numString.charAt(i));
        }
        else if (numString.charAt(i) == "-" ) {
            number = -parseInt(numString.charAt(i + 1));
            i += 1;
        }
        else {
            number = 0;
        }

        finalNumber += number;
    }
    return finalNumber;
    // your code here
}

function listAllValues(obj) {
    var returnArray = [];

    for(key in obj){
        returnArray.push(obj[key]);
    }
    return returnArray;
    // The key is key
    // The value is obj[key]
}


function detectOutlierValue(string)
{
    var oddCount = 0;
    var evenCount = 0;
    var allNumbers = string.split(" ");

    for (var i = 0; i < allNumbers.length; i++) {
        oddCount += (allNumbers[i] % 2 == 1)? 1 : 0;
        evenCount += (allNumbers[i] % 2 == 0)? 1 : 0;
    }

    var outlierEvenOrOdd = ( oddCount < evenCount )? 1 : 0;

    for (var i = 0; i < allNumbers.length; i++) {
        if (allNumbers[i] % 2 == outlierEvenOrOdd) {
            return i + 1;
        }
    }
}


function search(array, value) {
    var valueIndex = Math.floor( (array.length - 1)/2  );
    var chosenValue = array[valueIndex];
    var addIndex = 0;

    while( chosenValue != value && array.length > 1 ) {
        array = (value < chosenValue)? array.slice(0,valueIndex + 1) : array = array.slice(valueIndex,array.length - 1) ;
        addIndex += (value > chosenValue)? valueIndex : 0
        valueIndex = Math.floor( (array.length - 1)/2  );
        chosenValue = array[valueIndex];
    }
    return (array[valueIndex] == value)? valueIndex + addIndex : null;

}
