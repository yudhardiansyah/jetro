// JavaScript Document

$(document).ready(function(e) {
	$("li.floatL:nth-child(1)").addClass("current");
    $("li.floatL:nth-child(2)").click(function(){
		$(".new").hide();
		$('#portfolio-filter ul li.current').removeClass('current');
		$(this).addClass("current");
		$('#portfolio-filter ul li.current').style.color = "white";
	});
	$("li.floatL:nth-child(3)").click(function(){
		$(".new").hide();
		$('#portfolio-filter ul li.current').removeClass('current');
		$(this).addClass("current");
	});
	$("li.floatL:nth-child(4)").click(function(){
		$(".new").hide();
		$('#portfolio-filter ul li.current').removeClass('current');
		$(this).addClass("current");
	});
	$("li.floatL:nth-child(5)").click(function(){
		$(".new").hide();
		$('#portfolio-filter ul li.current').removeClass('current');
		$(this).addClass("current");
	});
});
