$(function(){
    $.ajax({
        url:"./json/story.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(var i in data){
                    $('.story-section').eq(i).find("img").attr("src",data[i].storypoto);
                    $('.story-section').eq(i).find("h5").children("a").text(data[i].storysub);
                    $('.story-section').eq(i).find("p").children("a").text(data[i].storywrite);
                }
            }
        }
    });
});