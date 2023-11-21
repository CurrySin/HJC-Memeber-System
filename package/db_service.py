import sys
import os
sys.path.insert(1, os.path.join(sys.path[0], '..\\'))
from .db import DB


class DB_Service:
    @staticmethod
    def batch_insert(db_path, sql, data):
        if DB.conn is None:
            DB.create_connectionn(db_path)
        cursor_obj = DB_Service.get_cursor(DB.conn)
        cursor_obj.executemany(sql, data)
        DB.conn.commit()

    @staticmethod
    def select_all(db_path, sql):
        if DB.conn is None:
            DB.create_connectionn(db_path)
        cursor_obj = DB.conn.cursor()
        cursor_obj.execute(sql)
        result = cursor_obj.fetchall()
        return result

    @staticmethod
    def select_by_param(db_path, sql, param):
        if DB.conn is None:
            DB.create_connectionn(db_path)
        cursor_obj = DB.conn.cursor()
        cursor_obj.execute(sql, param)
        result = cursor_obj.fetchall()
        return result

    @staticmethod
    def update(db_path, sql, obj) -> bool:
        return DB_Service.sql_executor(db_path, sql, obj)

    @staticmethod
    def insert(db_path, sql, obj):
        DB_Service.sql_executor(db_path, sql, obj)

    @staticmethod
    def sql_executor(db_path, sql, obj):
        result = False
        if DB.conn is None:
            DB.create_connectionn(db_path)
        cursor_obj = DB.conn.cursor()
        cursor_obj.execute(sql, obj)
        DB.conn.commit()
        result = True
        return result

    @staticmethod
    def get_cursor(db_conn):
        cursor = db_conn.cursor()
        # cursor.execute("PRAGMA key='hjcms@dev'")
        return cursor
