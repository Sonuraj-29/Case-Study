var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var myArr = JSON.parse(this.responseText);
        console.log('1')
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
    console.log('2')
document.getElementById('dataDisp').innerHTML = data;
}

if(xhttp.readyState==4){

    console.log('3')
    document.getElementsByClassName('check').addEventListener("change",function(){
        var c = 0;
        for(i=0;i<input.length;i++){
            if(input[i].checked == true){
                c++;
                console.log(c);
            }
        }
    })
}
