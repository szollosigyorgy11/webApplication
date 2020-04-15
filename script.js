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

let insert =  '';
for (let i = 0; i < datas.length; i++) {
    insert = insert + '<div class="thumbnail" id="div'+i+'"> <img class="imgs" data-number="'+i+'" src="'+datas[i].photo+'"> </div>';
}

$(".menu").html(insert);

$(".thumbnail").css("width","100px");
$(".thumbnail").css("height","50px");
$(".thumbnail").css("padding","3px");
$(".thumbnail").css("background","white");
$(".thumbnail").css("border","3px");
$(".thumbnail").css("border-radius","3px");
$(".thumbnail").css("margin","0px 10px");

$(".imgs").css("width","100%");
$(".imgs").css("height","100%");

$(".imgs").click(() => {
    pageCounter = $(event.target).attr("data-number");
    loadPhoto(pageCounter);
})