
from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from api.api_handler import ApiHandler

app = Flask(__name__, static_url_path='', static_folder='front-end/public')
CORS(app)
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(ApiHandler, '/hello')

