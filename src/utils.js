export const calculateExcutionTime = (t1, t2) => console.log(`Time Elapssed: ${(t2 - t1) / 1000} seconds.`)

export const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
}