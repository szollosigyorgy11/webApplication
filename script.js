let datas = [];
let images = ["/images/Budapest10.jpg","/images/Finale430.jpg","/images/Lausitzring12.jpg","/images/NBR10.jpg"];
let titles = ["Budapest","Hochenheim-Final","Lausitzring","Nürburgring"];
let discriptions = ["This race took place in the amazing Hungaroring, near to Budapest",0,0,0];
let dataLoad = ((number, pic, tit, dis) => {
    let data = {
    id: number,
    photo: pic,
    title: tit,
    discription: dis
    };
    return data;
})

for (let i = 0; i < images.length; i++) {
    datas[i] = dataLoad(i,images[i], titles[i], discriptions[i]);
}

let pageCounter = 0;

let loadPhoto = (photoNumber) => {
    $("#photo").attr('src', datas[photoNumber].photo);
    $("#photo-title").text(datas[photoNumber].title);
    $("#photo-description").text(datas[photoNumber].discription);
}

loadPhoto(pageCounter);

$(".previous").click(() => {
    if(pageCounter>0){
        pageCounter--;
    }else{
        pageCounter = datas.length - 1;
    }
    loadPhoto(pageCounter);
})

$(".next").click(() => {
    if(pageCounter<datas.length-1){
        pageCounter++;
    }else{
        pageCounter = 0;
    }
    loadPhoto(pageCounter);
})

let insert =  0;
for (let i = 0; i < datas.length; i++) {
    insert = insert + '<div class="thumbnail" id="div'+i+'"> <img class="imgs" id="img'+i+'" src="'+datas[i].photo+'"> </div>';
    
}

$(".menu").html(insert);

