# 環境
# サーバー: Node.js,NestJS,GraphQL,TypeORM,PostgreSQL
# ビルド環境
#   サーバー: webpack+gulp

# 使用するNode.jsのバージョンを設定(alpineではbycryptの関係でエラーになる)
FROM node:10.16.3-alpine

# パッケージインストールに必要なファイルをコピー
COPY package.json package-lock.json ./

# 必要なパッケージをインストールする
RUN npm ci

# PM2をインストールする
RUN npm install pm2 -g

# ソースをコピーする(コピーしないファイルは.dockerignoreで制御)
COPY . .

# 環境変数を設定する
ENV NODE_ENV=production \
    DATABASE_URL=${DATABASE_URL} \
    DATABASE_URL_TEST=${DATABASE_URL_TEST}

# ビルドする
RUN npm run build:prod

# node.jsアプリケーションを実行する
CMD ["pm2-runtime", "/dist/main.js"]
