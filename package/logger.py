import logging
from logging.handlers import TimedRotatingFileHandler
import datetime


logger = logging.getLogger('cesp_logger')
logger.setLevel(logging.DEBUG)
logger_handle = TimedRotatingFileHandler(
    ".\\log\\" + datetime.datetime.now().strftime("%Y-%m-%d") +
    ".log", when='midnight',
    backupCount=10, encoding='utf-8')
formatter = logging.Formatter(
    '%(asctime)s - %(levelname)-8s - %(message)s',
    datefmt='%m-%d %H:%M')
logger_handle.setFormatter(formatter)
logger.addHandler(logger_handle)


class Logger():
    @staticmethod
    def info(msg):
        logger.info(msg)

    @staticmethod
    def warn(msg):
        logger.warning(msg)

    @staticmethod
    def err(msg):
        logger.error(msg)

    @staticmethod
    def debug(msg):
        logger.debug(msg)
