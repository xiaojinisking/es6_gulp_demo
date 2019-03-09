/**
 * 此处为gulp的入口，这里把所有都文件加载进来
 */


import requireDir from 'require-dir';			//加载文件的包

requireDir('./tasks');							//加载task目录下的所有文件
