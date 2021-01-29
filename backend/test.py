import requests
from pprint import pprint

URL = "http://127.0.0.1:5000/retrieve/"
post_id = "959865cac059c9a46881cdc95a24bfc0"
final = URL + post_id

res = requests.get(final)
content = str(res.content, encoding="utf-8")
print (content)