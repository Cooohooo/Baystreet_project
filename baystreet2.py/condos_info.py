from flask import Blueprint, make_response
import pymysql

app_condos = Blueprint('app_condos', __name__)


@app_condos.route('/avg_psf_88queen')
def avg_psf_88queen():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = '88 Queen'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/88queen')
def queen():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '88 Queen') and project_name = '88 Queen'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_lmt')
def avg_psf_lmt():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Liberty Market Tower'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/lmt')
def lmt():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Liberty Market Tower') and project_name = 'Liberty Market Tower'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_55mercer')
def avg_psf_55mercer():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = '55 Mercer'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/55mercer')
def mercer():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '55 Mercer') and project_name = '55 Mercer'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_next')
def avg_psf_next():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Next-Elgin East'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/next')
def next():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Next-Elgin East') and project_name = 'Next-Elgin East'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_elgineast')
def avg_psf_elgineast():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Elgin East'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/elgineast')
def elgineast():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Elgin East') and project_name = 'Elgin East'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_untitled')
def avg_psf_untitled():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Untitled'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/untitled')
def untitled():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Untitled') and project_name = 'Untitled'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_xo')
def avg_psf_xo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'XO'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/xo')
def xo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'XO') and project_name = 'XO'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_sxsw')
def avg_psf_sxsw():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'SXSW'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/sxsw')
def sxsw():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'SXSW') and project_name = 'SXSW'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_sxswt2')
def avg_psf_sxswt2():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'SXSW Tower2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/sxswt2')
def sxswt2():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'SXSW Tower2') and project_name = 'SXSW Tower2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_e2')
def avg_psf_e2():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'E2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/e2')
def e2():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'E2') and project_name = 'E2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_empiremaven')
def avg_psf_empiremaven():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Empire Maven'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/empiremaven')
def empiremaven():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Empire Maven') and project_name = 'Empire Maven'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_yorkville')
def avg_psf_yorkville():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = '11 Yorkville'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/yorkville')
def yorkville():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '11 Yorkville') and project_name = '11 Yorkville'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_portland')
def avg_psf_portland():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = '123 Portland'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/portland')
def portland():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '123 Portland') and project_name = '123 Portland'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp



@app_condos.route('/avg_psf_lighthouse')
def avg_psf_lighthouse():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Lighthouse East'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/lighthouse')
def lighthouse():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Lighthouse East') and project_name = 'Lighthouse East'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_lumina')
def avg_psf_lumina():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Lumina'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/lumina')
def lumina():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Lumina') and project_name = 'Lumina'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_thepeak')
def avg_psf_thepeak():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'The Peak'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/thepeak')
def thepeak():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Peak') and project_name = 'The Peak'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_thepoint')
def avg_psf_thepoint():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'The Point'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/thepoint')
def thepoint():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Point') and project_name = 'The Point'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_st')
def avg_psf_st():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'SkyTower'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/st')
def st():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'SkyTower') and project_name = 'SkyTower'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_rv')
def avg_psf_rv():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Riverview'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/rv')
def rv():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Riverview') and project_name = 'Riverview'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_ys')
def avg_psf_ys():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'Y&S'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/ys')
def ys():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Y&S') and project_name = 'Y&S'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_nordic')
def avg_psf_nordic():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf, Updates from dashboard_summ where project_name = 'nordic'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/nordic')
def nordic():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'nordic') and project_name = 'nordic'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_stanley')
def avg_psf_stanley():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'stanley'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','
        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/stanley')
