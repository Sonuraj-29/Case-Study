
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var myArr = JSON.parse(this.responseText);
        tableEntry(myArr);
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

function tableEntry(x){
    
    var data = "";
    for(i=0;i<x.length;i++){
        if(x[i].completed==true){
            data += `<tr><td class="text-center">${x[i].id}</td><td>${x[i].title}</td><td class="text-center"><input type="checkbox" checked disabled></td></tr>`;
        }
        else{
            data += `<tr><td class="text-center">${x[i].id}</td><td>${x[i].title}</td><td class="text-center"><input class="check" type="checkbox"></td></tr>`;
        }
    }
        
    document.getElementById('dataDisp').innerHTML = data;

    var checkBox = document.getElementsByClassName("check");
    count = 0;
    for(i=0;i<checkBox.length;i++){
        checkBox[i].addEventListener('change',function(){
            if(this.checked){
                count++;
                countCheck();
            }
            else{
                count--;
            }
        })
    }
}

function countCheck(){
    
    let promise = new Promise(function(resolve){
        if(count==5){
            resolve("Successfully completed 5 tasks. Keep going.")
        }
    })
    promise.then(function(success){
        alert(success);
    })
}