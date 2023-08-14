"use strict";
function binary_search(list, item) {
    let start = 0;
    let end = list.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        let guess = list[middle];
        if (guess === item) {
            return middle;
        }
        else if (guess > item) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
    return null;
}
const my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary_search(my_list, 4));
console.log(binary_search(my_list, -1));
