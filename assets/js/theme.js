$(function(){var o,t=$(".sticky");t.length&&(o=t.data("offset")?t.data("offset"):t.offset().top,t.height());$(window).scrollTop();var i=$(window).height();$(document).height();$(window).bind("resize",function(){$(window).scrollTop(),i=$(window).height(),$(document).height(),t.css("max-height",i+"px")}),$(window).bind("scroll",function(){$(window).scrollTop()>o?t.addClass("fixed"):t.removeClass("fixed")})}),$("document").ready(function(){$("a[data-role='smoothscroll']").click(function(o){o.preventDefault();o=$($(this).attr("href")).offset().top-70;return $("body, html").animate({scrollTop:o},1e3),!1})}),$("document").ready(function(){var o=$(".back-to-top");$(window).scroll(function(){400<$(document).scrollTop()?o.css("visibility","visible"):$(document).scrollTop()<400&&o.css("visibility","hidden")}),o.click(function(){return $("html").animate({scrollTop:0},1e3),!1})}),$("document").ready(function(){$(window).on("load",function(){$(".loader-container").fadeOut()}),$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),(new WOW).init()});