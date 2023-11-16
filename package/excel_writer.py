import openpyxl
import sys
import os
sys.path.insert(1, os.path.join(sys.path[0], '..\\'))


class Excel_Writer:
    PRE_KEY = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

    def write_new_file(self, file_path, keys, data_list):
        wb = openpyxl.Workbook()
        ws1 = wb.create_sheet('data', 0)

        for idx, key in enumerate(keys):
            temp_column_key = Excel_Writer.PRE_KEY[idx] + str(1)
            ws1[temp_column_key] = key

        base_index = 2

        for d_idx, data in enumerate(data_list):
            # print(f"data: {data} base_index: {base_index} d_idx: {d_idx}")
            column_key = ""
            for idx, key in enumerate(keys):
                column_key = Excel_Writer.PRE_KEY[idx] + str(base_index)
                # print(f"column_key: {column_key} || value: {data[idx]}")
                ws1[column_key] = data[idx]
            # print("==========")
            base_index += 1

        wb.save(file_path + ".xlsx")
        return True
