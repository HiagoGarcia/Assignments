from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def level1():
    return render_template('playground.html', times = 3)

@app.route('/play/<num>')
def level2(num):
    return render_template('playground.html', times = int(num))

@app.route('/play/<num>/<color>')
def level3(num,color):
    return render_template('playground.html', times = int(num), b_c = str(color))

if __name__=="__main__":
    app.run(debug=True)