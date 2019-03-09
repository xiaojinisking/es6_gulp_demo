//处理命令行参数
//yargs 是一个npm 模块用来完成命令行参数解析的
import yargs from 'yargs';

const args = yargs

	.option('production',{					// 命令行参数  production 区分环境 例如：gulp -production
		boolean:true,						//表示选项是一个布尔值类型
		default:false,						//默认为false
		describe:'min all scripts'			//描述，给人看的
	})

	.option('watch',{						//参数用来  监听文件修改
		boolean:true,
		default:false,
		describe:'watch all files'
	})

	.option('verbose',{						//参数用来 要不要详细的输出命令行日志
		boolean:true,
		default:false,
		describe:'log'
	})

	.option('sourcemaps',{					//sourcemaps 文件
		describe:'force the creation of sroucemaps'
	})

	.option('port',{						//设置 服务器端口
		string:true,						//字符串类型
		default:8080,						//默认8080端口
		describe:'server port'
	})

	.argv									//表示对输入的内容作为字符串解析

export default args;
