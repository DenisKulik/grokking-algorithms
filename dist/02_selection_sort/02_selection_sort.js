"use strict";
function selection_sort(array) {
    for (let i = 0; i < array.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min_index]) {
                min_index = j;
            }
        }
        let tmp = array[i];
        array[i] = array[min_index];
        array[min_index] = tmp;
    }
    return array;
}
console.log(selection_sort([5, 3, 1, 6, 2, 10, 7]));
