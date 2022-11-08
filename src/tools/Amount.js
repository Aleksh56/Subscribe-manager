
 export function subsAmountCounter(array) {
    let counter = 0;
    array.forEach(sub => {
        counter += sub.monthly;
    })
    return counter;
}