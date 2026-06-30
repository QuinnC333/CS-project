from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route("/")
def giveInput():
    python_data = random.randint(0,6)
    return render_template("index.html", ai_data = python_data)