import uvicorn
import os
import datetime
from PIL import Image
import numpy as np
import io
import base64
from typing import Annotated
from package.excel_reader import Excel_Reader
from package.excel_writer import Excel_Writer
from package.member import Member
from package.db import DB
from package.db_service import DB_Service
from fastapi import FastAPI, File, UploadFile, Request
from fastapi.middleware.cors import CORSMiddleware
from package.util import Util
from starlette.responses import FileResponse
from multiprocessing import freeze_support
from .package.util import Logger

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000",
    "http://localhost:8000",
    "localhost:8000",
    "http://localhost:8002",
    "localhost:8002"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

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


@app.post("/photo", tags=["Test"])
async def photo_upload(request_body: dict):
    if request_body:
        if request_body["data"]:
            raw = request_body["data"].split(",")[1]
            img = Image.open(io.BytesIO(
                base64.decodebytes(bytes(raw, "utf-8"))))
            img.save(f'.\\pic\\{request_body["file_name"]}.png')
            return True
    return False


@app.get("/pic", tags=["member"])
async def get_pic(request: Request):
    if request:
        member_id = request._query_params.get("id")
        file_path = ""
        Logger.info(f"id: {member_id}")
        for file_path in os.listdir(r"./pic"):
            if str(member_id) in file_path:
                Logger.info(f"file found: {file_path}")
                file_path = r"./pic/" + file_path
                break
            else:
                file_path = r"./pic/default.jpg"
        Logger.info(file_path)
        return FileResponse(file_path, headers={"Cache-Control": "no-cache"})
    else:
        return ""


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return "Welcome to HJC member system"


def main():
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=False, workers=1)


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
    keys = ['id', 'hjc_id', 'first_name',
            'last_name', 'email', 'gender', 'phone']
    export_path = "./export/"
    sql_str = "SELECT * FROM member"
    Util.open_folder(os.path.abspath(export_path))
    return er.write_new_file(export_path + "test2_" + datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S"), keys, DB_Service.select_all(DB_path, sql_str))


def select_by_id(id):
    sql_str = "SELECT * FROM member WHERE id=?"
    result_list = DB_Service.select_by_param(DB_path, sql_str, (id,))
    member_list = []
    for member in result_list:
        member_list.append(Member.tupleTOdict(member, Member.DECRYPTION))
    return member_list


def insert_db(member):
    sql_str = '''INSERT INTO MEMBER(NOM,  "NOM Code",  "NOM ID",  "Member ID",  "NOM Member Type",  "LOM Member Type",  Senator,  "Senator ID",  "Date PM",  "Date Induct",  Title,  HON,  PNP,  "Current Position",  "First Name",  "Mid Name",  "Last Name",  "Chi Name",  Gender,  DOB,  HKID,  Marital,  "Mailing Address",  "Mailing Problem",  "Home Address Line1",  "Home Address Line2",  "Home Address Line3",  "Home Address Line4",  "Home District",  "Office Address Line1",  "Office Address Line2",  "Office Address Line3",  "Office Address Line4",  Mobile,  "Home Tel",  "Office Tel",  "Fax Home",  "Fax Office",  "Email 1",  "Email 2",  Comission_TDC,  Comission_NBN,  Comission_Mainland,  Comission_IA,  Comission_NCCC,  Comission_CorpComm,  "Highest Education",  "Company Name",  "Company Title",  Industry,  "Highest Trainer Status",  "Other Social Involvement 1",  "Other Social Involvement 2",  "Other Social Involvement 3",  "Print on JCIHK Directory",  "Company Web Site",  "Highest Position in NOM",  "Highest Position in LOM",  "Highest Profressional Qualification",  "Mail Opt-out",  "Email Opt-out",  Photo) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'''
    result = DB_Service.insert(
        DB_path, sql_str, Member.dictTOtuple(member, Member.ENCRYPTION))
    return result


def read_db():
    sql_str = "SELECT * FROM member"
    member_list = []
    result_list = DB_Service.select_all(DB_path, sql_str)
    print(f"len(result_list): {len(result_list)}")
    if len(result_list) > 0:
        for member in result_list:
            member_list.append(Member.tupleTOdict(member, Member.DECRYPTION))
    return member_list


def update_db(obj):
    sql_str = 'UPDATE MEMBER SET Photo = ?, "Email Opt-out" = ?, "Mail Opt-out" = ?, "Highest Profressional Qualification" = ?, "Highest Position in LOM" = ?, "Highest Position in NOM" = ?, "Company Web Site" = ?, "Print on JCIHK Directory" = ?, "Other Social Involvement 3" = ?, "Other Social Involvement 2" = ?, "Other Social Involvement 1" = ?, "Highest Trainer Status" = ?, Industry = ?, "Company Title" = ?, "Company Name" = ?, "Highest Education" = ?, Comission_CorpComm = ?, Comission_NCCC = ?, Comission_IA = ?, Comission_Mainland = ?, Comission_NBN = ?, Comission_TDC = ?, "Email 2" = ?, "Email 1" = ?, "Fax Office" = ?, "Fax Home" = ?, "Office Tel" = ?, "Home Tel" = ?, Mobile = ?, "Office Address Line4" = ?, "Office Address Line3" = ?, "Office Address Line2" = ?, "Office Address Line1" = ?, "Home District" = ?, "Home Address Line4" = ?, "Home Address Line3" = ?, "Home Address Line2" = ?, "Home Address Line1" = ?, "Mailing Problem" = ?, "Mailing Address" = ?, Marital = ?, HKID = ?, DOB = ?, Gender = ?, "Chi Name" = ?, "Last Name" = ?, "Mid Name" = ?, "First Name" = ?, "Current Position" = ?, PNP = ?, HON = ?, Title = ?, "Date Induct" = ?, "Date PM" = ?, "Senator ID" = ?, Senator = ?, "LOM Member Type" = ?, "NOM Member Type" = ?, "Member ID" = ?, "NOM ID" = ?, "NOM Code" = ?, NOM = ? WHERE id = ?'
    member_tuple = Member.dictTOtuple(obj, Member.ENCRYPTION)[::-1]
    tmp_l1 = list(member_tuple)
    tmp_l1.append(obj["id"])
    result = None
    update_state = DB_Service.update(DB_path, sql_str, tuple(tmp_l1))
    if update_state:
        result = select_by_id(obj["id"])
    return result


def auth(user: dict):
    result = False
    username = user["username"]
    password = user["password"]
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
    freeze_support()
    main()
