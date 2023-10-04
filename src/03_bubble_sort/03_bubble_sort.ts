function bubble_sort<T>(array: T[]): T[] {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }

    return array
}

console.log(bubble_sort([ 5, 3, 1, 6, 2, 10, 7 ])) // [1, 2,  3, 5, 6, 7, 10]