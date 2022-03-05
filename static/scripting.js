function showInfo(product){
    const xhttp = new XMLHttpRequest();
    const method = "GET";
    const url = "https://world.openfoodfacts.org/api/v0/product/" + product + ".json";
    const async = true;
    xhttp.open(method, url, async);
    xhttp.send();
    xhttp.onload = function(){
        document.getElementById("demo").innerHTML = this.responseText;
    }
}