import flask
from flask import Flask, request
import requests

app = Flask(__name__)
gh_api_url = "https://api.github.com/gists/" 

@app.route('/')
def hello_world():
    return 'Hello, World! Welcome to DiGist – a platform that blog-ifies your GitHub Gists.'
    
@app.route('/retrieve/<git_url>')
def get_post_content(git_url):
    
    # extracting post ID from Gist URL
    """
    inputs: "https://gist.github.com/rish-16/959865cac059c9a46881cdc95a24bfc0"
    output: "959865cac059c9a46881cdc95a24bfc0"
    """
    def get_gist_id(url):
        return url.split("/")[-1]
        
    gist_url = gh_api_url + get_gist_id(git_url)
    content = requests.get(gist_url)
    content = content.json()
    post_title = list(content["files"].keys())[0]
    content = content["files"][post_title]["content"]
    
    return repr(content)
    
if __name__ == "__main__":
    app.run(debug=True)