arrayWithNums = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

minElement = 0;
maxElement = 0;
minElementIndex = 0;
maxElementIndex = 0;
quantityOfNegativeElements = 0;
multiplyOfPositiveElements = 1;
quantityOfPositiveEvenElements = 0;
quantityOfPositiveOddElements = 0;
sumOfPositiveEvenElements = 0;
sumOfPositiveOddElements = 0;

for (i = 0; i < arrayWithNums.length; i++) {
    if (i === 0) {
        minElement = arrayWithNums[i];
        maxElement = arrayWithNums[i];
    } else {
        if (minElement > arrayWithNums[i]) {
            minElement = arrayWithNums[i];
        }
    
        if (maxElement < arrayWithNums[i]) {
            maxElement = arrayWithNums[i];
        }
    }

    if (arrayWithNums[i] < 0) {
        quantityOfNegativeElements++;
    }

    if (arrayWithNums[i] > 0) {
        multiplyOfPositiveElements *= arrayWithNums[i];
        if (arrayWithNums[i]  % 2 === 0 ) {
            quantityOfPositiveEvenElements++;
            sumOfPositiveEvenElements += arrayWithNums[i];
        }
    
        if (arrayWithNums[i]  % 2 !== 0) {
            quantityOfPositiveOddElements++;
            sumOfPositiveOddElements += arrayWithNums[i];
        }
    }
}

minElementIndex = arrayWithNums.indexOf(minElement);
maxElementIndex = arrayWithNums.indexOf(maxElement);

// 2
console.log(`мінімальний елемент масиву: ${minElement} його порядковий номер: ${minElementIndex}`);

// 3
console.log(`максимальний елемент масиву: ${maxElement} його порядковий номер: ${maxElementIndex}`);

// 4
console.log(`кількість негативних елементів: ${quantityOfNegativeElements}`);

// 5
console.log(`кількість непарних позитивних елементів: ${quantityOfPositiveOddElements}`);

// 6
console.log(`кількість парних позитивних елементів: ${quantityOfPositiveEvenElements}`);

// 7
console.log(`сума парних позитивних елементів: ${sumOfPositiveEvenElements}`);

// 8
console.log(`сума непарних позитивних елементів: ${sumOfPositiveOddElements}`);

// 9
console.log(`добуток позитивних елементів: ${multiplyOfPositiveElements}`);

// 10

for (i = 0; i < arrayWithNums.length; i++) {
    if (arrayWithNums[i] !== maxElement) {
        arrayWithNums[i] = 0;
    }
}

console.log(arrayWithNums);