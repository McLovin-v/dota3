const qwertyu =document.getElementById('quas');
const video = document.getElementById ('quas1');
const video1 = document.querySelectorAll(".spell_video");
var videos ={
    "quas1":"quas",
    "wex1" :"wex",
    "exort1" :"exort",
    "invok1" :"invoke",
};
console.log(video1);
video1.forEach(image => { var id = image.getAttribute("to_video");
    image.addEventListener("mouseenter", function() {
        const quas1 =document.getElementById (id);    

        console.log(id);

         quas1.style.visibility="visible";
         quas1.muted= true
         quas1.play()
    });
    

image.addEventListener("mouseout", function() {
        
       

     

    document.getElementById(id).style.visibility="hidden";
});
});
 
