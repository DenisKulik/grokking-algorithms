/**
 * Algorithm for quick sort
 * @param array - array of numbers
 * @returns {array} - sorted array of numbers
 */

function quickSort(array: number[]): number[] {
    // base case, arrays with 0 or 1 element are already "sorted"
    if (array.length < 2) return array
    // recursive case
    const pivot = array[0]
    // sub-array of all the elements less than the pivot
    const less = array.slice(1).filter((el) => el <= pivot)
    // sub-array of all the elements greater than the pivot
    const greater = array.slice(1).filter((el) => el > pivot)

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort([5, 3, 1, 6, 2, 10, 7]))
