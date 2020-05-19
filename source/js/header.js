// back-to-top
var timeout	= 800;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 



layui.use(['jquery', 'element', 'carousel'], function(){
    var $ = layui.jquery
    ,element = layui.element
    ,carousel = layui.carousel
  
    //滚动监听
    $(window).scroll(function() {
      var scr=$(document).scrollTop();
      scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
      scr > 0 ? $(".nav").css('display','block') : $(".nav").css('display','none');
    });
  
  
    //导航切换
    var btn = $('.nav').find('.nav-list').children('button')
    ,spa = btn.children('span')
    ,ul = $('.nav').find('.nav-list').children('.layui-nav');
    btn.on('click', function(){
      if(!$(spa[0]).hasClass('spa1')){
        spa[0].className = 'spa1';
        spa[1].style.display = 'none';
        spa[2].className = 'spa3';
        $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
      }else{
        spa[0].className = '';
        spa[1].style.display = 'block';
        spa[2].className = '';
        $('.nav')[0].style.height = 60 + 'px';
      }
    });
  
  
  
  });