from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import dojo


class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas JOIN dojo ON dojos.id = ninjas.dojo_id;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        if results:
            ninjas = []
            for row in results:
                ninja = cls(row)
                data = {
                    'id' : row ['ninjas.id'],
                    'first_name' : row['first_name'],
                    'last_name' : row['last_name'],
                    'age' : row['age'],
                    'dojo_id' : row['dojo_id'],
                    'created_at' : row['created_at'],
                    'updated_at' : row['update_at']
                }
                ninja.dojo = dojo.Dojo(data)
                ninjas.append( cls(ninja) )
            return ninjas

    @classmethod
    def create_ninja(cls, data):
        query = "INSERT INTO ninjas ( first_name, last_name, age, dojo_id) VALUES ( %(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"
        mysql = connectToMySQL('dojos_and_ninjas_schema')
        return mysql.query_db(query, data)

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM ninjas WHERE id = %(id)s;'
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        if results: 
            return cls(results[0])

    @classmethod
    def update_ninja(cls, data):
        query = 'UPDATE ninjas SET first_name = %(first_name)s, last_name  = %(last_name)s, age = %(age)s WHERE id = %(id)s;'
        connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    @classmethod
    def delete_ninja(cls, data):
        query = 'DELETE FROM ninjas WHERE id = %(id)s;'
        connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

