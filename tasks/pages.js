/**
 * 处理页面模板的 构建脚本
 */



import gulp from 'gulp';
import gulpif from 'gulp-if';						//用于gulp语句中做if判断的
import livereload from 'gulp-livereload';			//文件热更新的包
import args from './util/args';						//引入对命令行参数解析的包

gulp.task('pages',()=>{								//创建一个pages的任务
  return gulp.src('app/**/*.ejs')					//打开app下所有目录的ejs文件,嵌套目录的都可以
    .pipe(gulp.dest('server'))						//将模本文件ejs 拷贝到 server目录下面去
    .pipe(gulpif(args.watch,livereload()))			//判断是否进行了监听来执行热更新
})
