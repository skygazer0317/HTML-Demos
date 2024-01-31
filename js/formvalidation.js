document.getElementById('myform').addEventListener("submit",function(event){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const phonenumber=document.getElementById('phonenumber').value;

    if(name===""){
        document.getElementById('nameErr').innerHTML='*Name is required'
        event.preventDefault();// to prevent default form submission
    }
    if(email===""){
        document.getElementById('emailErr').innerHTML='*email is required'
        event.preventDefault();// to prevent default form submission
    }
    else{
        const emailpattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if(!emailpattern.test(email)){
            document.getElementById('emailErr').innerHTML='*email is not valid'
            event.preventDefault();   
        }
    }
    if(password===""){
        document.getElementById('pwdErr').innerHTML='*password is required'
        event.preventDefault();// to prevent default form submission
    }
    else{
        const passwordpattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(!passwordpattern.test(password)){
            document.getElementById('pwdErr').innerHTML='*password is not valid'
            event.preventDefault();  
        }
    }
    if(phonenumber===""){
        document.getElementById('phonenumberErr').innerHTML='*phonenumber is required'
        event.preventDefault();// to prevent default form submission
    }
    else{
        const phnopattern=/^[0-9]{10}$///regular
        if(!phnopattern.test(phonenumber)){
            document.getElementById('phonenumberErr').innerHTML="*enter the valid phone number"
            event.preventDefault();  
        }
      
    }
})