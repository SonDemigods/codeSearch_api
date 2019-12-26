# nest.js 开发指北

## 1.开发准备

安装 Node.js(8.9.0 版本以上)  
[下载地址](http://nodejs.cn/download/)

安装 nest-cli

```
npm i -g @nestjs/cli
```

创建项目

```
nest new projectName
```

## 2.目录说明

```
│  .gitignore
│  .prettierrc
│  nest-cli.json
│  package-lock.json
│  package.json			        // node依赖
│  README.md			        // 自述文档
│  tsconfig.build.json
│  tsconfig.json			    // ts配置
│  tslint.json				    // ts语法规范
│
├─src					        // 开发目录
│  │  app.controller.ts	        // 控制器
│  │  app.module.ts             // 模块
│  │  app.service.ts            // 服务
│  │  main.ts                   // 应用入口
│  │
│  └─test
│          test.controller.ts   // 控制器实例
│          test.module.ts       // 模块实例
│          test.service.ts      // 服务实例
│
└─test
        app.e2e-spec.ts
        jest-e2e.json
```

## 3.运行发布

```
npm run build           // 打包
npm run start           // 运行
npm run start:debug     // debug
```
