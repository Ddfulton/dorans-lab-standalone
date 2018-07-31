from flask import Flask, render_template, send_from_directory
app = Flask(__name__, static_folder='static')


@app.route("/", methods=["GET"])
def index():
	return render_template("logistic_standalone.html")

if __name__ == "__main__":
    app.run(debug=True)
