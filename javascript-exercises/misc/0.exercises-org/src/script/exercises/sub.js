`use strict`;

export function sub(...args) {
    return args.reduce((p, c) => (p -= c));
}
