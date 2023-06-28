$(function(){
    $.ajax({
        url:"./json/kidsmenu.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(var i in data){
                    $('.brandbox').eq(i).find("img").attr("src",data[i].src);
                    $('.brandbox').eq(i).find("strong").eq(0).text(data[i].menuname);
                    $('.brandbox').eq(i).find("p").text(data[i].menusub);
                    $('.brandbox').eq(i).find("strong").eq(1).html(data[i].price+"<span>원</span>");
                }
            }
        }
    });

});