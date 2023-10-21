function countdown(n: number): void {
    console.log(n)
    if (n <= 0) return

    countdown(n - 1)
}

countdown(5)