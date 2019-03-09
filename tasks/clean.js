/**
 * 清空目录文件的任务，为了源文件拷贝到目标目录覆盖不出现问题，我们先是清空就文件，然后拷入新文件
 */

import gulp from 'gulp';
import del from 'del';						//引入做删除动作的包
import args from './util/args';

gulp.task('clean',()=>{
  return del(['server/public','server/views'])			//清空两个目录
})
