/* 問題文
1-3. 関数の型
以下のコードで定義される関数isPositiveは、
数値を受け取ってその数値が0以上ならtrueを、
0未満ならfalseを返す関数です。

以下のコードに合うように適切な型IsPositiveFunc
を定義してください。
*/

const isPositive: IsPositiveFunc = num => num >= 0;

// 回答
interface IsPositiveFunc { (argn: number): boolean };

// 使用例
let result = isPositive(5);
console.log(result);

// エラー例
//isPositive('foo');
//const res: number = isPositive(123);

/* コメント
エラー例は、型定義していないため、
コンパイルエラーにならずに実行時エラーになってしまう。
*/
