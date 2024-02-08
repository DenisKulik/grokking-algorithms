"use strict";
function sum(nums) {
    if (!nums.length)
        return 0;
    return nums[0] + sum(nums.slice(1));
}
console.log(sum([5, 3, 1, 6, 2, 10, 7]));
