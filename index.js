
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const ghostt = document.querySelector(".ghost");

signin = document.querySelector('.signin')
signup = document.querySelector('.signup')



console.log(signup, signin)
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

ghostt.addEventListener("click", () => {
    if (signup.classList.contains('view')){
        signup.classList.remove('view')
        signin.classList.add('view')
    }else if(signin.classList.contains('view')){
        signin.classList.remove('view')
        signup.classList.add('view')
    }

})

ghostt.addEventListener("click", ()=> {
    console.log("pre");
})

