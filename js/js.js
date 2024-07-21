let imgs = document.getElementsByClassName("pictures");
let main_pic = document.querySelector(".main_pic img");


for(let i = 0 ; i< imgs.length ; i++){

    imgs[i].addEventListener("click" , function(eventInfo){
     let imgSrc =   eventInfo.target.getAttribute("src");
        main_pic.setAttribute("src" , imgSrc)

    })
} 

