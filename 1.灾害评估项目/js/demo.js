$(function(){
    $(".pic ul li").mouseover(function(){
        $(this).animate({width:"789px"},800).siblings().animate({width:"100px"},800);
    });
});