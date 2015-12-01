$(document).ready(function(){
	var $code = $("div.code");
	$code.hide();
	var $showCode = $("div.button");
	$showCode.click(function(){
		$code.show(3000);
	});
});