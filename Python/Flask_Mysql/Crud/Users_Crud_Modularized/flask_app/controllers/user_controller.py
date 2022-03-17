from flask import Flask, render_template, request, redirect
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask_app.models.user import User

#Display pages------------------------

@app.route('/')
def index():
    mysql = connectToMySQL('users_schema')
    users = mysql.query_db('SELECT * FROM users;')
    return render_template('readall.html', all_users = users)

@app.route('/')
def to_create():
    return redirect('/user/new')

@app.route('/user/new')
def create():
    return render_template('create.html')

@app.route('/user/show/<int:id>')
def show_user(id):
    data = { 'id': id }
    user = User.get_one(data)
    return render_template('show.html', user=user)

@app.route('/user/edit/<int:id>')
def edit_user(id):
    user = User.get_one({'id': id})
    return render_template('edit.html', user = user)

#Actions------------------------------

@app.route('/user/create', methods=['POST'])
def make_user():
    User.create_user(request.form)
    return redirect('/')

@app.route('/user/edit', methods = ['POST'])
def update_user():
    User.update_user(request.form)
    return redirect('/')

@app.route('/user/<int:id>/delete')
def delete(id):
    User.delete_user({'id' : id})
    return redirect('/')
