from flask import Flask, render_template, request, redirect
from flask_app import app
from flask_app.models.dojo import Dojo

#Display pages--------------------------------

@app.route('/')
def index():
    dojos = Dojo.get_all_dojos()
    return render_template('index.html', all_dojos = dojos)

@app.route('/dojos/<int:id>')
def show_dojo(id):
    dojo = Dojo.get_one_with_ninja({'id':id})
    return render_template('dojos.html', dojo = dojo)

@app.route('/create_dojo')
def create_dojo():
    return redirect('/')


#Actions-----------------------------------------------------

@app.route('/create_dojo', methods=['POST'])
def make_dojo():
    Dojo.create_dojo(request.form)
    return redirect('/')