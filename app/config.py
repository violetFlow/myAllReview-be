class Config(object):
    TESTING = False


class ProductionConfig(Config):
    DATABASE_URL = 'postgre://prod/test'
    ENV = 'production'


class DevelopmentConfig(Config):
    DATABASE_URL = 'postgre://dev/test'
    ENV = 'development'


class TestConfig(Config):
    DATABASE_URL = 'postgre://test/'
    TESTING = True
