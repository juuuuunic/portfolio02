/*************** nav ****************/
var WheelScroll = (function() {
	function WheelScroll(_opt) {
		var obj = this;  //this = function
		if(_opt) {
			if(_opt.page)  this.page = $(_opt.page);
			else this.page = $(".pages");
			if(_opt.speed) this.speed = _opt.speed;
			else this.speed = 200;
		}
		else {
			this.page = $(".pages");
			this.speed = 200;
			this.nav = null;
		}
		this.scTop = $(window).scrollTop();
		this.gap = [];
		this.oldNow = 0;
		this.now = 0;
		this.dir = 0;
		this.speedGap = 0;
		
		$(window).resize(function() {
			$(obj.page).each(function(i) {
				obj.gap[i] = $(this).offset().top; 
			});
		}).trigger("resize");
		this.init(this);
		if(_opt.nav) this.navAdd(obj, _opt.nav);
	}
		
	WheelScroll.prototype.init = function(obj) {
		var chartChk = true;
		$(window).scroll(function(){
			$(obj.page).each(function(i) {
				obj.gap[i] = $(this).offset().top; 
			});
			obj.scTop = $(window).scrollTop();	
			for(var i=0; i<obj.gap.length; i++) {
				if(obj.scTop <= obj.gap[i] + 500) {
					obj.now = i;
					break;
				}
			}
			//console.log(obj.now)
			
		});
	}
	WheelScroll.prototype.navAdd = function(obj, navObj) {
		$(navObj).on("click", function() {
			obj.oldNow = obj.now;
			obj.now = $(this).data("now");
			obj.animation(obj, null);
		});
	}
	WheelScroll.prototype.animation = function(obj, fn) {
		obj.speedGap = Math.abs(obj.now - obj.oldNow);
		$("html, body").stop().animate({"scrollTop":obj.gap[obj.now]+"px"}, obj.speed*obj.speedGap, fn);
	}
	return WheelScroll;
}());

var pages = new WheelScroll({
	page: ".pages", 
	nav: ".nav_bt",
	speed: 700
});

$(window).scroll(function(){
	var gap = $("html, body").scrollTop();
	//console.log("gap");
	if(gap > 150) {
		if($(".navs").hasClass("dn_bg") == false) {
			$(".navs").css({"top":"-7%"}).addClass("dn_bg");
			$(".navs").stop().animate({"top":"0"}, 500);
			$(".web_nav > .nav_bt").css({"color":"#222"})
			$(".mo_nav").css({"color":"#222"})
			$(".logo_bk").css({"display":"block"})
			$(".logo_wh").css({"display":"none"})
		}
		
		
	}
	else {
		$(".navs").css({"top":"-7%"}).removeClass("dn_bg");
		$(".navs").stop().animate({"top":"0"}, 500);
		$(".web_nav > .nav_bt").css({"color":"#fff"})
		$(".mo_nav").css({"color":"#fff"})
		$(".logo_bk").css({"display":"none"})
		$(".logo_wh").css({"display":"block"})
		
	}
});

//mo_nav
var m_nav = function(){
	if($(".m_nav").css("display") == "none"){
		$(".m_nav").fadeIn("fast");
	} else {
		$(".m_nav").fadeOut("fast");
	}
}

$(".mo_nav").click(function(){
	m_nav();
}) 

/*************** fly ****************/
$(document).ready(function() {
	// IE
		if (isIE () && isIE () < 3) { funcIEScroll(); }
		else { recheck(); }
	
});
$(window).scroll(function(){
	// IE
		if (isIE () && isIE () < 3) { funcIEScroll(); }
		else { recheck(); }

});
$(window).resize(function(){
	// IE
		if (isIE () && isIE () < 3) { funcIEScroll(); }
		else { recheck(); }
	
});
function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf("msie") != -1) ? parseInt(myNav.split("msie")[1]) : false;
}

