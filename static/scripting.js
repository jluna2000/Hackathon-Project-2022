
// app.py

// This file is responsible for the communication between the server of this web application and the front end.
// It receives data from the other files in this project to run the web application smoothly.

// Jesse Luna Discord: moldybread Github: jluna2000
// Eric Solorio Discord: solo408#4764 Github: ericsolorio
// Julian Grado Discord: StillJulez#9752 Github: JulesFam42
// Natalie Diaz Discord: nati#2538 Github: nataliediaz1

function showInfo(product){
    var xhttp = new XMLHttpRequest();
    var method = "GET";
    var url = "https://world.openfoodfacts.org/api/v0/product/" + product + ".json";
    var async = true;
    xhttp.open(method, url, async);
    xhttp.onload = function(){
        getIngredients(this.responseText);
    }
    xhttp.send();
}

function getIngredients(fullInfo){
    var xhttp = new XMLHttpRequest();
    var method = "POST";
    var url = "http://127.0.0.1:5000/data";
    var async = true;
    xhttp.open(method, url, async);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var dicInfo = fullInfo;
    xhttp.send(JSON.stringify(dicInfo));
    xhttp.onload = function(){
        a = this.responseText;
        a = a.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');
        // str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        document.getElementById("demoList").innerHTML = a;
        document.getElementById("demo").value = this.responseText;
    }
}