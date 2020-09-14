$(document).ready(function(){
    $(".product img").click(function(){
        $("#mainimg").attr("src", $(this).attr('src'))
    })
})