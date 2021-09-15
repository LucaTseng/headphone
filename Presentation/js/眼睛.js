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