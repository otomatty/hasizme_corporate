# Farm + React Enterprise Web Application

モダンな企業向けWebアプリケーションのテンプレートです。以下の技術スタックを使用しています：

- [React](https://react.dev/) - UIライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [shadcn/ui](https://ui.shadcn.com/) - 再利用可能なUIコンポーネント
- [Jotai](https://jotai.org/) - 状態管理
- [Bun](https://bun.sh/) - JavaScriptランタイム & パッケージマネージャー
- [Biome](https://biomejs.dev/) - リンター & フォーマッター
- [Farm](https://farmfe.org/) - ビルドツール

## セットアップ

1. 依存関係のインストール:

```bash
bun install
```

2. 環境変数の設定:

```bash
cp .env.example .env
```

## 開発

開発サーバーの起動:

```bash
bun dev
```

コードの品質チェック:

```bash
bun lint        # Biomeによるリント
bun format      # Biomeによるフォーマット
```

## ビルド & デプロイ

本番用ビルド:

```bash
bun build
```

ビルド結果のプレビュー:

```bash
bun preview
```

## その他のコマンド

キャッシュのクリア:

```bash
bun clean
```

型チェック:

```bash
bun typecheck
```
