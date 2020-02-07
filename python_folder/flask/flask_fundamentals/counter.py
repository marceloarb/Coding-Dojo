from flask import Flask, render_template,redirect,request,session
app = Flask(__name__)
app.secret_key = "show"

@app.route('/')
def root():
    if 'num' in session:
        session['num'] += 1
    
    else:
        session["num"] = 1
    return render_template('counter.html')


@app.route('/destroy')
def destroy():
    session.clear()
    return redirect('/')




if __name__ == "__main__":
    app.run(debug=True)