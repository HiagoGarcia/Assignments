from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def base():
    return render_template('Checkerboard.html', rows=8, colums=8)

@app.route('/<y>')
def rows(y):
    return render_template('Checkerboard.html', rows=int(y), colums=8)

@app.route('/<y>/<z>')
def rows_and_colums(y,z):
    return render_template('Checkerboard.html', rows=int(y), colums=int(z))



if __name__=="__main__":
    app.run(debug=True)