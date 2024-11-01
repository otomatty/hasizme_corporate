#!/bin/bash
curl -fsSL https://bun.sh/install | bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# frontendディレクトリに移動
cd frontend

# 必要な依存関係を追加でインストール
bun add @emotion/is-prop-valid

# ビルドを実行
bun run build 