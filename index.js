(function(global) {

	/**
	 * 短信倒计时
	 * @param  {int} s   分钟数
	 * @param  {object} opt [接受两个函数，一个 update 一个 finish]
	 * @return {null}     
	 */
	function sms(s, opt) {
	   this.s = s
	   this.total = this.s*60   						// 分钟化为秒，倒计时总秒数
	   this.update = opt.update || p.noop				// 更新视图函数
	   this.finish = opt.finish	|| p.noop				// 倒计时完成函数
	   this._id = setInterval(this.handler.bind(this), 1000)		// 定时器 id ，后面清除用
	   this.update(this.total)
	}

	var p = sms.prototype
	p.handler = function () {
		var self = this
		if (self.total >= self.s) {
			self.total--
		    self.update(self.total)  					// 处理倒计时时间戳
		    return 
		} 
		if(self.total == 0){										// 倒计时完毕，
			clearInterval(this._id)						// 清楚定时器
			self.finish()
		}
	}
	p.noop = function () {
		// nothing...
	}

	global.sms = sms

})(window)
