# Props

Propsとは，コンポーネントに渡す引数のようなものである．
コンポーネントは受け取ったPropsに応じて表示するスタイルや内容を変化させる．

## Propsに対応したコンポーネントの作成方法

## children

コンポーネントも通常のHTMLタグと同様以下のように任意の要素を囲って使用することができます．
この囲まれた部分がchildrenとしてPropsに設定されます．

```typescriptreact

// childrenが未設定の場合
<ColoredMessage color="blue" message="Hello World"/>

// childrenを設定し，"Hello World"を渡した場合
<ColoredMessage color="blue">Hello World</ColoredMessage>

```

## 分割代入，省略記法
