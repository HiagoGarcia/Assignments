from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User

#Diplay pages-----------------------------------------------------

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

#Actions-----------------------------------------------------

@app.route('/user/create', methods=['POST'])
def create_user():
    if User.validate_user(request.form):
        User.create_user(request.form)
        return redirect('/')
    return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    if not User.login_validate(request.form):
        flash('Invalid Login')
        return redirect('/')
    
    user = User.get_by_email(request.form)

    session['user_id'] = user.id
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')