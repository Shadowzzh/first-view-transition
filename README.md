# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Docker 部署

本项目支持使用 Docker 进行构建和部署。以下是使用 Docker 部署的步骤：

### 构建 Docker 镜像

```bash
docker build -t first-view-transition .
```

### 运行 Docker 容器

```bash
docker run -p 8080:80 first-view-transition
```

这将启动应用并在 http://localhost:8080 上可访问。

### Docker 部署说明

- Dockerfile 使用多阶段构建，第一阶段使用 Node 环境构建应用，第二阶段使用 Nginx 部署静态文件
- nginx.conf 文件包含针对单页应用的优化配置
- 静态资源设置了缓存策略，提高访问速度
- 启用了 gzip 压缩，减少网络传输量

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
});
```
