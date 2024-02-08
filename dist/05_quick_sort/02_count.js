"use strict";
function count(nums) {
    if (!nums.length)
        return 0;
    return 1 + count(nums.slice(1));
}
console.log(count([5, 3, 1, 6, 2, 10, 7]));
