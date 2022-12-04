import json

import pymysql
import pymysql.cursors
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_AS_ASCII'] = False

db = pymysql.connect(host='193.168.131.40',
                     user='a0595760_plumbing',
                     password='YTHUb5V8',
                     database='a0595760_plumbing',
                     cursorclass=pymysql.cursors.DictCursor,
                     charset='utf8')

cursor = db.cursor()


@app.route('/get_main_info/')
def main_info():

    cursor.execute('SELECT * FROM data')
    all = cursor.fetchall()

    cursor.execute('SELECT DISTINCT `Категория` from data')
    category = cursor.fetchall()
    category = list(map(lambda x: x['Категория'], category))

    cursor.execute('SELECT DISTINCT `Подкатегория` from data')
    undercategory = cursor.fetchall()
    undercategory = list(map(lambda x: x['Подкатегория'], undercategory))

    cursor.execute('SELECT DISTINCT `Тип` from data')
    type_p = cursor.fetchall()
    type_p = list(map(lambda x: x['Тип'], type_p))

    cursor.execute('SELECT MIN(`Цена розничная`) from data')
    min_price = cursor.fetchall()[0]["MIN(`Цена розничная`)"]

    cursor.execute('SELECT MAX(`Цена розничная`) from data')
    max_price = cursor.fetchall()[0]["MAX(`Цена розничная`)"]

    js = {
        'Товаров всего': len(all),
        'Категории': category,
        'Подкатегории': undercategory,
        'Типы товаров': type_p,
        'Минимальныя цена': min_price,
        'Максимальная цена': max_price,
    }
    print(js)
    return js


if __name__ == '__main__':
    app.run()
