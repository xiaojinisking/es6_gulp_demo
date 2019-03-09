/**
 * 处理css的相关任务
 */


import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{								//创建一个处理css的任务
  return gulp.src('app/**/*.css')					//打开app下所有目录的css文件,嵌套目录的都可以
    .pipe(gulp.dest('server/public'))				//将模本文件ejs 拷贝到 server/public目录下面去

})
