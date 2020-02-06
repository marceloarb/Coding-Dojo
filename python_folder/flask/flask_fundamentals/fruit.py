from flask import Flask, render_template,request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('fruit.html')

@app.route('/checkout',methods=["POST"])
def process():
    return render_template('process.html',name=request.form['first_name'],lastname=request.form['last_name'],Id=request.form['student_id'],num=request.form['apple'],
    numr=request.form['raspberry'],nums=request.form['strawberry'])


if __name__ == "__main__":
    app.run(debug=True)