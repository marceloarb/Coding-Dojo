from flask import Flask,render_template,request,redirect,session
app = Flask(__name__)
app.secret_key = "show"
import random
@app.route('/')
def index():
    if 'num' not in session:
        session['num'] = 0

    return render_template('ninjagold.html')


@app.route('/process',methods=["POST"])
def process():
    if request.form['building']=='Farm':
        session['num'] += random.randint(10,20)
    if request.form['building']=='house':
        session['num'] += random.randint(30,50)
    if request.form['building']=='car':
        session['num'] += random.randint(5,20)
    if request.form['building']=='lunch':
        session['num'] += random.randint(1,10)
    if request.form['building']=='reset':
        session.clear()
    
    
    return redirect('/')
    





if __name__ == "__main__":
    app.run(debug=True)