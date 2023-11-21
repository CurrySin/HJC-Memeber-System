import uvicorn
import os
import datetime
from typing import Annotated
from package.excel_reader import Excel_Reader
from package.excel_writer import Excel_Writer
from package.member import Member
from package.db import DB
from package.db_service import DB_Service
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from package.util import Util


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

todos = [
    {
        "id": "1",
        "item": "Read a book."
    },
    {
        "id": "2",
        "item": "Cycle around town."
    }
]

DB_path = ".\\db\\hjc_members.db"


@app.get("/member", tags=["member"])
async def get_all_member() -> dict:
    return {
        "data": read_db()
    }


@app.get("/member/{id}", tags=["member"])
async def get_member_byID(id: int) -> dict:
    return {
        "data": select_by_id(id)
    }


@app.post("/member", tags=["member"])
async def add_member(member: dict) -> dict:
    return {
        "data": insert_db(member)
    }


@app.put("/member", tags=["member"])
async def update_member(body: dict) -> dict:
    return {
        "data": update_db(body)
    }


@app.get("/excel/import", tags=["Import"])
async def import_raw_excel() -> dict:
    return {
        "data": import_raw_excel_py()
    }


@app.get("/excel/test1", tags=["Test"])
async def gen_test_excel() -> dict:
    return {
        "data": gen_test_excel_to_folder()
    }


@app.get("/excel/test2", tags=["Test"])
async def gen_test_excel_2() -> dict:
    return {
        "data": gen_test_excel_to_folder_2()
    }


@app.post("/login", tags=["login"])
async def login(user: dict):
    print(user)
    return {
        "data": auth(user)
    }


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return "Welcome to HJC member system"


def main():
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


def import_raw_excel_py() -> bool:
    return test()


def gen_test_excel_to_folder():
    er = Excel_Writer()
    # keys = ['id', 'hjc_id', 'first_name', 'last_name', 'email', 'gender', 'phone']
    export_path = "./export/"
    keys = ['hjc_id', 'first_name', 'last_name']
    sql_str = "SELECT hjc_id, first_name, last_name FROM member"
    Util.open_folder(os.path.abspath(export_path))
    return er.write_new_file(export_path + "test1_" + datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S"), keys, DB_Service.select_all(DB_path, sql_str))


def gen_test_excel_to_folder_2():
    er = Excel_Writer()
    keys = ['id', 'hjc_id', 'first_name', 'last_name', 'email', 'gender', 'phone']
    export_path = "./export/"
    sql_str = "SELECT * FROM member"
    Util.open_folder(os.path.abspath(export_path))
    return er.write_new_file(export_path + "test2_" + datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S"), keys, DB_Service.select_all(DB_path, sql_str))


def select_by_id(id):
    sql_str = "SELECT * FROM member WHERE id=?"
    result_list = DB_Service.select_by_param(DB_path, sql_str, (id,))
    member_list = []
    for member in result_list:
        member_list.append(Member.tupleTOdict(member))
    return member_list


def insert_db(member):
    sql_str = "INSERT INTO MEMBER(hjc_id, first_name, last_name, email, gender, phone) VALUES(?,?,?,?,?,?)"
    result = DB_Service.insert(DB_path, sql_str, Member.dictTOtuple(member))
    return result


def read_db():
    sql_str = "SELECT * FROM member"
    member_list = []
    result_list = DB_Service.select_all(DB_path, sql_str)
    print(f"len(result_list): {len(result_list)}")
    if len(result_list) > 0:
        for member in result_list:
            member_list.append(Member.tupleTOdict(member))
    return member_list


def update_db(obj):
    print(obj)
    sql_str = "UPDATE member SET phone = ?, gender = ?, email = ?, last_name = ?, first_name = ?, hjc_id = ? WHERE id = ?"
    result = None
    update_state = DB_Service.update(DB_path, sql_str, Member.dictTOtuple(obj)[::-1])
    if update_state:
        result = select_by_id(obj["id"])
    return result


def auth(user: dict):
    result = False
    username = user["username"]
    password = user["password"]
    print(f"username: {username} password: {password}")
    en_username = Util.encrypte_data(username)
    print(f"en_username: {en_username}")
    all_users = DB_Service.select_all(DB_path, "SELECT * FROM user")
    if len(all_users) > 0:
        for user in all_users:
            if username == Util.decrypte_data(user[1]):
                print("username match")
                if password == Util.decrypte_data(user[2]):
                    print("user password match")
                    result = True
    return result


def test():
    er = Excel_Reader()
    file_path = ".\\src\\import.xlsx"
    sheet_name = "data"
    result = er.iterating_over_values(file_path, sheet_name=sheet_name)
    member_raw = []
    for idx, v in enumerate(result):
        print(f"idx: {idx} v: {v}")
        if idx != 0:
            temp_list = list(v)
            for o_idx, o_value in enumerate(temp_list):
                temp_list[o_idx] = Util.encrypte_data(o_value)
            new_obj = tuple(temp_list)
            member_raw.append(new_obj)

    # db connection
    sql_str = "INSERT INTO MEMBER(hjc_id, first_name, last_name, email, gender, phone)VALUES(?, ?, ?, ?, ?, ?)"
    DB_Service.batch_insert(DB_path, sql_str, member_raw)
    return True


if __name__ == "__main__":
    main()
