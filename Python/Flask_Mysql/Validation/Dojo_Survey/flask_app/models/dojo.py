from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash


class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_dojo(cls, data):
        query = 'INSERT INTO dojos (name, location, language, comment) VALUES ( %(name)s, %(location)s, %(language)s, %(comment)s);'
        results = connectToMySQL('dojo_survey_schema').query_db(query, data)
        print(results)
        return results

    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM dojos;'
        results = connectToMySQL('dojo_survey_schema').query_db(query)
        all_dojos = []
        if results:
            for row in results:
                all_dojos.append(cls(row))
            return all_dojos

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM dojos WHERE id = %(id)s;'
        results = connectToMySQL('dojo_survey_schema').query_db(query, data)
        if results: 
            return cls(results[0])
    
    @staticmethod
    def validate_dojo(data):
        is_valid = True

        if len(data['name']) <= 1:
            is_valid = False
            flash('Your name must be at leaste 2 character long.')
        if (data["location"]) == 'Choose a location':
            is_valid = False
            flash("You must choose a location")
        if (data["language"]) == 'Choose a language':
            is_valid = False
            flash("Please choose a language.")

        return is_valid