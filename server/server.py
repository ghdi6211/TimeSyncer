from flask import Flask
from flask import request, make_response, jsonify

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
    return "Hello World!!!"

if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=5000)