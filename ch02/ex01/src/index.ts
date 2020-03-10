/* 問題文
2-1. ジェネリクス
以下のコードで定義される関数myFilterは、配列のfilter関数を再実装したものです。
myFilter関数に適切な型アノテーションを付けてください。

myFilter関数は色々な型の配列を受け取れる点に注意してください。
必要に応じてmyFilterに型引数を追加しても構いません。
*/

function myFilter<T>(arr: T[], predicate: (e: T) => boolean): T[] {
    const result = [];
    for (const elm of arr) {
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}

// 使用例
const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
console.log(res);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);
console.log(res2);

// エラー例
//myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
