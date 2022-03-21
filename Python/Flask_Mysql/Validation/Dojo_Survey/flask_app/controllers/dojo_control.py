from flask import Flask, render_template, request, redirect
from flask_app import app
from flask_app.models.dojo import Dojo

#Display pages--------------------------------

@app.route('/')
def base():
    return render_template('Dojo_Survey.html')

@app.route('/result/<int:id>')
def result(id):
    dojo = Dojo.get_one({'id':id})
    return render_template('result.html', dojo = dojo)

#Actions-----------------------------------------------------

@app.route('/make_survey', methods = ['POST'])
def submit():
    if Dojo.validate_dojo(request.form):
        Dojo.create_dojo(request.form)
        dojo_id = Dojo.create_dojo(request.form)
        return redirect(f'/result/{dojo_id}')
    return redirect('/')
