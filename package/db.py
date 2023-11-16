import sqlite3


class DB:
    conn = None

    @staticmethod
    def create_connectionn(db_file):
        DB.conn = None
        try:
            DB.conn = sqlite3.connect(db_file)
            print(f"db connected {sqlite3.version}")
        except sqlite3.Error as e:
            print(e)
