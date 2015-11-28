# About

发送短信倒计时函数 core

# Usage

```js
/*
 * options 是一个 object
 * 包含一个 update 和 finish 函数
 * update 函数 接受倒计时的剩余秒数
 * finish 函数 是倒计时完毕执行的函数
 */ 

var options = {
	update: function(timer) {
		console.log(timer)
	},
	finish: function() {
		alert('倒计时完毕')
	}
}
// 第一个参数是分钟，这里指定为 1 分钟，也就是 60 秒
var sms = new sms(1, options)
```

如何用在项目中使用，请看 **example**：

```shell
npm install browser-sync gulp-uglify gulp-umd
npm build
npm server
```