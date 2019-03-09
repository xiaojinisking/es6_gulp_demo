/**
 * 处理js的 构建脚本
 */

import gulp from 'gulp';
import gulpif from 'gulp-if';					//用于gulp语句中做if判断的
import concat from 'gulp-concat';				//用于gulp语句中做文件拼接
import webpack from 'webpack';					//打包工具
import gulpWebpack from 'webpack-stream';		// gulp是用的strem文件流，结合webpack时就要用到webpack-stream,打通gulp与webpack
import named from 'vinyl-named';				//对文件重命名做标志的
import livereload from 'gulp-livereload';		//文件热更新的包
import plumber from 'gulp-plumber';				//处理文件信息流
import rename from 'gulp-rename';				//文件重命名的包
import uglify from 'gulp-uglify';				//压缩js,css文件的包
import {log,colors} from 'gulp-util';			//在命令行工具输出的包,日志和色彩的输出

import args from './util/args';					//引入对命令行参数解析的包


// gulp.task(name[, deps], fn)
//name ：为任务名
//deps : 是当前定义的任务需要依赖的其他任务，为一个数组。当前定义的任务会有所有依赖的任务执行完毕后才开始执行。如果没有依赖，则可以省略这个参数
//fn：为任务函数，我们把任务要执行的代码写在里面，是当前任务的实际处理逻辑，该参数也是可选的。

// gulp.src(globs,[,options])
// globs :文件匹配模式（类似正则表达式），用来匹配文件路径（包含文件名）
// globas的匹配符：  参考：https://blog.csdn.net/wildye/article/details/80516847
// options:为可选参数。通常情况下我们不需要使用到
// gulp.src() 将返回一个Vinyl_files的stream它可以被piped到别的插件中。


gulp.task('scripts',()=>{						//创建js编译任务,任务名为 scripts
  return gulp.src(['app/js/index.js'])			//打开app/js/ndex.js文件
    .pipe(plumber({						//改变gulp的默认处理错误机制，之前是每个pipe遇到异常都将抛出，现在加入这个后，将错误异常集中输出
      errorHandle:function(){					//默认的处理会交给webpack去处理的，这里就固定这么写

      }
    }))
    .pipe(named())								//对文件重命名一下
    .pipe(gulpWebpack({					//对js进行编译
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
    	//处理编译js错误
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))				//流到此处，文件将被写入的路径
    .pipe(rename({									//对文件复制一份进行重命名
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))			//进行文件压缩，{}内为配置的压缩
    .pipe(gulp.dest('server/public/js'))													//再将这个压缩完成的文件存储到某个地方
    .pipe(gulpif(args.watch,livereload()))				//先判断命令行参数，来进行热刷新
})
