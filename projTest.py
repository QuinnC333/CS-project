from flask import Flask, render_template
import random




app = Flask(__name__)

@app.route("/")
def giveInput():
    #placeholder, delete later↓
    python_data = random.randint(0,6)
    #keep this↓
    return render_template("index.html", ai_data = python_data)