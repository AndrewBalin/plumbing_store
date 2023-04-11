import json

from datetime import datetime

import pymysql
import pymysql.cursors
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_AS_ASCII'] = False

def sql_select(request):

    db = pymysql.connect(host='193.168.131.40',
                         user='a0595760_plumbing',
                         password='YTHUb5V8',
                         database='a0595760_plumbing',
                         cursorclass=pymysql.cursors.DictCursor,
                         charset='utf8')

    with db.cursor() as cursor:
        cursor.execute(request)
        result = cursor.fetchall()

        cursor.close()
        db.close()

        return result


@app.route('/get_main_info/')
def main_info():

    all = sql_select('SELECT * FROM data')

    category = sql_select('SELECT DISTINCT `Категория` from data')
    category = list(map(lambda x: x['Категория'], category))

    subcategory = sql_select('SELECT DISTINCT `Подкатегория` from data')
    subcategory = list(map(lambda x: x['Подкатегория'], subcategory))

    type_p = sql_select('SELECT DISTINCT `Тип` from data')
    type_p = list(map(lambda x: x['Тип'], type_p))

    min_price = sql_select('SELECT MIN(`Цена розничная`) from data')
    min_price = min_price[0]["MIN(`Цена розничная`)"]

    max_price = sql_select('SELECT MAX(`Цена розничная`) from data')
    max_price = max_price[0]["MAX(`Цена розничная`)"]

    js = {
        'Товаров всего': len(all),
        'Категории': category,
        'Подкатегории': subcategory,
        'Типы товаров': type_p,
        'Минимальныя цена': min_price,
        'Максимальная цена': max_price,
    }
    print(js)

    return json.dumps(js)


@app.route('/get_categories/', methods=['POST'])
def get_categories():

    stime = datetime.now()

    all_category_filters = {}

    categories = sql_select("SELECT DISTINCT `Категория` FROM `data`")
    categories = list(map(lambda x: x['Категория'], categories))

    for category in categories:
        subcategories = sql_select(f"SELECT DISTINCT `Подкатегория` FROM `data` WHERE `Категория`='{category}'")
        subcategories = list(map(lambda x: x['Подкатегория'], subcategories))
        all_category_filters[category] = {}
        for subcategory in subcategories:
            types = sql_select(f"SELECT DISTINCT `Тип` FROM `data` WHERE `Подкатегория`='{subcategory}'")
            types = list(map(lambda x: x['Тип'], types))
            all_category_filters[category][subcategory] = types

    print(datetime.now() - stime)

    return json.dumps(all_category_filters)


@app.route('/filters/', methods=['POST'])
def filters():

    filter = request.json

    category = f"`Категория`='{filter['category']}'" if filter.get('category') else '1'

    subcategory = f"`Подкатегория`='{filter['subcategory']}'" if filter.get('subcategory') else '1'

    type = f"`Тип`='{filter['type']}'" if filter.get('type') else '1'

    vendors = " AND ".join(list(map(lambda x: f"`Производитель`={x}", filter['vendors']))) if filter.get('type') else '1'

    min_price = f"`Цена розничная`>={filter['min_price']}" if filter.get('min_price') else '1'

    max_price = f"`Цена розничная`<={filter['max_price']}" if filter.get('max_price') else '1'

    conditions = [category, subcategory, type, vendors, max_price, min_price]
    result = sql_select(f"SELECT * FROM data WHERE {' AND '.join(conditions)}")

    return json.dumps(result)



if __name__ == '__main__':
    app.run()
