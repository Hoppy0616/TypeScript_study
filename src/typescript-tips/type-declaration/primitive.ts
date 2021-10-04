/*
JavaScriptのデータ型は、プリミティブ型とオブジェクトの二種類に分類される。
プリミティブ型の特徴
- 値を直接変更できない => イミュータブルである
- プロパティを持たない
  - 文字列や数値のプリミティブ型は、プロパティを持ったオブジェクトとして使うことができる
例
  ```
let x = "name".length;
```
プリミティブ型の種類
1. 論理型: boolean
2. 数値型: number
3. 文字列型: String
4. undefined型: undefined
5. ヌル型: null
6. シンボル型: Symbol
7. bigint型: bigint
*/
//論理型
const isOK = true;
  console.log(isOK);
const isFALSE = false;
  console.log(isFALSE);

//数値型
const applePrice = 100;
  //16進数を表すときは0xを先頭につける
const pacAdrress = 0xFFF;
  //2進数を表すときは0bを先頭につける
const picAdress = 0b10101;
  //可読性のために数字をアンダースコアで区切ることができる
const myCombatPower = 530_000;

//文字列型
  //文字列リテラル
const myMom = "Miyuki";
const myDad = 'Taro';
const mySister = `Null`;
  //テンプレートリテラル
  //バッククォートで囲うことで変数を文字列の中で使用することができる
const count = 10;
console.log(`あなたの戦闘力は${count}です`);
  //テンプレートリテラル内では計算式なども使用できる
console.log(`税込み${Math.round(100 * 1.1)}円です`);

//ヌル型
const myLover = null;
//型注釈する場合
const mySon: null = null;

//シンボル型
//論理型や数値型が同じとき、等価比較の際にtrueを返す
//シンボル名が同じでも良き科した場所が違う場合、falseを返す
const myLife1 = Symbol("zero");
const myLife2 = Symbol("zero");
console.log(myLife1 === myLife1); //=> true
console.log(myLife2 === myLife1); //=> false

//bigint型
//値の末尾にnをつける
const ourCombatPower = 5300000000000000n;
const herConbatPower: bigint = 100n;
