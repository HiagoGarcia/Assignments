from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 1
    return render_template('Counter.html', counter = str(session['counter']))

@app.route('/', methods = ['POST'])
def add():
    if 'number' in request.form and request.form['number'] != '':
        session['counter'] += int(request.form['number'])
        return render_template('Counter.html', counter = str(session['counter']))
    else:
        session['counter'] += 1
        return render_template('Counter.html', counter = str(session['counter']))


@app.route('/destroy_session', methods = ['POST'])
def reset():
        session.clear()
        return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    