/**
 * Algorithm for find max value in an array
 * @param nums - array of numbers
 * @returns {number} - max value
 */

function findMaxValueInArray(nums: number[]): number {
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }

    return max
}

console.log(findMaxValueInArray([5, 3, 1, 6, 2, 10, 7]))