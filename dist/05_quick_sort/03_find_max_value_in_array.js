"use strict";
function findMaxValueInArray(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max)
            max = nums[i];
    }
    return max;
}
console.log(findMaxValueInArray([5, 3, 1, 6, 2, 10, 7]));
