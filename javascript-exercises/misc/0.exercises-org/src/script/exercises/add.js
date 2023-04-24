`use strict`;

export function add(...args) {
    return args.reduce((p, c) => (c += p));
}
