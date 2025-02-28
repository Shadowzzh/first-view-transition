# 第一阶段：构建应用
FROM node:20-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 lock 文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN npm install

# 复制所有源代码
COPY . .

# 构建应用
RUN npm run build

# 第二阶段：使用 Nginx 作为生产服务器
FROM nginx:stable-alpine

# 复制自定义 Nginx 配置
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 从构建阶段复制构建好的文件到 Nginx 服务目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

