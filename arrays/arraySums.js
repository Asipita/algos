// give an array of n elements, return an array that: the value at an index is the sum of every other element except the element at that index in the original array
// [1,2,3,4,5] ====>  [14, 13, 12, 11, 10]
// [0,1,3,6,10]
// [14,12,9,5,0]

function sumOfArrays(arr) {
    let total = 0
    const sums = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sums[index] = total
        total += element
    }

    let totalAfter = 0
    for (let index = arr.length-1; index > -1; index--) {
        const element = arr[index]
        sums[index] = totalAfter+sums[index]
        totalAfter += element
    }

    console.log(sums)
}

sumOfArrays([1,2,3,4,5])