var allProductsliders = document.querySelectorAll('.productslider__container--products');
Array.from(allProductsliders).forEach((slider,index) => {
    let buttons = slider.parentElement.querySelectorAll('.productslider__container--button');
    Array.from(buttons).forEach( (button,i) => {
        button.addEventListener('click',function(){
            let productWidth = document.querySelector('.product').getBoundingClientRect().width;
            let containerLeft = slider.getBoundingClientRect().left*-1 + (window.innerWidth - slider.parentElement.getBoundingClientRect().width)/2;
            let numberOfProducts = slider.childElementCount;
            let clientViewProducts = (slider.parentElement.getBoundingClientRect().width)/productWidth;
            let spaceLeft = slider.getBoundingClientRect().width + -1*containerLeft - clientViewProducts*productWidth ;
            
            if( i == 0 ){
                if( spaceLeft - productWidth  >= 0 ){
                    slider.style.left = -1*(containerLeft + productWidth)+'px';
                }else{
                    slider.style.left = -1*(containerLeft + spaceLeft)+'px';
                }
            }else{
                if( containerLeft - productWidth <= 0 ){
                    slider.style.left = '0px';
                }else{
                    slider.style.left = (-1*containerLeft + productWidth)+'px';
                }
            }
        });
    } );
});
var allProductOverlowSliders = document.querySelectorAll('.productslider__container');
Array.from(allProductOverlowSliders).forEach( (overflow,index) => {
    var allProductLinks = overflow.children[0].children;
    let cordinates = {
        x : undefined,
        drag: false,
        over: undefined,
        mouse: false
    };

    window.addEventListener('resize',function(){
        if(window.innerWidth > 450){
            overflow.children[0].style.left = '0px';
        }
    });
    
    overflow.children[0].addEventListener('mousedown',function(e){
        Array.from(allProductLinks).forEach(p=>p.addEventListener('click',e=>{e.preventDefault();}));
        if(true){
            e.preventDefault();
            cordinates.drag = true;
            cordinates.mouse = true;
            cordinates.x = e.pageX - overflow.children[0].getBoundingClientRect().left + overflow.getBoundingClientRect().left;
        }
    });
    overflow.children[0].addEventListener('touchstart',function(e){
        if(true){
            //e.preventDefault();
            cordinates.drag = true;
            cordinates.mouse = true;
            cordinates.x = e.changedTouches[0].pageX - overflow.children[0].getBoundingClientRect().left + overflow.getBoundingClientRect().left;
        }
    });
    overflow.children[0].addEventListener('mouseup',function(){
        if( cordinates.over == undefined ){
            Array.from(allProductLinks).forEach(p=>p.addEventListener('click',()=>{window.location.href=p.href;}));
        }
        cordinates.over = undefined;
        cordinates.drag = false;
        cordinates.mouse = false;
    });
    overflow.children[0].addEventListener('touchend',function(){
        cordinates.over = undefined;
        cordinates.drag = false;
        cordinates.mouse = false;
    });
    overflow.addEventListener( 'mouseleave',function(){
        if( cordinates.over == undefined ){
            Array.from(allProductLinks).forEach(p=>p.addEventListener('click',()=>{window.location.href=p.href;}));
        }
        cordinates.over = undefined;
        cordinates.mouse = false;
        cordinates.drag = false;
    } );
    overflow.children[0].addEventListener( 'mousemove',function(ev){
        ev.preventDefault();
        if( cordinates.mouse && cordinates.drag  && overflow.children[0].getBoundingClientRect().left <= 0 + overflow.getBoundingClientRect().left && overflow.children[0].getBoundingClientRect().left + overflow.getBoundingClientRect().left + 50 >= overflow.getBoundingClientRect().width - overflow.children[0].getBoundingClientRect().width ){
            cordinates.over = cordinates.x - ev.pageX;
            overflow.children[0].style.left = -1*cordinates.over +'px';
            if(-1*cordinates.over >= 0 - overflow.getBoundingClientRect().left){
                overflow.children[0].style.left = '0px';
            }else if(-1*cordinates.over < overflow.getBoundingClientRect().width - overflow.children[0].getBoundingClientRect().width + overflow.getBoundingClientRect().left){
                overflow.children[0].style.left = overflow.getBoundingClientRect().width - overflow.children[0].getBoundingClientRect().width+'px';
            }
        }
    } );
    overflow.children[0].addEventListener( 'touchmove',function(ev){
        
        if( cordinates.mouse && cordinates.drag  && overflow.children[0].getBoundingClientRect().left <= 0 + overflow.getBoundingClientRect().left && overflow.children[0].getBoundingClientRect().left + overflow.getBoundingClientRect().left + 50 >= overflow.getBoundingClientRect().width - overflow.children[0].getBoundingClientRect().width ){
            cordinates.over = cordinates.x - ev.changedTouches[0].pageX;
            overflow.children[0].style.left = -1*cordinates.over +'px';
            if(-1*cordinates.over >= 0 - overflow.getBoundingClientRect().left){
                overflow.children[0].style.left = '0px';
            }else if(-1*cordinates.over < overflow.getBoundingClientRect().width - overflow.children[0].getBoundingClientRect().width + overflow.getBoundingClientRect().left){
                overflow.children[0].style.left = overflow.getBoundingClientRect().width - overflow.children[0].getBoundingClientRect().width+'px';
            }
        }
    } );
    
} );