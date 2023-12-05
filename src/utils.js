export const calculateExcutionTime = (t1, t2) => console.log(`Time Elapssed: ${(t2 - t1) / 1000} seconds.`)

export const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
}

export const findDigit = (num, pos) => Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10

export const digiCount = num => {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

export const mostDigits = arr => {
    if(arr.length === 0) return 0
    return Math.max(digiCount(arr[0]), mostDigits(arr.slice(1)))
}
