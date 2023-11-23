import os
import platform
import subprocess
from .logger import Logger
from cryptography.fernet import Fernet


class Util:
    os_linux = "Linux"
    os_mac = "Darwin"
    os_windows = "Windows"
    W_APPEND = 'a'
    W_CREATE = 'x'
    W_WRITE = 'w'
    W_READnWRITE = 'r+'
    W_WRITEnREAD = 'w+'

    @staticmethod
    def current_os() -> str:
        return platform.system()

    @staticmethod
    def open_folder(path):
        if platform.system() == Util.os_windows:
            os.startfile(path)
        elif platform.system() == Util.os_mac:
            subprocess.Popen(["open", path])
        else:
            subprocess.Popen(["xdg-open", path])

    @staticmethod
    def file_operator(_path, _content, _write_type):
        with open(r"" + _path, _write_type) as f:
            f.seek(0)
            f.write(_content)
            f.truncate()

    @staticmethod
    def exception_decorator(*exceptions):
        def decorator(func):
            def new_func(*args, **kwargs):
                try:
                    ret = func(*args, **kwargs)
                    return ret
                except exceptions as ex:
                    template = "An exception of type {0} occurred. Arguments:\n{1!r}"
                    message = template.format(type(ex).__name__, ex.args)
                    Logger.err(message)
                    Logger.info(f"args: {args}")
                    Logger.info(f"kwargs: {kwargs}")
                    Util.write_file(r".\temp\error.txt",
                                    message + ", ", Util.W_APPEND)
                    return message
            return new_func
        return decorator

    @staticmethod
    def read_file(_path):
        with open(_path, 'r+') as f:
            return f.read()

    @staticmethod
    def encrypte_data(original_string):
        key_path = r"./secret/key"
        if (Util.check_encryte_key(key_path)) is True:
            key = Util.read_file(key_path)
            fernet = Fernet(key)
            b_string = bytes(str(original_string), 'utf-8')
            return fernet.encrypt(b_string)

    @staticmethod
    def decrypte_data(encrypted_string):
        key_path = r".\secret\key"
        if (Util.check_encryte_key(key_path)) is True:
            key = Util.read_file(key_path)
            fernet = Fernet(key)
            uncipher_text = (fernet.decrypt(encrypted_string))
            return bytes(uncipher_text).decode("utf-8")

    @staticmethod
    def check_encryte_key(key_path) -> bool:
        if os.path.exists(key_path):
            Logger.info("[Secret] Key Exist")
            return True
        else:
            Logger.info("[Secret] Key Not Exist, Create")
            # Util.file_operator(key_path, bytes(Fernet.generate_key()).decode("utf-8"), Util.W_APPEND)
            return False
