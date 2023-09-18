from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r'*':{'origins':'http://localhost:3000'}},supports_credentials=True)

@app.route("/", methods=['GET'])
def index():
    return "Hello World!!!"

@app.route("/user/login", methods=['POST'])
def login():
    return "loginTest!!!"

if __name__ == "__main__":
    app.debug = True
    app.run(host='localhost', port=5001)