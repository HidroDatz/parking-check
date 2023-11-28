from flask import Flask, jsonify, request
import json
import flask_cors

app = Flask(__name__)
flask_cors.CORS(app)  # Add this line to enable CORS


def read_json_file(filename):
    with open(filename, "r") as file:
        data = json.load(file)
    return data


def check_data(key, type_key, json_data):
    print(key)
    for user in json_data:
        if user.get(type_key) == str(key):
            return True
    return False


@app.route("/login", methods=["POST"])
def read_json():
    filename = "data-user.json"
    json_data = read_json_file(filename)
    print(json_data)

    # Read JSON input
    json_input = request.get_json()

    # Read username and password from JSON input
    username = json_input.get("username")
    password = json_input.get("password")

    # Check if username and password exist in JSON data
    if check_data(username, "username", json_data) and check_data(
        password, "password", json_data
    ):
        return jsonify({"message": "Login successful", "ok": True})
    else:
        return jsonify({"message": "Invalid username or password", "ok": False})


if __name__ == "__main__":
    app.run(debug=True)
