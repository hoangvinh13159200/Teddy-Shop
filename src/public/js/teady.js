function dangkyemail(){
    alert("đăng ký thành công !")
}
var add2cart

function themvaogiohang(){
    alert("thêm vào giỏ hàng thành công");
}


var x = document.getElementById('money')
var text = x.textContent;
var mon = parseInt(text)
function muangay(){
    alert("số tiền cần thanh toán là : " + mon * 1000 * num.value +" đ\n " )
}
var slideIndex = 1;
showSlides(slideIndex);
            
function plusSlides(n) {
   showSlides(slideIndex += n);
}
          
function currentSlide(n) {
    showSlides(slideIndex = n);
}
            
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}