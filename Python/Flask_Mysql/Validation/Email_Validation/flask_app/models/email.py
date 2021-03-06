from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Email:
    def __init__(self,data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_email(cls, data):
        query = "INSERT INTO emails (email) VALUES (%(email)s);"
        results = connectToMySQL('email_validation_schema').query_db(query,data)
        return results

    @classmethod
    def get_all_emails(cls):
        query = 'SELECT * FROM emails;'
        results = connectToMySQL('email_validation_schema').query_db(query)
        all_emails = []
        if results:
            for row in results:
                all_emails.append(cls(row))
            return all_emails

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM emails WHERE id = %(id)s;'
        results = connectToMySQL('email_validation_schema').query_db(query, data)
        if results: 
            return cls(results[0])

    @staticmethod
    def validate_email(data):
        is_valid = True
        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid

