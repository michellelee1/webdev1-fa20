let wasClicked = false;

$('.circle').click(function(){
    
    if(wasClicked) {
        $('.circle').css("border-radius", "75px")
    }else {
        $('.circle').css("border-radius", "25px") 
    }

    let newBox = `<div class="circle"></div>`

$('body').append(newBox);


    wasClicked = !wasClicked;
})