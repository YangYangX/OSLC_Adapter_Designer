# OSLC_Adapter_Designer

## OSLC 适配器图形化代码配置与生成工具

### 开发平台： Windows 10

## 命令

在项目根目录下，运行:

### `yarn install`

安装项目所需的依赖项目以及文件，初始化项目开发.

### `yarn start`

启动项目开发调试模式，首先编译 Javscript 代码，编译完成后启动 Electron 并装载已编译的 JS 项目.<br>
同时启动 Debug 工具 [React, Redux 调试工具].

开发者模式支持热加载，Javascript 的代码更新会实时传输到程序中.<br>
在编译的过程中，Console 会显示 Lint 过程中遇到的 Warning 和 Error.

### `yarn web:build`

对项目的核心 Javascript 代码进行编译.

### `yarn clean`

清理项目.

### `yarn setup`

（未完成）编译 javascript 代码并打包成 Electron 可执行文件，并基于最新生成的可执行文件，为 Windows 平台生成安装包.

## 其他内容:

## 目前进展:

### 为 Container 添加 Redux 支持

## 下一步工作

### 集成 OSLC_Adapter_Generator

### 完善打包机制，生成产品安装包
