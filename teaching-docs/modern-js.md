# モダンJavaScriptの基礎

## const, letでの変数宣言

## テンプレート文字列

テンプレート文字列とは，文字列の中で変数を展開するための新しい記法である．
従来の書き方では文字列と変数の結合は以下のようなコードとなっていた．

```JavaScript
// 名前を格納した変数
const name = '太郎';

// 年齢を格納した変数
const age = 24;

// 私の名前は太郎です． 年齢は24歳です． と表示したい場合
const message = "私の名前は" + name + "です．年齢は" + age + "歳です．";
console.log(message);
```

この場合，文字列結合の度に`+`を書く必要があるため，読みづらく，書くのも面倒くさい．
上記のコードは，テンプレート文字列を用いいることでスマートに記述できるようになった．

```JavaScript
// 名前を格納した変数
const name = '太郎';

// 年齢を格納した変数
const age = 24;

// 私の名前は太郎です． 年齢は24歳です． と表示したい場合
const message = `私の名前は${name}です．年齢は${age}歳です．`;
console.log(message);
```

テンプレート文字列を使用する際は，``` ` ` ```(バッククォート)で文字列を囲む．
バッククォートで囲んだ場合，`${}`の中はJavaScriptを書くことができる．
このため，以下のような使い方も可能になる．

```JavaScript
// こんにちは！と返すだけの関数
function sayHello() {
  return "こんにちは!";
}

// 私の名前は太郎です． 年齢は24歳です． と表示したい場合
const message = `皆さん${sayHello()}．`;
console.log(message);
```

## アロー関数

アロー関数は，従来とは異なる関数の記法である．
従来の記法と比較して，シンプルに関数を記述することが可能になった．

従来の関数は以下の記法である．

```JavaScript
function func1(value) {
  return value + 1;
}

console.log(func1(5)); // 6が出力
```

また，以下のように宣言した関数を一度変数に格納することもできる．

```JavaScript
const func1 = function (value) {
  return value + 1;
}

console.log(func1(5)); // 6が出力
```

新たな関数の定義方法であるアロー関数では，`function`を使用せず以下のように関数を宣言できる．

```JavaScript
const func1 = (value) => {
  return value + 1;
}

console.log(func1(5)); // 6が出力
```

慣れるまでは読みづらいので，まずは`=>`が出てきたら「関数だ〜！」と思うようにしたら良い．

アロー関数で記述する際には以下の点に注意

- 引数が一つの場合は`()`を省略できる．
- 処理を単一行で返却する場合は`{}`と`return`を省略できる．

では，以下のコードで何が出力される？どんな処理をしている？

```JavaScript
const func2 = (value1, value2) => value1 - value2;
console.log(func2(40, 20));
```

## 分割代入 {} []

## デフォルト値

## スプレッド構文

## オブジェクトの省略記法

## map, filter

## 三項演算子

## 論理演算子の本当の意味 (&&, ||)