let images = ["/images/Budapest10.jpg","/images/Finale430.jpg","/images/Lausitzring12.jpg","/images/NBR10.jpg"];
let pageCounter = 0;

let loadPhoto = (photoNumber) => {
    $("#photo").attr('src', images[photoNumber]);
}

loadPhoto(pageCounter);

$(".previous").click(() => {
    if(pageCounter>0){
        pageCounter--;
    }else{
        pageCounter = images.length - 1;
    }
    loadPhoto(pageCounter);
})

$(".next").click(() => {
    if(pageCounter<images.length-1){
        pageCounter++;
    }else{
        pageCounter = 0;
    }
    loadPhoto(pageCounter);
})
