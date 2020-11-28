var allDropdowns = document.querySelectorAll('.dropdown');
var allNavigationDropdowns = document.querySelectorAll('.navigation__menu--dropdown');
var dropdownActive = false;
Array.from(allNavigationDropdowns).forEach( (link,index) => {
    link.addEventListener( 'mouseover',function(){
        dropdownActive = true;
        let dropdown = allDropdowns[index];
        Array.from(allDropdowns).forEach(d=>{d.classList.remove('select')});
        dropdown.classList.add('select');
        dropdown.style.height = dropdown.scrollHeight+'px';
        dropdown.style.top = link.getBoundingClientRect().top+link.getBoundingClientRect().height+'px';
        dropdown.style.left = link.getBoundingClientRect().left+(link.getBoundingClientRect().width/5)-20+'px';
        // if( index+1 === allNavigationDropdowns.length ){
        //     dropdown.style.left = link.getBoundingClientRect().left-link.getBoundingClientRect().width+30+'px';
        // }else{
            
        // }
    } );
    link.addEventListener( 'mouseout',function(){
        dropdownActive = false;
        setTimeout( function(){
            if(dropdownActive === false){
                Array.from(allDropdowns).forEach(d=>{d.classList.remove('select')});
            }
        },300 );
    } );
} );

Array.from(allDropdowns).forEach( (dropdown,index) => {
    dropdown.addEventListener('mouseover',function(){
        let link = allNavigationDropdowns[index];
        dropdownActive = true;
        dropdown.classList.add('select');
        dropdown.style.height = dropdown.scrollHeight+'px';
        dropdown.style.top = link.getBoundingClientRect().top+link.getBoundingClientRect().height+'px';
        dropdown.style.left = link.getBoundingClientRect().left-30+'px';
        // if( index+1 === allNavigationDropdowns.length ){
        //     dropdown.style.left = link.getBoundingClientRect().left-link.getBoundingClientRect().width+10+'px';
        // }else{
            
        // }
    });
    dropdown.addEventListener('mouseout',function(){
        dropdownActive = false;
        Array.from(allDropdowns).forEach(d=>{d.classList.remove('select')});
    });
} );