/**
 * 监听源文件目录的变化，来启动不同的任务脚本
 */


import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';			// gulp常用工具函数集合
import args from './util/args';

gulp.task('browser',(cb)=>{				//创建browser任务
  if(!args.watch) return cb();			//如果不处于监听状态，则返回回调
  gulp.watch('app/**/*.js',['scripts']);			//【】 内为任务名
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
