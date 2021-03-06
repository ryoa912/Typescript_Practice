/* 問題文
2-3. 省略可能なプロパティ
EventTarget#addEventListenerは、
2つまたは3つの引数を受け取る関数で、返り値はありません。
1つ目の引数は文字列、2つ目の引数は関数です。
そして3つ目の引数は省略可能であり、真偽値またはオブジェクトを渡すことができます。
オブジェクトに存在可能なプロパティはcapture, once, passiveの3つで、
全て真偽値であり、省略可能です。

このようなインターフェースを持つ関数addEventListenerを
declareを用いて宣言してください。
簡単のために、第2引数に指定する関数は引数無しで何も返さない関数としてください。
*/

interface IHandler { (/* 引数無し */): void };

type AddEventListenerOption = {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}

declare function addEventListener(
    arg: string,
    handler: IHandler,
    option?: boolean | AddEventListenerOption,
): void;


// 使用例
addEventListener("foobar", () => { });
addEventListener("event", () => { }, true);
addEventListener("event2", () => { }, {});
addEventListener("event3", () => { }, {
    capture: true,
    once: false
});

// エラー例
/*
addEventListener("foobar", () => {}, "string");
addEventListener("hoge", () => {}, {
  capture: true,
  once: false,
  excess: true
});
*/
