
let moon = document.getElementById("moon")
let sky = document.getElementById("sky")
let building = document.getElementById("building")
let text = document.getElementById("tonighttext")

let progress = document.getElementById('progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight
function listenScroll(){
    var value = window.scrollY;
    moon.style.left =  value * 0.7+ 'px';
    moon.style.top =  value * 0.7+ 'px';

    sky.style.top =  value * 0.5 + 'px';  
    building.style.top = - value * 0.001 + 'px'; 
    text.style.top =  value * 0.7 + 'px';
    //正value會往上 負會往下 數字愈少走得越慢
    let progressHeight =(window.pageYOffset /totalHeight)*100;
    
    progressBar.style.height = progressHeight+ '%';
}
function mOOnface() {
    document.getElementById('moon').style.background = "#ffcd00"
}

// var eye = document.getElementsByClassName("eye");
// document.onmousemove = function () {
// 	var x = (event.clientX * 8) / window.innerWidth + "%";
// 	var y = (event.clientY * 8) / window.innerHeight + "%";

// 	for (var i = 0; i < 2; i++) {
// 		eye[i].style.left = x;
// 		eye[i].style.top = y;
// 		eye[i].style.transform = "translate(" + x + "," + y + ")";
// 	}
// };

//下面這一段 是我在網路上找到的 他應該可以讓小眼睛跟著使用者的滑鼠移動 
document.querySelector(".container").addEventListener('mousemove', eyeball);
function eyeball(){
    var eye = document.querySelectorAll(".eye");
    
    eye.forEach(function(eye){
        let x =(eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        console.log(x)
        let y =(eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        console.log(y)
        let radian = Math.atan2(event.pageX - x  , event.pageY - y);
        console.log(radian)
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        console.log(rot)
        eye.style.transform = 'rotate(' + rot + 'deg)';
   
    })
}



window.addEventListener("scroll",listenScroll)

function toggle(){
    var header =document.getElementById("header")
    header.classList.toggle("active")
}