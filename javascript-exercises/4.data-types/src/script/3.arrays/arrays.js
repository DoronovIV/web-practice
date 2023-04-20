`use strict`;

export function makeArrayOperations() {
    let styles = ['Jazz', 'Blues'];
    styles.push('Rock-n-Roll');
    styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
    alert(styles.shift());
    styles.unshift('Rap', 'Reggae');
}

export function getMaxSubarraySum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let item of arr) {
        currentSum += item;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
}
