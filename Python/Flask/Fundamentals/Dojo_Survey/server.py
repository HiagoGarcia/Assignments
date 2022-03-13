from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def base():
    return render_template('Dojo_Survey.html')

@app.route('/result', methods = ['POST'])
def submit():
    print(request.form)
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comments = request.form['comments']
    return render_template('result.html', name = name, location = location, language = language, comments= comments)

@app.route('/result')
def result():
    return render_template('result.html')

if __name__=="__main__":   
    app.run(debug=True)    