def stanley():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'stanley') and project_name = 'stanley'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_reunion')
def avg_psf_reunion():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'reunion'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/reunion')
def reunion():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'reunion') and project_name = 'reunion'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_eightc')
def avg_psf_eightc():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '8 Cedarland'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/eightc')
def eightc():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '8 Cedarland') and project_name = '8 Cedarland'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_tfh')
def avg_psf_tfh():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'The Forest Hill'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/tfh')
def tfh():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Forest Hill') and project_name = 'The Forest Hill'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_inde')
def avg_psf_inde():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'in.DE'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/inde')
def inde():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'in.DE') and project_name = 'in.DE'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_unitedbldg')
def avg_psf_unitedbldg():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'The United Bldg'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/unitedbldg')
def unitedbldg():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The United Bldg') and project_name = 'The United Bldg'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_clairw')
def avg_psf_clairw():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '900 St. Clair W'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/clairw')
def clairw():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '900 St. Clair W') and project_name = '900 St. Clair W'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_ms')
def avg_psf_ms():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Markham Square'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/ms')
def ms():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Markham Square') and project_name = 'Markham Square'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_rf')
def avg_psf_rf():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'River and Fifth'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/rf')
def rf():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'River and Fifth') and project_name = 'River and Fifth'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_nottinghill')
def avg_psf_nottinghill():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Notting Hill'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/nottinghill')
def nottinghill():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Notting Hill') and project_name = 'Notting Hill'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_cgtower')
def avg_psf_cgtower():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'CG Tower'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/cgtower')
def cgtower():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'CG Tower') and project_name = 'CG Tower'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_galleria02')
def avg_psf_galleria02():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Galleria02'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/galleria02')
def galleria02():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Galleria02') and project_name = 'Galleria02'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_broadway')
def avg_psf_broadway():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '65 Broadway'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/broadway')
def broadway():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '65 Broadway') and project_name = '65 Broadway'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_crosstown')
def avg_psf_crosstown():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Crosstown'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/crosstown')
def crosstown():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Crosstown') and project_name = 'Crosstown'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_lakesuite')
def avg_psf_lakesuite():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Lake Suite'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/lakesuite')
def lakesuite():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Lake Suite') and project_name = 'Lake Suite'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_oakco')
def avg_psf_oakco():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Oak&Co'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/oakco')
def oakco():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Oak&Co') and project_name = 'Oak&Co'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_ksquare')
def avg_psf_ksquare():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Ksquare'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/ksquare')
def ksquare():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Ksquare') and project_name = 'Ksquare'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_eighthaus')
def avg_psf_eighthaus():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '8 Haus Boutique'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/eighthaus')
def eighthaus():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '8 Haus Boutique') and project_name = '8 Haus Boutique'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_fiftyfivec')
def avg_psf_fiftyfivec():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '55C'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','
        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/fiftyfivec')
def fiftyfivec():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '55C') and project_name = '55C'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_thebranch')
def avg_psf_thebranch():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'The Branch'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','
        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/thebranch')
def thebranch():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Branch') and project_name = 'The Branch'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_kingwest')
def avg_psf_kingwest():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '357 King W'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/kingwest')
def kingwest():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '357 King W') and project_name = '357 King W'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_tszorra')
def avg_psf_tszorra():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '36 Zorra'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/tszorra')
def tszorra():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '36 Zorra') and project_name = '36 Zorra'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_anx')
def avg_psf_anx():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Anx'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/anx')
def anx():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Anx') and project_name = 'Anx'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_themackenzie')
def avg_psf_themackenzie():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'The Mackenzie'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','
        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/themackenzie')
