#
# app.py
#
# This file is responsible for the server of this web application.
# It receives data from the other files in this project to run the web application smoothly.
#
# Jesse Luna Discord: moldybread Github: jluna2000
# Eric Solorio Discord: solo408#4764 Github: ericsolorio
# Julian Grado Discord: StillJulez#9752 Github: JulesFam42
# Natalie Diaz Discord: nati#2538 Github: nataliediaz1
from flask import Flask, render_template, request, url_for, redirect
import json

app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def main():
    confirmation = ""
    if request.method == "POST":
        ingre = request.form["Ingredient"]
        fullDic = request.form["AllIngredients"]
        # fullDic = "Hello World"
        if ingre in fullDic:
            confirmation = "Ingredient " + ingre + " was found in this product"
        else:
            confirmation = "Ingredient " + ingre + " was NOT found in this product"
        print(confirmation)
        print(fullDic)
        # return redirect(url_for("testing"))
        return render_template("index.html", confirmation=confirmation)
    else:
        return render_template("index.html")

@app.route("/data", methods=["POST", "GET"])
def ingredients():
    if request.method == "POST":
        fullInfo = request.get_json()
        fullInfo = json.loads(fullInfo)
        stringOfIngredients = "Product: " + fullInfo['product']['product_name_en_imported'] + "\n"
        for i in range(len(fullInfo['product']['ingredients'])):
            stringOfIngredients = stringOfIngredients + fullInfo['product']['ingredients'][i]['text'] + "\n"
        # print(stringOfIngredients)
        return str(stringOfIngredients)
    else:
        return redirect(url_for("main"))


if __name__ == "__main__":
    app.run()