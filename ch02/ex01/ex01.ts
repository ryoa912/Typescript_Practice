export function myFilter<T>(arr: T[], predicate: (param: T) => boolean) {
    const result = [];
    for (const elm of arr) {
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}
