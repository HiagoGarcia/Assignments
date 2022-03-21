from flask import Flask, render_template, request, redirect
from flask_app import app
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

#Display routes-------------------------------------

@app.route('/new_ninjas')
def create_ninja():
    dojos = Dojo.get_all_dojos()
    return render_template('ninjas.html', dojos = dojos)



#Actions----------------------------------------------

@app.route('/create_ninjas', methods=['POST'])
def make_ninja():
    Ninja.create_ninja(request.form)
    dojo_id = request.form['dojo_id']
    return redirect(f'/dojos/{dojo_id}')
