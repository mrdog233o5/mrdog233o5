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
    return message

if __name__ == '__main__':
    app.run()