var funcIEScroll = function(){
	$(".fly").css("opacity","1");
	$(".fly").css("transform","translateY(0px) translateX(0px) scale(1) translate3d(0, 0, 0)");
	$(".fly").css("-webkit-transform","-webkit-translateY(0px) -webkit-translateX(0px) -webkit-scale(1) -webkit-translate3d(0, 0, 0)");
	$(".fly").css("-moz-transform","-moz-translateY(0px) -moz-translateX(0px) -moz-scale(1) -moz-translate3d(0, 0, 0)");
	$(".fly").css("-o-transform","-o-translateY(0px) -o-translateX(0px) -o-scale(1) -o-translate3d(0, 0, 0)");

	$(".fly1").css("opacity","1");
	$(".fly1").css("transform","translateY(0px) translateX(0px) scale(1) translate3d(0, 0, 0)");
	$(".fly1").css("-webkit-transform","-webkit-translateY(0px) -webkit-translateX(0px) -webkit-scale(1) -webkit-translate3d(0, 0, 0)");
	$(".fly1").css("-moz-transform","-moz-translateY(0px) -moz-translateX(0px) -moz-scale(1) -moz-translate3d(0, 0, 0)");
	$(".fly1").css("-o-transform","-o-translateY(0px) -o-translateX(0px) -o-scale(1) -o-translate3d(0, 0, 0)");

	$(".fly2").css("opacity","1");
	$(".fly2").css("transform","translateY(0px) translateX(0px) scale(1) translate3d(0, 0, 0)");
	$(".fly2").css("-webkit-transform","-webkit-translateY(0px) -webkit-translateX(0px) -webkit-scale(1) -webkit-translate3d(0, 0, 0)");
	$(".fly2").css("-moz-transform","-moz-translateY(0px) -moz-translateX(0px) -moz-scale(1) -moz-translate3d(0, 0, 0)");
	$(".fly2").css("-o-transform","-o-translateY(0px) -o-translateX(0px) -o-scale(1) -o-translate3d(0, 0, 0)");

	$(".fly3").css("opacity","1");
	$(".fly3").css("transform","translateY(0px) translateX(0px) scale(1) translate3d(0, 0, 0)");
	$(".fly3").css("-webkit-transform","-webkit-translateY(0px) -webkit-translateX(0px) -webkit-scale(1) -webkit-translate3d(0, 0, 0)");
	$(".fly3").css("-moz-transform","-moz-translateY(0px) -moz-translateX(0px) -moz-scale(1) -moz-translate3d(0, 0, 0)");
	$(".fly3").css("-o-transform","-o-translateY(0px) -o-translateX(0px) -o-scale(1) -o-translate3d(0, 0, 0)");

	$(".fly4").css("opacity","1");
	$(".fly4").css("transform","translateY(0px) translateX(0px) scale(1) translate3d(0, 0, 0)");
	$(".fly4").css("-webkit-transform","-webkit-translateY(0px) -webkit-translateX(0px) -webkit-scale(1) -webkit-translate3d(0, 0, 0)");
	$(".fly4").css("-moz-transform","-moz-translateY(0px) -moz-translateX(0px) -moz-scale(1) -moz-translate3d(0, 0, 0)");
	$(".fly4").css("-o-transform","-o-translateY(0px) -o-translateX(0px) -o-scale(1) -o-translate3d(0, 0, 0)");

	$(".fly_right").css("opacity","1");
	$(".fly_right").css("transform","translateY(0px) translateX(0px) scale(1) translate3d(0, 0, 0)");
	$(".fly_right").css("-webkit-transform","-webkit-translateY(0px) -webkit-translateX(0px) -webkit-scale(1) -webkit-translate3d(0, 0, 0)");
	$(".fly_right").css("-moz-transform","-moz-translateY(0px) -moz-translateX(0px) -moz-scale(1) -moz-translate3d(0, 0, 0)");
	$(".fly_right").css("-o-transform","-o-translateY(0px) -o-translateX(0px) -o-scale(1) -o-translate3d(0, 0, 0)");
}

