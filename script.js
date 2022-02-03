$(".heads").click(function(){
    $(".pg1").hide();
    $(".event1").hide();
    $(".pg2").show();
});

$(".tails").click(function(){
    $(".pg1").hide();
    $(".event1").hide();
    $(".pg3").show();
});

$(".htoss").dblclick(function(){
    $(".pg2").fadeOut();
    $(".pg4").show();
    $(".event2").show();
});

$(".ttoss").dblclick(function(){
    $(".pg3").fadeOut();
    $(".pg9").show();
    $(".event3").show();
});

$(".prun").click(function(){
    $(".event2").hide();
    $(".pg4").hide();
    $(".pg5").slideDown();
});

$(".prunphoto").click(function(){
    $(".pg5").hide();
    $(".pg6").fadeIn();
});

$(".ppass").click(function(){
    $(".event2").hide();
    $(".pg4").hide();
    $(".pg7").slideDown();
});

$(".ppassphoto").click(function(){
    $(".pg7").hide();
    $(".pg8").fadeIn();
});

$(".grun").click(function(){
    $(".event3").hide();
    $(".pg9").hide();
    $(".pg10").slideDown();
});

$(".grunphoto").click(function(){
    $(".pg10").hide();
    $(".pg11").fadeIn();
});

$(".gpass").click(function(){
    $(".event3").hide();
    $(".pg9").hide();
    $(".pg12").slideDown();
});

$(".gpassphoto").click(function(){
    $(".pg12").hide();
    $(".pg13").fadeIn();
});
