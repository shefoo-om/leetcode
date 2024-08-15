//merge
function sortArray(arr: number[]): number[] {
    if (!arr || arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = sortArray(arr.slice(0, mid))
    const right = sortArray(arr.slice(mid))

    return merge(left, right)
};

function merge(arr1: number[], arr2: number[]): number[] {
    let finalArray: number[] = [];
    let i: number = 0;
    let j: number = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            finalArray.push(arr1[i]);
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            finalArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        finalArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        finalArray.push(arr2[j]);
        j++;
    }
    return finalArray;
}