from flask import Flask, render_template, request, redirect, session
from flask_app import app
from flask_app.controllers import user_control


if __name__=="__main__":   
    app.run(debug=True)    