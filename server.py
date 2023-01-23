from flask import Flask
from app.api.base import api_bp
from app.config import ProductionConfig


def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(ProductionConfig())
    register_blueprint(app)
    print(app.url_map)
    print(app.config.get('ENV'))
    print(app.config.get('DATABASE_URL'))

    return app


def register_blueprint(app: Flask):
    app.register_blueprint(api_bp)
