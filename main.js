 
let photos = ["images/image-tanya.jpg" , "images/image-john.jpg"]

let descrip =[];
let tanya_descrip =  "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future." 
descrip.push(tanya_descrip);
let john_decrip = "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer"
descrip.push(john_decrip);

let names = [];
let tanya = "Tanya Sinclair, UX Engineer"
names.push(tanya);
let john = "John Tarkpor, Junior Front-end Developer"
names.push(john);

let len = photos.length


let i =1;

// document.querySelector(".name1").style.color = "red" ;

document.querySelector(".btn2").addEventListener("click" , function(){
   
    document.querySelector(".pic1 img").setAttribute("src" , photos[Math.abs(i%len)]);
    
    document.querySelector(".test1 p").textContent = descrip[Math.abs(i%len)];

    document.querySelector(".name1").textContent = names[Math.abs(i%len)];

    i++;    

});

document.querySelector(".btn1").addEventListener("click" , function(){
    
    document.querySelector(".pic1 img").setAttribute("src" , photos[Math.abs(i%len)]);
    
    document.querySelector(".test1 p").textContent = descrip[Math.abs(i%len)];

    document.querySelector(".name1").textContent = names[Math.abs(i%len)];

    i--;

});




document.addEventListener("keydown" ,function(event){
    if(event.key == "ArrowRight"){
        document.querySelector(".btn1").click();
    }
    else if(event.key == "ArrowLeft"){
        document.querySelector(".btn2").click();    
    }

});


