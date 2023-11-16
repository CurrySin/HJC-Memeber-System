import os
import platform
import subprocess


class Util:
    os_linux = "Linux"
    os_mac = "Darwin"
    os_windows = "Windows"

    @staticmethod
    def current_os() -> str:
        return platform.system()

    @staticmethod
    def open_folder(path):
        if platform.system() == "Windows":
            os.startfile(path)
        elif platform.system() == "Darwin":
            subprocess.Popen(["open", path])
        else:
            subprocess.Popen(["xdg-open", path])
