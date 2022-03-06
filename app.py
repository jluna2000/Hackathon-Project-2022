from flask import Flask, render_template, request, url_for, redirect
import json

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/data", methods=["POST", "GET"])
def ingredients():
    if request.method == "POST":
        fullInfo = request.get_json()
        fullInfo = json.loads(fullInfo)
        stringOfIngredients = ""
        for i in range(len(fullInfo['product']['ingredients'])):
            stringOfIngredients = stringOfIngredients + fullInfo['product']['ingredients'][i]['text'] + "\n"
        print(stringOfIngredients)
        return str(stringOfIngredients)
    else:
        return redirect(url_for("main"))


if __name__ == "__main__":
    app.run()