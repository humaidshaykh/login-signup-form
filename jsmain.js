// Registration Sign Up
function SUBMIT(){
    var registerUser = document.getElementById('username').value;
    var registeremail = document.getElementById('Useremail').value;
    var registerPassword = document.getElementById('Userpassword').value;
    var registerNic = document.getElementById('usernic').value;

    if(registerUser.length > 6){
        if(registeremail.length > 4){
            if(registerPassword.length > 3){
                if(registerNic > 9){
                    document.getElementById('username').value="";
                    document.getElementById('Useremail').value="";
                    document.getElementById('Userpassword').value="";
                    document.getElementById('usernic').value="";
                    alert("Registration Succesfull");
                    window.location.href = 'index.html';
                }else
                alert("Fill Nic Correctly");
            }else{
                alert("Create Password Above 3 letters");
            }
        }else{
            alert("Fill email correctly");
        }
    }else{
        alert("Fill Username above 6 letters");
    }



localStorage.setItem("localUsername",registerUser);
localStorage.setItem("localemail",registeremail);
localStorage.setItem("localpass",registerPassword);
localStorage.setItem("localnic",registerNic);
}

// Registration Login

function LOGIN(){
    var registeremail = document.getElementById("Useremail").value;
    var registerPassword = document.getElementById("Userpassword").value;

    var localemail = localStorage.getItem("localemail");
    var localpass = localStorage.getItem("localpass");


    if(registeremail == localemail && registerPassword == localpass){
        window.location.href = "dashboard.html";
    }else{
        alert("Kindly fill correct credientials");
    }


}

function logout(){
    window.location.href = "index.html";
}
