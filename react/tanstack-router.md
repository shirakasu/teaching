# TanStack Router

## Reactのルーティング

Vite + ReactならReact Routerだが，TanStack Routerも選択肢としてあり．

## FileBased Routing

## 型安全でシンプルなルーティング

## バンドルサイズを軽減するCode Splitting

route.tsx
- 初回ロード時に読み込まれるコード

lazy.tsx
- 遅延して読み込まれるコード

2つの分け方：コンポーネントのコードがlazy routeの対象となる

## Search Paramsによる状態管理

ユーザー目線
- Search Paramsの状態を保ったままリンクを共有可能

開発者目線
- Json-firstで複雑な構造が扱える上，Validationが可能なため，1種の状態管理として採用することができる 


