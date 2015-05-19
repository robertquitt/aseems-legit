from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def aseem():
    return render_template('aseem.html')

@app.route('/tears')
def tears():
    return render_template('tears.html')

if __name__ == '__main__':
    app.run(debug = True)
