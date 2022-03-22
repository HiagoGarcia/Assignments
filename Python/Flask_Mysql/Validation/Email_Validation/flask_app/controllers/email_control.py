import imp
from flask import Flask, render_template, request, redirect
from flask_app import app
from flask_app.models.email import Email

#Diplay pages-----------------------------------------------------

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success/<int:id>')
def success(id):
    email = Email.get_one({'id':id})
    emails = Email.get_all_emails()
    return render_template('success.html', one_email = email, all_emails = emails)



#Actions-----------------------------------------------------



@app.route('/create_email', methods=['POST'])
def register():
    if Email.validate_email(request.form):
        Email.create_email(request.form)
        email=Email.create_email(request.form)
        return redirect(f'/success/{email}')
    return redirect('/')