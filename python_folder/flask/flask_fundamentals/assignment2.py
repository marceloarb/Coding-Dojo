from flask import Flask, render_template #We need this two lines at the beginin
app = Flask(__name__)

@app.route('/hi')
def dev():
    return render_template('assignment2.html',times=3)

@app.route('/hey/<int:num>/<color>')
def num(num,color):
    return render_template('assignment2.html',times=num,i=color)















if __name__ == "__main__":
    app.run(debug=True)