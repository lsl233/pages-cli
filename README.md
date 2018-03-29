# pages-cli
基于gulp的脚手架，仅支持简单打包功能：
[1] html压缩去注释
[2] css压缩去注释
[2] js混淆压缩去注释

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