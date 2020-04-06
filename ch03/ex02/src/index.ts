/*
3-2. Partial
PartialはTypeScriptの標準ライブラリに定義されている型で、
オブジェクトの型を渡されると、その各プロパティを全部省略可能にするものです。
MyPartialという名前でこれを実装してください。
*/


// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */
type T1 = MyPartial<{
  foo: number;
  bar: string;
}>;
/*
 * T2は { hoge?: { piyo: number; } } となる
 */
type T2 = MyPartial<{
  hoge: {
    piyo: number;
  };
}>;
