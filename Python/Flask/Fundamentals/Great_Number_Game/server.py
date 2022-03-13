from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)  
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def base():
    session['attempts'] = 0
    session['random'] = random.randint(1,100)
    return render_template('GNG.html', random = session['random'])

@app.route('/guess', methods = ['POST'])
def check():
    session['attempts'] += 1
    if int(session['random']) > int(request.form['num']):
        return render_template('guess.html', hint = 'Too low!!!')
    elif int(session['random']) < int(request.form['num']):
        return render_template('guess.html', hint = 'Too high!!!')
    else:
        return redirect('/you_win')

@app.route('/you_win', methods = ['POST'])
def guess():
    session['random'] = random.randint(1,100)
    session['attempts'] = 0
    return redirect('/')

@app.route('/you_win')
def correct():
    return render_template('you_win.html', attempts =  str(session['attempts']))

if __name__=="__main__":   
    app.run(debug=True)    