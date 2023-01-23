from flask import Blueprint

api_bp = Blueprint('api', __name__, url_prefix='/api')


@api_bp.route('/hello')
def hello():
    return "<p>Hello World!</p>"
