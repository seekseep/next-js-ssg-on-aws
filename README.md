# Next.js SSG on AWS (monorepo)

このリポジトリは **npm workspaces** を使った monorepo です。
Next.js を SSG (`next export`) でビルドし、S3 + CloudFront で配信します。

---

## 開発環境 (Docker Compose)

ローカルでは Next.js dev server をコンテナで起動できます。

```bash
# 初回のみ依存インストール
npm install

# Docker Compose で起動
docker compose up --build
````

* アプリは `http://localhost:3000` で確認できます
* ホットリロード有効

---

## デプロイ手順 (S3 + CloudFront)

1. **Next.js をビルド**

```bash
npm run -w web build
```

これで `packages/web/out/` が生成されます。

2. **CDK でデプロイ**

```bash
npm run -w cdk deploy -- --profile <aws-profile>
```

* S3 バケットと CloudFront ディストリビューションが作成されます
* デプロイ完了時に CloudFront の URL が出力されます

---

## ディレクトリ構成

```
packages/
  web/   # Next.js (SSG)
  cdk/   # AWS CDK (S3 + CloudFront IaC)
```

おけ👌
README に「GitHub CLI (`gh`)」を使って Variables や Secrets を設定する方法を追記すると便利です。
以下をそのまま追加できる形にまとめますね。

---

## GitHub CLI での設定方法

### 1. リポジトリ Variables を設定

```bash
# AWS アカウントIDを変数に登録
gh variable set AWS_ACCOUNT_ID -b"<YOUR_AWS_ACCOUNT_ID>"

# GitHub Actions 用 IAM ロール名を変数に登録
gh variable set GITHUB_OIDC_ROLE -b"GitHubDeployRole"
```
