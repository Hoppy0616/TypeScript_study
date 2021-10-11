/* 
例外処理
Js/Tsで例外を捉えるにはtry-catch構文を使う。
例外が投げられそうな処理をtryで囲み、catchで例外が投げられた際の処理を記述する

Typescruptにおいて、catchはany型となる。これはJavaScriptの仕様上どの型のエラーが投げられるか分からないから。
=> TypeScriptのコンパイラーオプションに"useUnknownInCatchVariables"をつけることでcatchの変数の型がunknown型になる。

catchブロックは分岐を書くことができない。エラーの型によってハンドリングする場合はcatchブロックの中で分岐を行う。

finallyブロック
finallyブロック内に書かれた構文は例外が発生しようがしまいがtry,catchのメソッドの後にかならず実行される。
*/
try {
throw new Error("simple error.");
} catch (e) {
  console.error(e);
}

try {
  throw new Error('new Error!');
} catch(e) {
  if (e instanceof Error) {
    console.log("An Error was happen.");
  }
}