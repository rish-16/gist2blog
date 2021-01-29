import flask
from flask import Flask, request
import requests

app = Flask(__name__)
gh_api_url = "https://api.github.com/gists/" 

@app.route('/')
def hello_world():
    return 'Hello, World! Welcome to DiGist – a platform that blog-ifies your GitHub Gists.'
    
@app.route('/retrieve/<post_id>')
def get_post_content(post_id):
    gist_url = gh_api_url + post_id
    print (gist_url)
    content = requests.get(gist_url)
    content = content.json()
    post_title = list(content["files"].keys())[0]
    content = content["files"][post_title]["content"]
    
    return repr(content)
    
if __name__ == "__main__":
    app.run(debug=True)