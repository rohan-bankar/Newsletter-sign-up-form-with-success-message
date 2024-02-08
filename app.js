const emailId = document.querySelector(".email");

function validation(email){
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.value.match(format)){
        document.querySelector(".email-error").style.display = 'block';
        document.querySelector(".email").style.borderColor = 'hsl(4, 100%, 67%)';
    }else{
        document.querySelector(".thankyou-card").style.display = 'block';
        document.querySelector(".container").style.display = 'none';
        document.querySelector(".userEmail").innerHTML = `${email.value}`;
    }
}

function close(){
    document.querySelector(".thankyou-card").style.display = 'none';
    document.querySelector(".container").style.display = 'block';
    document.querySelector(".container").style.display = 'flex'; 
    document.querySelector(".container").style.flexDirection = 'row';

}

document.querySelector(".btn").onclick = function(){
    validation(emailId);
}

document.querySelector(".btn-message").onclick = function(){
    close();
}
