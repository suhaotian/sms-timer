'use strict'

/**
  * 短信倒计时
  * @param  {int} s   分钟数
  * @param  {object} opt [接受两个函数，一个 update 一个 finish]
  * @return {null}     
  */
function sms(s, opt) {
	  this.s = s
	  this.total = this.s*60   								// 分钟化为秒，倒计时总秒数
	  this.update = opt.update || this.noop					// 更新视图函数
	  this.finish = opt.finish	|| this.noop				// 倒计时完成函数
	  this.handler()
	  this._id = setInterval(this.handler.bind(this), 1000)		// 定时器 id ，后面清除用
}

var p = sms.prototype
p.handler = function () {
	var self = this
	self.update(self.total)  					// 处理倒计时时间戳
	if (self.total == 0) {						// 倒计时完毕
		clearInterval(this._id)					// 清除定时器
		self.finish()
		return
	}
	self.total--
}
p.noop = function () {
	// nothing...
}


