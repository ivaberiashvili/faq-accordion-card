const  allQuestions = document.querySelectorAll('.faq');

allQuestions.forEach(faq => {
    faq.addEventListener('click',()=>{
    // * if you want to allow only one active tabs. 
        let active = document.querySelector('.active'); 
        if(active){
            active.classList.remove('active');
        }
    // * if you want to allow n nuber of active tabs. 
        // let actives = document.querySelectorAll('.active'); 
        // if(actives.length > 0){
        //     console.log(actives.length);
        //     actives.forEach(active => {
        //         active.classList.remove('active');
        //     })
        // } 

        faq.classList.toggle('active'); 
    });
});

