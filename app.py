from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "supersecretkey"

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        print(f"Message from {name} ({email}): {message}")
        flash("Thanks for contacting me! I'll get back to you soon.")
        return redirect(url_for("home"))
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
