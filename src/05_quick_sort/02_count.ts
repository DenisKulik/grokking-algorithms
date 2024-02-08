/**
 * Algorithm for count of an array using recursion
 * @param nums - array of numbers
 * @returns {number} - count of the array
 */

function count(nums: number[]): number {
    if (!nums.length) return 0
    return 1 + count(nums.slice(1))
}

console.log(count([5, 3, 1, 6, 2, 10, 7]))