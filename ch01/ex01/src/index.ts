/* 問題文
1-1. 関数に型をつけよう
次の関数isPositiveは、数値を受け取ってそれが0以上ならtrue、0未満ならfalseを返す関数です。
この関数に正しく型アノテーションを付けてください。
型アノテーションとは、引数や返り値の型をソースコード中に明示することです。
*/

function isPositive(num: number): boolean {
    return num >= 0;
}

// 使用例
var result = isPositive(3);
console.log(result);

// エラー例
//isPositive('123');
//const numVar: number = isPositive(-5);

/* コメント
エラー例1は、引数の型が不正のためコンパイルエラー
エラー例2は、戻り値の型が不正のためコンパイルエラー
*/
