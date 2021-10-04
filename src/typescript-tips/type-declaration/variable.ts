//let:再代入可能な変数
let x:number;
x = 1;
console.log(x);
//const:再代入不可能な変数。初期値がないとエラーになる。
const y: number = 2;
console.log(y);

/*基本的に値が変化しないものはconstを使うと良い。
例：アイコン画像のパスなど*/