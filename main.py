from flask import Flask, request
import requests

app = Flask(__name__)

app.config.update(
        DEBUG=True
        )

@app.route('/')
def index():
    html = open('index.html', 'r').read()
    return str(html)

@app.route('/api', methods=['POST'])
def handle_post_request():
    try:
        message = request.get_data().decode('utf-8')
    except:
        message = request.get_data()
    print("msg > "+str(message))

    # POST TO SERVER
    payload = {
        'content':str(message)
    }
    
    header = {
        "Authorization":"OTEyMDExNjQzOTQ3NDc5MDgx.GqANJ4.d1hBbj93fJQBglcbk2rs4e1x00ssBhZ5Tq2_GA"
    }
    
    requests.post("https://discord.com/api/v9/channels/1157577267388616725/messages", data=payload, headers=header)
    return message

app.run()
