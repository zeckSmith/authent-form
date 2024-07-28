
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

const signIn = document.querySelector('.signin');
const signUp = document.querySelector('.signup');

const ghostForm = document.querySelector(".ghost")

// txt.addEventListener("click", () => {
//     console.log('kkkk !');
// })



ghostForm.addEventListener("click", () => {

    console.log("echo !");
    if (signUp.classList.contains('view')){
        signUp.classList.remove('view');
        signIn.classList.add('view');
    }else if(signIn.classList.contains('view')){
        signIn.classList.remove('view');
        signUp.classList.add('view');
    }

})
// console.log(variable);
// Select elements for 

// console.log(signUp);



signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});



