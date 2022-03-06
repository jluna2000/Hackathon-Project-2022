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
        document.getElementById("demoList").innerHTML = this.responseText;
        document.getElementById("demo").value = this.responseText;
    }
}