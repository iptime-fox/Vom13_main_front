import requests
import json

url = "https://kauth.kakao.com/oauth/token"

data = {
    "grant_type" : "authorization_code",
    "client_id" : "3132ebb31e3c4b5abfc88cb35109a221",
    "redirect_uri" : "https://hanara123.cafe24.com",
    "code"         : 'pxjIhPA-LXzFrpQfNo8npBfcfJp1-aWUKuVfj6G6UKmZ2yZPBV3OJilYE3lfbnImcCB7SwoqJVAAAAGILXtHGQ'
}
response = requests.post(url, data=data)

tokens = response.json()

print(tokens)