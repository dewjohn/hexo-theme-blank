//点击事件
function switchDarkMode() {
	if ($('body').hasClass('dark')) {
		$("#dark").html("🌞");
		document.body.classList.remove('dark');
		localStorage.setItem('noDark', '1');
		localStorage.setItem('dark', '0');
	} else {
		$("#dark").html("🌙"); 
		document.body.classList.add('dark');
		localStorage.setItem('dark', '1');
		localStorage.setItem('noDark', '0');
	}
}

