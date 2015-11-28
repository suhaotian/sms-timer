define(function(require) {
  	var sms2 = require('sms')
	var $btn = document.querySelector('#send-sms'),
		$txt = $btn.querySelector('.timer'),
		$tip = $btn.querySelector('.tip')

	$btn.addEventListener('click', handler)
	function handler() {
		$tip.textContent = '正在发送...'
		$btn.removeEventListener('click', handler)
		setTimeout(function (){
			$tip.textContent = '已发送'
			new sms(0.1, {
				update: function (timer) {
					console.log(timer)
					$txt.textContent = timer+ ' '
				},
				finish: function () {
					$txt.textContent = ''
					$tip.textContent = '发送短信'
					alert('计时完毕～')
					$btn.addEventListener('click', handler)
				}
			})
		}, 5000)
	}	
})
