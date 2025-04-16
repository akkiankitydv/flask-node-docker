from flask import Flask, jsonify, render_template
from flask_cors import CORS
from business import get_data

app = Flask(__name__)
CORS(app)
@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/api', methods=['GET'])
def api():
    data = get_data()
    return jsonify({"data": data})
@app.route('/api', methods=['POST'])
def handle_form():
    data = request.json
    # process your data here
    return jsonify({"message": "Received!", "data": data})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7860, debug=True)
