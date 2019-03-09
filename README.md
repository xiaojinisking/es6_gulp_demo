# gulp demo

* 服务端 express 
> express安装

```
yarn global add express
yarn global add express-generator
cd  server
express -e .     (-e表示使用ejs模板)

执行完上面根据提示执行下面
npm install /yarn add
```

* gulp相关安装
```
gulp安装
yarn global add gulp
yarn  add gulp --dev

cd 根目录
npm install


gulp --watch
访问浏览器 ： 127.0.0.1:3000
```



* 目录介绍
    * 为源文件目录
    * server为服务端（express）
    * tasks 为所有都构建脚本文件
    * .babelrc 为babel编译配置文件，这里指定了ES6转为ES5
    * gulpfile.babel.js为gulp命令 执行的入口文件
    * gulpfile.babel.js 载入了tasks都所有任务文件。里面default.js为默认文件，否则gulp后面要 跟task的文件名
    * default.js 执行build.js 里面是指定各个任务的先后执行顺序
    * pages.js css.js scripts.js 分别是页面、css、js 指定具体的任务
    * server.js 为服务端的执行任务脚本
    * browsers.js文件为监听目录变化执行哪些task文件
    * clean.js为清空目录
    * build.js指定脚本执行的先后顺序
    
    