var timer = 0;
function recheck() {
	var window_top = $(this).scrollTop();
	var window_height = $(this).height();
	var view_port_e = window_top + window_height;
	
	if ( timer ) {
	  clearTimeout( timer );
	}
	$(".fly").each(function(){
		var block = $(this);
		var block_top = block.offset().top;
		var block_height = block.height();
		var windowHeight = $(window).height();
  
		if ( block_top < view_port_e ) { timer = setTimeout(function(){ block.addClass("show-block"); },100); }
		else { timer = setTimeout(function(){ block.removeClass("show-block"); },100); }
	  });
  
	  $(".fly1").each(function(){
		var block = $(this);
		var block_top = block.offset().top;
		var block_height = block.height();
		var windowHeight = $(window).height();
  
		if ( block_top < view_port_e ) { timer = setTimeout(function(){ block.addClass("show-block"); },100); }
		else { timer = setTimeout(function(){ block.removeClass("show-block"); },100); }
	  });
  
  
	  $(".fly2").each(function(){
		var block = $(this);
		var block_top = block.offset().top;
		var block_height = block.height();
		var windowHeight = $(window).height();
  
		if ( block_top < view_port_e ) { timer = setTimeout(function(){ block.addClass("show-block"); },100); }
		else { timer = setTimeout(function(){ block.removeClass("show-block"); },100); }
	  });
  
  
	  $(".fly3").each(function(){
		var block = $(this);
		var block_top = block.offset().top;
		var block_height = block.height();
		var windowHeight = $(window).height();
  
		if ( block_top < view_port_e ) { timer = setTimeout(function(){ block.addClass("show-block"); },100); }
		else { timer = setTimeout(function(){ block.removeClass("show-block"); },100); }
	  });
  
  
	  $(".fly4").each(function(){
		var block = $(this);
		var block_top = block.offset().top;
		var block_height = block.height();
		var windowHeight = $(window).height();
  
		if ( block_top < view_port_e ) { timer = setTimeout(function(){ block.addClass("show-block"); },100); }
		else { timer = setTimeout(function(){ block.removeClass("show-block"); },100); }
	  });
  
  
  
  
	  $(".fly_right").each(function(){
		var block = $(this);
		var block_top = block.offset().top;
		var block_height = block.height();
		var windowHeight = $(window).height();
  
		if ( block_top < view_port_e ) { timer = setTimeout(function(){ block.addClass("show-block"); },100); }
		else { timer = setTimeout(function(){ block.removeClass("show-block"); },100); }
	  });

}




/*************** portfolio ****************/
$(window).resize(function(){
	$(".ports").height($(".port_box").height());
}).trigger("resize");

//slide
var Slide = (function(){
	//Slide객체의 생성자(Constructor)
	function Slide(_wrap, _option) {
	   //객체의 전역변수 선언(this로 선언)
	   var obj = this;
	   this.slides = _wrap;   //실제 움직임을 갖는 ul
	   this.slide = $(this.slides).find(".port");   //ul안의 li들
	   this.cnt = this.slide.length;   //li의 갯수
	   //_option 존재여부에 따른 this.option 생성
	   if(_option) {
		  this.option = _option;
		  if(this.nullChk(this.option.type)) this.option.type = "fade";
		  if(this.nullChk(this.option.delay)) this.option.delay = 2000;
		  if(this.nullChk(this.option.speed)) this.option.speed = 300;
		  if(this.nullChk(this.option.hover)) this.option.hover = true;
		  if(this.nullChk(this.option.pager)) this.option.pager = false;
		  if(this.nullChk(this.option.link)) this.option.link = false;
		  if(this.nullChk(this.option.target)) this.option.target = "_self";
		  if(this.nullChk(this.option.pagerPos)) this.option.pagerPos = "bottom";
		  if(this.nullChk(this.option.pagerVal)) this.option.pagerVal = "0px";
		  if(this.nullChk(this.option.pagerSymbol)) this.option.pagerSymbol = null;
		  if(this.nullChk(this.option.pagerDefClass)) this.option.pagerDefClass = "w3-white";
		  if(this.nullChk(this.option.pagerActClass)) this.option.pagerActClass = "w3-red";
	   }
	   else {
		  //_option을 생략했을때 기본값
		  this.option = {
			 type: "fade",
			 delay: 2000,
			 speed: 300,
			 hover: true,
			 pager: false,
			 link: false
		  }
	   }
	   
	   //type의 값에 따라 실행 분기
	   switch(this.option.type) {
		  case "pingpong" :
			 this.now = 1;
			 this.direction = 1;
			 this.initPingpong(this);
			 break;
		  case "infinite" :
			 this.now = 1;
			 this.initInfinite(this);
			 break;
		  case "fade" :
			 this.now = 0;
			 this.initFade(this);
			 break;
		  case "vertical" :
			 this.now = 1;
			 this.initVertical(this);
			 break;
		  default :
			 this.now = 1;
			 this.initNormal(this);
			 break;
	   }
	};
	
	//type:fade
	Slide.prototype.initFade = function(obj){
	   obj.depth = 2;
	   obj.interval = setInterval(ani, obj.option.delay, obj);
	   function ani(obj) {
		  
		  $(obj.slide).eq(obj.now).stop().css({"z-index":obj.depth++, "display":"none"}).fadeIn(obj.option.speed, function(){
			 if(obj.now == obj.cnt - 1) obj.now = -1;
			 obj.now++;
		  });
	   }
	   if(obj.option.hover) obj.hoverInit(obj, ani);
	   if(obj.option.link) obj.linkInit(obj);
	};
	
	//HoverInit
	//이미지에 hover하면 애니메이션이 멈추고, out하면 애니메이션이 다시 시작함
	Slide.prototype.hoverInit = function(obj, fn) {
	   $(obj.slides).hover(function(){
		  clearInterval(obj.interval);
	   }, function(){
		  clearInterval(obj.interval); //확실하게 interval을 지운다.
		  obj.interval = setInterval(fn, obj.option.delay, obj);
	   });
	};
	//Utils
	//전달받은 인자의 값이 undefined(선언만 됐을때 혹은 변수가 없을때), null(빈값)이면 true를 리턴
	Slide.prototype.nullChk = function(value){
	   if(value == undefined || value == null) return true;
	   else return false;
	};
	return Slide;
 }());
 //type normal/pingpong/infinite
 var banner = new Slide($("#ports"), {
	type:"fade",
 
	
	delay: 3000,//애니메이션 장면전환 대기 속도
	speed: 600,//애니메이션 속도
	hover: true,//hover 했을때 true면 멈춤
	pager: true,//pager가 true면 나타남
	pagerPos: "bottom",//pager 기준위치 (top/bottom)   
	pagerVal: "0px",//pager 기준위치로 부터의 값   
	pagerSymbol: "●",   //pager 심볼사용여부
	pagerDefClass: "w3-text-white",   //pager 기본 색상 심볼은 텍스트/미사용시 바탕컬러
	pagerActClass: "w3-text-red"   //선택된 pager 색상
 });


