let usernameRef=document.querySelector(".username");
let passwordRef=document.querySelector(".password");
let button=document.querySelector(".submit");
let message=document.querySelector(".message-ref");

/*create a variable to contain if the username is valid*/

let isUsernameValid=() =>{
    /* username should contain more than 3 characters and begin wiht alphabetic character. Can contain numbers*/

    /* we need to validate this with regex (regular expression)*/
    const usernameRegex= /^[a-zA-Z] [a-zA-Z0-9]{3,32} /gi;
    return usernameRegex.test(usernameRef.value);
};

let isPasswordValid=() =>{
    /*Password should be at least 8 characters long, contain 1 number, 1 special simbol, 1 lowercase, 1 uppercase.*/

    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(passwordRef.value);
};

//add a event in the input username

usernameRef.addEventListener("input", () => {

    if (!isUsernameValid()){ /* if not true*/
        message.style.visibility="hidden";
        usernameRef.style.cssText="border-color: #fe2e2e; background-color:  #ffc2c2";
    }else{
        usernameRef.style.cssText="border-color: #34bd34; background-color:  #c2ffc2";
    }
});

passwordRef.addEventListener("input", () => {

    /*currently not working, it goes all the time to red and does not valid any input*/
    if (!isPasswordValid()){ /* if not true*/
        message.style.visibility="hidden";
        passwordRef.style.cssText="border-color: #fe2e2e; background-color:  #ffc2c2";
    }else{
        passwordRef.style.cssText="border-color: #34bd34; background-color:  #c2ffc2";
    }
});

button.addEventListener("mouseover", () => {
    //if either password or username is invalid then do this..
    if (!isPasswordValid() || !isUsernameValid()){
        //get the current position of submit btn
        let containerRect=document.querySelector(".container").getBoundingClientRect();
        let submitRect=button.getBoundingClientRect();
        let offset=submitRect.left-containerRect.left;
        console.log(offset)
        //if the button is on the left hand side...move it to the right hand side
        if(offset<=100){
            button.style.transform="translateX(16.25rem)";
        }else{
            button.style.transform="translateX(0)";
        }
    }
});

button.addEventListener("click", () =>{
    message.style.visibility="visible";
})