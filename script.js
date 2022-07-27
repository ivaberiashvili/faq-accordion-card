const  allQuestions = document.querySelectorAll('.faq');

allQuestions.forEach(faq => {
    faq.addEventListener('click',(event)=>{
    // * if you want to allow only one active tabs.
    // remove all active elements 
        let active = document.querySelector('.active'); 
        if(active){
            active.classList.remove('active');
        }
    // toggle active, if clicked element isn't active
        if(faq !== active){
            faq.classList.toggle('active'); 
        }
    });
});

