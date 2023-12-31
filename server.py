from flask import Flask, render_template
app = Flask(__name__)

# *AKA LynkYnk (Gallery Page)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

# *! Find more flash art to populate
@app.route('/flashArt')
def flashArt():
    return render_template('flashArt.html')

@app.route('/skinCare')
def skinCare():
    return render_template('skinCare.html')

# *AKA Lynda K.
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__=="__main__":
    app.run(debug=True)