`use strict`;

export function camelize(str) {
    return str
        .split('-')
        .map((word, i) => {
            if (i != 0) return word[0].toUpperCase() + word.slice(1);
            else return word;
        })
        .join('');
}

export function filterRange(arr, min, max) {
    return arr.filter((item) => {
        return min <= item && item <= max;
    });
}
