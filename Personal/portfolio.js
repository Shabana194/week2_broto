let username = document.getElementById("username");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    
    let error=document.getElementsByClassName("error");
    let show=document.getElementById("show");

    
function validate()
{
    // usernamae validation
    if(username.value == "")
    {
       error[0].innerHTML = "You can't leave this section blank";
       document.submit-form.username.focus();
       return false;
    }
    else if(!isNaN(username.value))
    {
        error[0].innerHTML = "You cannot enter numbers in this section";
        document.submit-form.username.focus();
        return false;
    }

    else if(username.value.length <= 3)
    {
        error[0].innerHTML = "Enter your full name";
        document.submit-form.username.focus();
        return false;
    }
    else
    {
        error[0].innerHTML = "";
    }

    // email validation
    if(email.value == "")
    {
       error[1].innerHTML = "You can't leave this section blank";
       document.submit-form.email.focus();
       return false;
    }
    else if(email.value.indexOf('@') <= 0)
    {
        error[1].innerHTML = "please use an '@' in the email";
        document.submit-form.email.focus();
        return false;
    }
    else if((email.value.charAt(email.value.length-4)!='.') && (email.value.charAt(email.value.length-3)!='.'))
    {
        error[1].innerHTML = "please enter a valid email";
        document.submit-form.email.focus();
        return false;
    }
    else
    {
        error[1].innerHTML = "";
    }
    
    // Subject validation 
    if(subject.value == "")
    {
       error[2].innerHTML = "You can't leave this section blank";
       document.submit-form.subject.focus();
       return false;
    }
    else
    {
        error[2].innerHTML = "";
    }

    // message validation
    if(message.value == "")
    {
       error[3].innerHTML = "You can't leave this section blank";
       document.submit-form.message.focus();
       return false;
    }
    else if(message.value.length <= 5)
    {
        error[3].innerHTML = "Enter minimum of 5 characters";
        document.submit-form.message.focus();
        return false;
    }
    else
    {
        error[3].innerHTML = "";
    }
    
    return true;
}

// submission

$("#submit-form").submit((e)=>{
    e.preventDefault();
    let validation = validate();

    if(validation)
    {
    $.ajax({
        // url:"https://script.google.com/macros/s/AKfycbysWpfZFW6YK5F3g5yT_cbIM3G_TgcyMkSLLUZhfeEAZA5pW93dc74m8c6pbpowk-FW/exec",
        url:"https://script.google.com/macros/s/AKfycbyRhdy4-oTkd1a2NSR7jmirQNJDj_eohXi02TsTqDSuTw6pL2q13G0I0YtPCYlHgYbd/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            // alert("Form submitted successfully")
            show.style.display = "block";
            //setTimeout(() => {
                //window.location.reload()
           // },3000);
            
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
        })}
})

