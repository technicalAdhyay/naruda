var allAccordionBoxes = document.querySelectorAll('.shop__filter--accordionbox');
var allAccordionFilterBoxes = document.querySelectorAll('.shop__filter--filterbox');
var allAccordionFilter = document.querySelectorAll('.shop__filter--filter');

Array.from(allAccordionBoxes).forEach( (box,index) => {
    box.addEventListener('click',function(){
        let filterBox = allAccordionFilterBoxes[index];
        if(!filterBox.classList.contains('select')){
            filterBox.classList.add('select');
            filterBox.style.height = filterBox.scrollHeight+'px';
        }else{
            filterBox.classList.remove('select');
            filterBox.style.height = '0px';
        }
    });
} );

Array.from(allAccordionFilter).forEach( (filter,index) => {
    filter.addEventListener('click',function(){
        if( filter.classList.contains('select') ){
            filter.classList.remove('select');
        }else{
            filter.classList.add('select');
        }
    });
} );