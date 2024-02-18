"use strict";
function quickSort(array) {
    if (array.length < 2)
        return array;
    const pivot = array[0];
    const less = array.slice(1).filter((el) => el <= pivot);
    const greater = array.slice(1).filter((el) => el > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort([5, 3, 1, 6, 2, 10, 7]));
