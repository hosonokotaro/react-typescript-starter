# React Typescript starter

## はじめに

React プロジェクトのスターターです。create-react-app を使わずに始めたいと思い作りました。

## 使い方

### Install

クローンしたら下記のコマンドを実行してください。

```
// install
npm i

// Local server (localhost:3000) が起動します。localhost:3000をブラウザで開いてください。
npm start
```

ローカルサーバーが立ち上がっている時にスクリプトを変更すると Hot reload します。

### Build

ビルドする場合は下記のコマンドを実行してください。

```
npm run build
```

distディレクトリ配下にファイルが一式書き出されます。

## ビルドされるファイルについて

- public内のすべてのファイル
- Webpackで処理されたファイル

※ Webpackで処理されたファイルのコピーは、public内のすべてのファイルのコピー後に行われます。