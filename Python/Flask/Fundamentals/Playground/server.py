from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def index():
    return render_template('playground.html', box = '', times = 3)


if __name__=="__main__":
    app.run(debug=True)