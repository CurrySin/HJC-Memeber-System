class Member:
    keys = ["id", "hjc_id", "first_name",
            "last_name", "email", "gender", "phone"]

    def __init__(self, in_obj):
        self.property = {}
        if type(in_obj) is dict:
            self.dictSETself(in_obj)
        if type(in_obj) is list or type(in_obj) is tuple:
            self.setSelfKey(in_obj)

    def __getitem__(self, key):
        return self.property[key]

    def __setitem__(self, key, value):
        self.property[key] = value

    def dictSETself(self, in_obj) -> None:
        for key in self.keys:
            if in_obj[key]:
                self[key] = in_obj[key]

    def setSelfKey(self, in_obj) -> None:
        for idx, key in enumerate(self.keys):
            self[key] = in_obj[idx]

    def toDict(self) -> dict:
        return self.property

    def toTuple(self) -> tuple:
        return tuple(self.property.values())

    @staticmethod
    def dictTOtuple(obj: dict) -> tuple:
        return Member(obj).toTuple()

    @staticmethod
    def listTOdict(obj: list) -> dict:
        return Member(obj).toDict()

    @staticmethod
    def tupleTOdict(obj: tuple) -> dict:
        return Member(obj).toDict()
