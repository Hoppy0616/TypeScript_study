/* 関数宣言構文
JavaScript,TypeScript内で関数を宣言する際はfunction構文を使う。
function func() {
    //実行したい処理を記述
}
*/
function addFunction(x: number, y: number) {
  console.log(x + y);
}
//return
type Menu = {
  price?: number;
};

function getMenu(menu: Menu) {
  if (typeof menu.price === "undefined") {
    return null;
  }

  return menu.price;
}