'use strict'
var sms = require('../index.es6.js')

var s = new sms(.1, {
	update: function(n){
		console.log(n)
	},
	finish: function () {
		console.log('finish')
	}
})