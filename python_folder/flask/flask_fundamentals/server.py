from flask import Flask, render_template #We need this two lines at the beginin
app = Flask(__name__)

@app.route('/dojo')
def marcelo():
    return "I made my first request!"

@app.route('/say/<int:number>/<other>')
def show(number,other):
    return number*other


@app.route('/a')
def server():
    return render_template('a.html',phrase="Here is my phrase",name=("hello"))
    


#we need to have this two line at the end
if __name__ == "__main__":
    app.run(debug=True)