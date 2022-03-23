from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_user(cls, data):
        hash_browns = bcrypt.generate_password_hash(data['password'])
        hashed_dict = {
            'first_name' : data['first_name'],
            'last_name' : data['last_name'],
            'email' : data['email'],
            'password' : hash_browns
        }
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        results = connectToMySQL('login_and_registration_schema').query_db(query,hashed_dict)
        return results

    @classmethod
    def get_by_email(cls, data):
        query = 'SELECT * FROM users WHERE email = %(email)s;'
        result = connectToMySQL('login_and_registration_schema').query_db(query,data)

        if result:
            return cls(result[0])

    @staticmethod
    def validate_user(data):
        is_valid = True
        if len(data['first_name']) <= 1:
            is_valid = False
            flash('Your first name must be at least 2 character long.')
        if len(data['last_name']) <= 1:
            is_valid = False
            flash('Your last name must be at least 2 character long.')
        if len(data['password']) <= 7:
            is_valid = False
            flash('Your password must be at least 8 characters long.')
        if (data['password'] != data['password_confirm']):
            is_valid = False
            flash('Your password must match.')
        if not EMAIL_REGEX.match(data['email']):
            flash('Invalid email address!')
            is_valid = False
        return is_valid

    @staticmethod
    def login_validate(data):
        user = User.get_by_email(data)
        if not user:
            print(1)
            return False

        if not bcrypt.check_password_hash(user.password, data['password']):
            print(2)
            return False
        return True

