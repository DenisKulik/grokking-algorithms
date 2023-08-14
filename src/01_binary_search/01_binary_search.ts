function binary_search<T>(list: T[], item: T): number | null {
    let start = 0
    let end = list.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        let guess: T = list[middle]

        if (guess === item) {
            return middle
        } else if (guess > item) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return null
}

const my_list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(binary_search(my_list, 4)); // 3
console.log(binary_search(my_list, -1)); // null