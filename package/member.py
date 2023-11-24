from .util import Util


class Member:
    keys = ["id", "NOM", "NOM Code", "NOM ID", "Member ID", "NOM Member Type",
            "LOM Member Type", "Senator", "Senator ID", "Date PM",
            "Date Induct", "Title", "HON", "PNP", "Current Position",
            "First Name", "Mid Name", "Last Name", "Chi Name", "Gender",
            "DOB", "HKID", "Marital", "Mailing Address", "Mailing Problem",
            "Home Address Line1", "Home Address Line2", "Home Address Line3", 
            "Home Address Line4", "Home District", "Office Address Line1",
            "Office Address Line2", "Office Address Line3",
            "Office Address Line4", "Mobile", "Home Tel", "Office Tel",
            "Fax Home", "Fax Office", "Email 1", "Email 2", "Comission_TDC",
            "Comission_NBN", "Comission_Mainland", "Comission_IA",
            "Comission_NCCC", "Comission_CorpComm", "Highest Education",
            "Company Name", "Company Title", "Industry",
            "Highest Trainer Status", "Other Social Involvement 1",
            "Other Social Involvement 2", "Other Social Involvement 3",
            "Print on JCIHK Directory", "Company Web Site",
            "Highest Position in NOM", "Highest Position in LOM",
            "Highest Profressional Qualification",
            "Mail Opt-out", "Email Opt-out", "Photo"]
    
    ENCRYPTION = 0
    DECRYPTION = 1

    def __init__(self, in_obj, action):
        self.property = {}
        self.action = action
        if type(in_obj) is dict:
            self.dictSETself(in_obj)
        if type(in_obj) is list or type(in_obj) is tuple:
            self.setSelfKey(in_obj)

    def __getitem__(self, key):
        return self.property[key]

    def __setitem__(self, key, value):
        self.property[key] = value

    def dictSETself(self, in_obj) -> None:
        for idx, key in enumerate(self.keys):
            if idx > 0:
                if self.action == Member.ENCRYPTION:
                    self[key] = Util.encrypte_data(in_obj[key])
                else:
                    self[key] = Util.decrypte_data(in_obj[key])

    def setSelfKey(self, in_obj) -> None:
        for idx, key in enumerate(self.keys):
            if self.action == Member.ENCRYPTION:
                if idx == 0:
                    self[key] = in_obj[idx]
                elif in_obj[idx] is None:
                    self[key] = ""
                else:
                    self[key] = Util.encrypte_data(in_obj[idx])
            else:
                if idx == 0:
                    self[key] = in_obj[idx]
                elif in_obj[idx] is None:
                    self[key] = ""
                else:
                    self[key] = Util.decrypte_data(in_obj[idx])

    def toDict(self) -> dict:
        return self.property

    def toTuple(self) -> tuple:
        return tuple(self.property.values())

    @staticmethod
    def dictTOtuple(obj: dict, action: int) -> tuple:
        return Member(obj, action).toTuple()

    @staticmethod
    def listTOdict(obj: list, action: int) -> dict:
        return Member(obj, action).toDict()

    @staticmethod
    def tupleTOdict(obj: tuple, action: int) -> dict:
        return Member(obj, action).toDict()
