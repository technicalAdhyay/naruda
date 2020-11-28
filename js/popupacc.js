var loginbutton = document.querySelector('.header__accountbox--login');
var popupacc = document.querySelector('.popupacc');
let isPopupacc = false;

loginbutton.addEventListener( 'mouseover',function(){
    let left = loginbutton.getBoundingClientRect().left + loginbutton.getBoundingClientRect().width/2;
    let top = loginbutton.getBoundingClientRect().top + loginbutton.getBoundingClientRect().height*2;
    popupacc.style.left = left+'px';
    popupacc.style.top = top+'px';
    popupacc.classList.add('select');
} );

popupacc.addEventListener( 'mouseover',function(){
    let left = loginbutton.getBoundingClientRect().left + loginbutton.getBoundingClientRect().width/2;
    let top = loginbutton.getBoundingClientRect().top + loginbutton.getBoundingClientRect().height*2;
    popupacc.style.left = left+'px';
    popupacc.style.top = top+'px';
    popupacc.classList.add('select');
    isPopupacc = true;
} );

loginbutton.addEventListener('mouseleave',function(){
    setTimeout( function(){
        console.log(isPopupacc);
        if(isPopupacc == false){
            popupacc.classList.remove('select');
        }
    },500 )
});
popupacc.addEventListener('mouseleave',function(){
    isPopupacc = false;
    popupacc.classList.remove('select');
});