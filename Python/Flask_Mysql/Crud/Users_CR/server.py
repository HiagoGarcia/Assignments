from flask import Flask, render_template, request, redirect
from users import User
from mysqlconnection import connectToMySQL
app = Flask(__name__)

@app.route('/')
def index():
    mysql = connectToMySQL('users_schema')
    users = mysql.query_db('SELECT * FROM users;')
    print(users)
    return render_template('readall.html', all_users = users)

@app.route('/')
def to_create():
    return redirect('/user/new')

@app.route('/user/new')
def create():
    return render_template('create.html')

@app.route('/user/create', methods=['POST'])
def make_user():
    data = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email']
    }
    User.create_user(data)
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)