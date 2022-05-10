// validate function
function validate(callback){

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var error = document.getElementById('error');

    if(username == "admin" && password == 12345){
        callback();
    }
    else{
        error.classList.remove("hidden");
        setTimeout(errDis,2500);
    }
}

function errDis(){
    error.classList.add("hidden");
}

function redirect(){
        window.location.href = "./main/main.html";
}

document.getElementById("formDet").addEventListener("submit",function(event){
    event.preventDefault();
    validate(redirect);
})






