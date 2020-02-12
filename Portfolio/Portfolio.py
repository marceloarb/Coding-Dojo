from flask import Flask,render_template,request,redirect,session
app = Flask(__name__)
app.secret_key = "show"

@app.route('/')
def index():

    return render_template('portfolio.html')




if __name__ == "__main__":
    app.run(debug=True)