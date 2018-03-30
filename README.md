# pages-cli
基于gulp的脚手架，仅支持简单功能：
> * dev服务器，支持自动刷新。
> * 项目打包压缩。

## 准备
```
git clone https://github.com/lsl233/pages-cli.git
cd pages-cli
npm install
```

## 使用
删除dist文件夹和压缩文件，压缩html、css和js文件到dist文件夹，再将dist压缩成zip文件
```
gulp build
```