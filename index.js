import wbcolor from "wb-color";
let num = 1;
export const config = {
	switch: true, //总开关
	//   custom: undefined, //总配置用户自定义
	styles: {
		color: "red",
		"font-size": "12px",
	},
	type: true, //选择打印首输出是类型或者是值，默认true,输出是类型
	identify: "---> ", //设置分隔符，默认是'---> '
	startNumber: num, //设置次数，默认false从1开始，每次累计加一
	msg: false, //设置msg为true时表示打印首输出提示自定义,默认false
	clear: false, //设置为true时自动清除控制台所有输出记录，然后再输出本次记录，默认false
};
export class ColorConsoleLog {
	constructor(objectConfig = config) {
		this.instanceSwitch = objectConfig.switch;
		this.instanceCustom = objectConfig.custom;
		this.consoleConfig = objectConfig;
		return this.run.bind(this);
	}

	/**
	 * @description: 模块主程序
	 */
	mainFn() {
		//合并权限，实例权限高于类权限配置
		config.startNumber = num;
		const tempConfigStyles = Object.assign({}, config.styles, this.consoleConfig.styles);
		const tempConfig = Object.assign({}, config, this.consoleConfig, tempConfigStyles);
		if (tempConfig.clear) {
			console.clear();
			tempConfig.clear = false;
		}
		Array.from(arguments).forEach((value) => {
			tempConfig.startNumber = num;
			num++;
			//输出有样式的log
			wbcolor.consoleColor(value, tempConfig);
		});
	}

	/**
	 * @description: 运行权限选择程序
	 */
	run() {
		// 输出总开关为真的情况下输出
		if (this.power()) {
			//   //判断是不是用户自定义
			//   let tempCustomFn = this.customFn();
			//   if (tempCustomFn !== undefined) {
			//     return tempCustomFn;
			//   }
			//模块自有主程序
			this.mainFn(...arguments);
		}
		return;
	}

	/**
	 * @description: consoleLog输出开关权限判断
	 */
	power() {
		if (this.instanceSwitch !== undefined) {
			return this.instanceSwitch;
		}
		if (config.switch) {
			return config.switch;
		}
		return;
	}

	//   /**
	//    * @description: 用户自定义权限判断
	//    */
	//   customFn() {
	//     if (this.instanceCustom !== undefined) {
	//       if (typeof this.instanceCustom === "function") {
	//         return this.instanceCustom();
	//       }
	//       return this.instanceCustom;
	//     }
	//     if (config.custom !== undefined) {
	//       if (typeof config.custom === "function") {
	//         return config.custom();
	//       }
	//       return config.custom;
	//     }
	//     return;
	//   }
}
