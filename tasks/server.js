/**
 * 处理服务器的脚本
 */

import gulp from 'gulp';
import gulpif from 'gulp-if';						//用于gulp语句中做if判断的
import liveserver from 'gulp-live-server';			//架设本地服务器的一个包，它还可以实现gulp-livereload自动刷选的功能
import args from './util/args';						//引入对命令行参数解析的包

gulp.task('serve',(cb)=>{							//创建serve任务,任务名为 serve
  if(!args.watch) return cb();						//如果不是处于监听状态下,我们直接返回回调函数

  var server = liveserver.new(['--harmony','server/bin/www']);			//创建一个服务器   --harmony 表示要在当前目录下执行后面这个脚本 (这里说express的默认启动脚本)
  server.start();

  //watch() 用于文件监听。监听js和ejs文件
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){			
    server.notify.apply(server,[file]);													//通知服务器文件发生了改变
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){						//监听路由和接口发生了变化
    server.start.bind(server)()															//重启服务，这里说调用的liveserver的接口
  });
})
