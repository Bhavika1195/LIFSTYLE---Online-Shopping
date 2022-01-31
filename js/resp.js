burger =  document.querySelector('.burger') /* query selector will take the first element */
navbar=  document.querySelector('.navbar')
navList =  document.querySelector('.nav-list')
rightNav =  document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp'); 

})

/* The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.     The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event The second parameter is the function we want to call when the event occurs. The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional. */
