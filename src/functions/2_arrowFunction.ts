/* アロー関数
引数が１つだけの場合、引数の括弧を簡略化することができる。ただし型の指定ができないため必然的に引数はany型となる。
関数内のコードが式一つだけの場合、{}とreturnも不要になる。 */
const hello = (name: string) => {
  return `Hello, ${name}!`;
};
const echo = (x: number) => `x=${x}`;
