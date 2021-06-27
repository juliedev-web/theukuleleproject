app = {
    sendForm = () => {

        const buttonForm = document.querySelector('.form'); 
        buttonForm.addEventListener('click', showMessage);
       
    },

    showMessage: () => {
        const message = document.querySelector('.sendform');
        message.classList.toggle('visible');
    }

}

