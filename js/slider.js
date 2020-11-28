var allSliders = document.querySelectorAll('.slider');
var sliderMouse = {
    x:0,
    y:0
}

Array.from(allSliders).forEach( (slider,index) => {
    slider.addEventListener( 'mouseover',function(e){
        sliderMouse.x = e.clientX;
        sliderMouse.y = e.clientY;
        var allParallaxObjects = slider.querySelectorAll('.slider__parallax');
        Array.from(allParallaxObjects).forEach( (obj,i) => {
            let left = obj.dataset.left;
            let parallaxRatio = obj.dataset.parallax * parseInt(sliderMouse.x);
            obj.style.left = "calc("+left+" + "+ -1*parallaxRatio +"px)";
        } );
    } );
    slider.addEventListener( 'mousemove',function(e){
        sliderMouse.x = e.clientX;
        sliderMouse.y = e.clientY;
        var allParallaxObjects = slider.querySelectorAll('.slider__parallax');
        Array.from(allParallaxObjects).forEach( (obj,i) => {
            let left = obj.dataset.left;
            let parallaxRatio = obj.dataset.parallax * parseInt(sliderMouse.x);
            obj.style.left = "calc("+left+" + "+ -1*parallaxRatio +"px)";
        } );
    } );
    slider.addEventListener('mouseout',function(){
        var allParallaxObjects = slider.querySelectorAll('.slider__parallax');
        Array.from(allParallaxObjects).forEach( (obj,i) => {
            let left = obj.dataset.left;
            let parallaxRatio = obj.dataset.parallax * parseInt(sliderMouse.x);
            obj.style.left = "calc("+left+" + "+ 0 +"px)";
        } );
    });
} );