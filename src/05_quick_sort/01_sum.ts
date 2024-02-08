/**
 * Algorithm for sum of an array using recursion
 * @param nums - array of numbers
 * @returns {number} - sum of the array
 */

function sum(nums: number[]): number {
    if (!nums.length) return 0
    return nums[0] + sum(nums.slice(1))
}

console.log(sum([5, 3, 1, 6, 2, 10, 7]))