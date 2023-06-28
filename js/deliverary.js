$(function(){
    $.ajax({
        url:"./json/deliverary.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(var i in data){
                    $('.brandbox2').eq(i).find("img").attr("src",data[i].src);
                    $('.brandbox2').eq(i).find("strong").eq(0).text(data[i].title);
                    $('.brandbox2').eq(i).find("p").text(data[i].titlesub);
                    $('.brandbox2').eq(i).find("strong").eq(1).html(data[i].price+"<span>원</span>");
                    $('.brandbox2').eq(i).find("h3").text(data[i].pricesub);
                }
            }
        }
    });

});