//weather

$("#modal_open").click(function () {
	$("#modal").show()
});
$("#modal_close").click(function () {
	$("#modal").hide()
});
$.ajax({
	url: "../json/city.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var city = data.cities;
		var html = "";
		for (var i = 0; i < city.length; i++) {
			html = '<option value="' + city[i].id + '">' + city[i].name + '</option>';
			$("#area").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});
$("#area").change(function () {
	var id = $(this).val();
	var city = $(this).find('option:selected').text();
	var appid = "02efdd64bdc14b279bc91d9247db4722";
	var units = "metric";
	var dt = new Date();
	var date = dt.getFullYear() + "년 " + (dt.getMonth() + 1) + "월 " + dt.getDate() + "일";
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather",
		type: "get",
		dataType: "json",
		data: {
			id: id,
			appid: appid,
			units: units
		},
		success: function (data) {
			$(".dl_icon").attr("src", "../img/weather/" + data.weather[0].icon + ".png");
			$(".dl_area > span").html(city);
			$(".dl_date").html(date);
			$(".dl_temp").html(data.main.temp + '℃ (최고:' + data.main.temp_max + '℃ / 최저:' + data.main.temp_min + '℃)');
			$(".dl_desc").html(data.weather[0].description);
			$("#modal").hide();
		},
		error: function (xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/forecast",
		type: "get",
		dataType: "json",
		data: {
			id: id,
			appid: appid,
			units: units
		},
		success: function (data) {
			$(".weekly").empty/*append 정보 리셋 */();
			for (var i = 0; i < data.cnt; i++) {
				html = '<li class="clear">';
				html += '<img src="../img/icon/' + data.list[i].weather[0].icon + '.png" class="img wk_icon">';
				html += '<ul>';
				html += '<li class="wk_area">' + city + '</li>';
				html += '<li class="wk_date">' + data.list[i].dt_txt + '</li>';
				html += '<li class="wk_temp">' + data.list[i].main.temp + '℃</li>';
				html += '<li class="wk_desc">' + data.list[i].weather[0].description + '</li>';
				html += '</ul>';
				html += '</li>';
				$(".weekly").append(html);
			}
		},
		error: function (xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
});
