from flask import Flask, render_template, request, redirect, session
app=Flask(__name__)

@app.route('/')
def form():
    return render_template('request.html')

@app.route('/request',methods=["POST"])
def process():
    return render_template('request!.html',name=request.form['username'],email=request.form['email'])



if __name__ == "__main__":
    app.run(debug=True)