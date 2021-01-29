import flask
from flask import Flask, request
import requests

app = Flask(__name__)
gh_api_url = "https://api.github.com/gists/" 

@app.route('/')
def hello_world():
    return 'Hello, World! Welcome to Magistic – a platform that converts a collection of GitHug Gists into a blog.'
    
@app.route('/retrieve/<post_id>', methods=["POST"])
def get_post_content(post_id):
    gist_url = gh_api_url + post_id
    content = requests.get(gist_url)
    content = content.json()
    post_title = list(content["files"].keys())[0]
    content = content["files"][post_title]["content"]
    
    return repr(content)
    
