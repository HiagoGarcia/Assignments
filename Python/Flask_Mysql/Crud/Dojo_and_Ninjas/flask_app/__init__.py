from flask import Flask
app = Flask(__name__)
app.secret_key = 'shhhh'
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja
