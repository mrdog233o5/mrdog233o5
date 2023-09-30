from flask import Flask, request
import requests

app = Flask(__name__)

app.config.update(
    DEBUG=True
)

@app.route('/', methods=['POST'])
def handle_post_request():
    try:
        message = request.get_data().decode('utf-8')
    except UnicodeDecodeError:
        message = request.get_data()
    print("message > " + message)
    open("./test.txt", "w").write(str(message))
    token = "MTE0MTM0MDA2Mzk2ODU0MjczMA.GX75jG.frFFekrXjqk1BrAuTftSYClt1ERQn8BY2FiZgg"
    channel_id = '1140989222556274721'
    url = f'https://discord.com/api/v9/channels/{channel_id}/messages'
    header = {'Authorization': f'Bot {token}'}
    requests.post(url, headers=header, data="hello")
    return message

if __name__ == '__main__':
    app.run()