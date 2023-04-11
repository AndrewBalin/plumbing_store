import pymysql
import pymysql.cursors

db = pymysql.connect(host='193.168.131.40',
                     user='a0595760_plumbing',
                     password='YTHUb5V8',
                     database='a0595760_plumbing',
                     cursorclass=pymysql.cursors.DictCursor,
                     charset='utf8')

cursor = db.cursor()

all_category_filters = {}

cursor.execute("SELECT DISTINCT `Категория` FROM `data`")
categories = list(map(lambda x: x['Категория'], cursor.fetchall()))

categories = ['Аксессуары']

for category in categories:
    cursor.execute(f"SELECT DISTINCT `Подкатегория` FROM `data` WHERE `Категория`='{category}'")
    subcategories = list(map(lambda x: x['Подкатегория'], cursor.fetchall()))
    all_category_filters[category] = {}
    for subcategory in subcategories:
        cursor.execute(f"SELECT DISTINCT `Тип` FROM `data` WHERE `Подкатегория`='{subcategory}'")
        types = list(map(lambda x: x['Тип'], cursor.fetchall()))
        all_category_filters[category][subcategory] = types

cursor.close()

print(all_category_filters)

db.close()