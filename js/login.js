const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');


const ValidateInput = ({ target}) => {
    if(target.value.length > 4){
        button.removeAttribute('disabled');
        return;
    }else{
        button.setAttribute('disabled', '');
    }
    


}

const hendleSubmit = () =>{
    event.preventDefault(); // previne o relod da pagina que é automatico
   
    localStorage.setItem('player', input.value);// necessario colocar a chave e o parametro a ser salvo
    window.location = 'pages/game.html';
}


input.addEventListener('input', ValidateInput);
form.addEventListener('submit', hendleSubmit);
