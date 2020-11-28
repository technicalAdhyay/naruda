var allMenuDropdownButtons = document.querySelectorAll('.menu__container--superitem.sub');
var allMenuSubitemBoxes = document.querySelectorAll('.menu__container--subitembox');

Array.from(allMenuDropdownButtons).forEach( (button,index) => {
    button.addEventListener('click',function(){
        
        if( allMenuSubitemBoxes[index].classList.contains('select') ){
            Array.from( allMenuSubitemBoxes ).forEach( box => {
                box.classList.remove('select');
                box.style.height = '0px';
            } );
        }else{
            Array.from( allMenuSubitemBoxes ).forEach( box => {
                box.classList.remove('select');
                box.style.height = '0px';
            } );
            allMenuSubitemBoxes[index].classList.add('select');
            allMenuSubitemBoxes[index].style.height = allMenuSubitemBoxes[index].scrollHeight+'px';
        }
    });
} );

var menuButton = document.querySelector('.header__mobilemenu');
function menuClose(){
    menuButton.classList.remove('select');
    document.querySelector('.menu').classList.remove('select');
}

function menuOpen(){
    menuButton.classList.add('select');
    document.querySelector('.menu').classList.add('select');
}


menuButton.addEventListener( 'click',function(){
    if( menuButton.classList.contains('select') ){
        menuClose();
    }else{
        menuOpen();
    }
} );

document.querySelector('.menu__close').addEventListener('click',function(){
    menuClose();
});