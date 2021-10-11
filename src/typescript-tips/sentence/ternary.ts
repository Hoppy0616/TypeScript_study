/* 三項演算子
条件式 ? 真の場合の値 : 偽の場合; */
const value = 1024;
const key = value === 1024 ? "承認" : "否認" ;
console.log(key);

//三項演算子は条件式をネストすることもできる。
let useOS = "Windows";
let usingOS = 
  useOS === "Windows" 
  ? "Windows" 
  : useOS === "MacOS"
  ? "MacOS"
  : useOS === "Linux"
  ? "Linux"
  : "unknown";