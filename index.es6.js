'use strict'

class sms {
	constructor(s, opt) {
		this.s = s
		this.total = this.s * 60
		this.update = opt.update || this.loop
		this.finish = opt.finish || this.noop
		this.handler()
		this._id = setInterval(() => this.handler(), 1000)
	}

	handler() {
		this.update(this.total)
		if (this.total == 0) {
			clearInterval(this._id)
			this.finish()
			return
		}
		this.total--
	}

	noop() {
		// nothing
	}
}

module.exports = sms