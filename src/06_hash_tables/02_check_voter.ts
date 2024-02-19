const voted: HashTable<boolean> = {};

/**
 * Check if a voter has voted
 * @param name - name of voter
 */
function check_voter(name: string): void {
    if (voted[name]) {
        console.log('kick them out!')
    } else {
        voted[name] = true;
        console.log('let them vote!')
    }
}

check_voter("tom") // let them vote!
check_voter("mike") // let them vote!
check_voter("mike") // kick them out!
