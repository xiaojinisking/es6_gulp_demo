/**
 * 将所以的任务串联起来，按先后顺序执行
 */

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';		//处理包执行顺序

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));   //[] 里面表示任务可以并行执行，其他的表示先后执行
