/* 問題文
2-2. いくつかの文字列を受け取れる関数
以下のコードで定義されるgetSpeedは、'slow', 'medium', 'fast'
のいずれかの文字列を受け取って数値を返す関数です。
この関数に他の文字列を渡すのは型エラーとしたいです。
この条件を満たすように型Speedを定義してください。
*/

type Speed = "slow" | "medium" | "fast";

function getSpeed(speed: Speed): number {
  switch (speed) {
    case "slow":
      return 10;
    case "medium":
      return 50;
    case "fast":
      return 200;
  }
}

// 使用例
const slowSpeed = getSpeed("slow");
const mediumSpeed = getSpeed("medium");
const fastSpeed = getSpeed("fast");

console.log(`slowSpeed=${slowSpeed}, midiumSpeed=${mediumSpeed}, fastSpeed=${fastSpeed}`);

// エラー例
//getSpeed("veryfast");