def themackenzie():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Mackenzie') and project_name = 'The Mackenzie'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_eightyonge')
def avg_psf_eightyonge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '8888 Yonge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/eightyonge')
def eightyonge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '8888 Yonge') and project_name = '8888 Yonge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_edgetowerone')
def avg_psf_edgetowerone():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Edge Tower 1'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/edgetowerone')
def edgetowerone():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Edge Tower 1') and project_name = 'Edge Tower 1'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_edgetowertwo')
def avg_psf_edgetowertwo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Edge Tower 2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/edgetowertwo')
def edgetowertwo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Edge Tower 2') and project_name = 'Edge Tower 2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_oneyonge')
def avg_psf_oneyonge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'One Yonge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/oneyonge')
def oneyonge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'One Yonge') and project_name = 'One Yonge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_lawrence')
def avg_psf_lawrence():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = '250 Lawrence'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/lawrence')
def lawrence():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = '250 Lawrence') and project_name = '250 Lawrence'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_tanu')
def avg_psf_tanu():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Tanu'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/tanu')
def tanu():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Tanu') and project_name = 'Tanu'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_uppersky')
def avg_psf_uppersky():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Upper Sky'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/uppersky')
def uppersky():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Upper Sky') and project_name = 'Upper Sky'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_margo')
def avg_psf_margo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Margo'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/margo')
def margo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Margo') and project_name = 'Margo'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_ppt')
def avg_psf_ppt():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Promenade Park Towers'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/ppt')
def ppt():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Promenade Park Towers') and project_name = 'Promenade Park Towers'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_azura')
def avg_psf_azura():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Azura'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/azura')
def azura():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Azura') and project_name = 'Azura'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_thesaint')
def avg_psf_thesaint():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'The Saint'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/thesaint')
def thesaint():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Saint') and project_name = 'The Saint'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_wsedge')
def avg_psf_wsedge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Waters Edge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/wsedge')
def wsedge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Waters Edge') and project_name = 'Waters Edge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_nothirtyone')
def avg_psf_nothirtyone():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'No.31'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/nothirtyone')
def nothirtyone():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'No.31') and project_name = 'No.31'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_sugarwharfw')
def avg_psf_sugarwharfw():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Sugar Wharf'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/sugarwharfw')
def sugarwharfw():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Sugar Wharf') and project_name = 'Sugar Wharf'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_bondonyonge')
def avg_psf_bondonyonge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'The Bond on Yonge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/bondonyonge')
def bondonyonge():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Bond on Yonge') and project_name = 'The Bond on Yonge'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_extwo')
def avg_psf_extwo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'EX2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/extwo')
def extwo():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'EX2') and project_name = 'EX2'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_thornhill')
def avg_psf_thornhill():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'The Thornhill'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/thornhill')
def thornhill():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'The Thornhill') and project_name = 'The Thornhill'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_pearl')
def avg_psf_pearl():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Pearl'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/pearl')
def pearl():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Pearl') and project_name = 'Pearl'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/avg_psf_monde')
def avg_psf_monde():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select avg_psf,Updates from dashboard_summ where project_name = 'Monde'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description
    column_list = []
    for list in field:
        column_list.append(list[0])
    try:
        result_j = ''
        for rows in result:
            result_j += '[{' + '"' + 'AVG_PSF' + '"' + ':' + '"' + rows[0] + '"' + "," + '"' + 'Updates' + '"' + ':' + '"' + rows[1] + '"' + '}]' + ','

        result_j = result_j.rstrip(',')
    except:
        print('ERROR: unable to fetch data from baystreet_group')

    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp


@app_condos.route('/monde')
def monde():
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()

    sql = "select suite, model, type, interior, exposure, bathroom, price, psf from dashboard where update_date = (select updates from dashboard_summ where project_name = 'Monde') and project_name = 'Monde'"
    cursor.execute(sql)
    result = cursor.fetchall()
    field = cursor.description

    column_list = []
    for list in field:
        column_list.append(list[0])

    try:
        result_j = '{"result":['
        for rows in result:
            result_j += '{' + '"' + 'Suite' + '"' + ':' + '"' + rows[0] + '"' + ',' + \
                        '"' + 'Model' + '"' + ':' + '"' + rows[1] + '"' + ',' + \
                        '"' + 'Type' + '"' + ':' + '"' + rows[2] + '"' + ',' + \
                        '"' + 'Size' + '"' + ':' + '"' + rows[3] + '"' + ',' + \
                        '"' + 'Exposure' + '"' + ':' + '"' + rows[4] + '"' + ',' + \
                        '"' + 'Bathrooms' + '"' + ':' + '"' + rows[5] + '"' + ',' + \
                        '"' + 'Price' + '"' + ':' + '"' + rows[6] + '"' + ',' + \
                        '"' + 'PSF' + '"' + ':' + '"' + rows[7] + '"' + '}' + ','
        result_j = result_j.rstrip(',')
        result_j += ']}'
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return resp