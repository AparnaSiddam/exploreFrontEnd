const msg = document.querySelector('.message');
const msgBox = document.querySelector('.messageBox');
const close = document.querySelector('.close');
const close1 = document.querySelector('.close1');
const modal = document.querySelector('.modal');
const reg = document.querySelector('#reg');

msg.addEventListener('click', function(e){
    msgBox.style.display = 'block';
});

close.addEventListener('click', function(e){
    msgBox.style.display = 'none';
});


    reg.addEventListener('click', function(e){
    
        modal.className += ' modal-right';
       });
       
    close1.addEventListener('click', function(e){
        modal.className = modal.className.replace(' modal-right', '');
    });
    
    




