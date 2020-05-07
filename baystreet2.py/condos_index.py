from flask import Blueprint, make_response, request
import pymysql
import json

app_index = Blueprint('app_index', __name__)


@app_index.route('/login', methods=['POST','GET'])
def login():
    data = request.get_data()
    datum = json.loads(data)
    username = datum.get("usr")
    password = datum.get("pwd")
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()
    sql = "SELECT * FROM userinfo WHERE username=" + '"' +  str(username) + '"' + " AND password=" + '"' + str(password) + '"' + ""
    cursor.execute(sql)
    result = cursor.fetchall()
    try:
        result_j = ""
        if len(result) == 1:
            result_j += "{" + '"status"' + ":" + '"success"' + "," + '"message"' + ":" + '"true"' + "}"
        else:
            result_j += "{" + '"status"' + ":" + '"failed"' + "," + '"message"' + ":" + '"false"' + "}"
    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    resp.headers['Access-Control-Allow-Headers'] = '*'
    resp.headers['Access-Control-Allow-Credentials'] = 'true'
    resp.headers['Access-Control-Max-Age'] = '3600'
    return resp


@app_index.route('/signup', methods=['POST','GET'])
def signup():
    data = request.get_data()
    datum = json.loads(data)
    print(datum)
    username = datum.get("usr")
    password = datum.get("pwd")
    email = datum.get('ema')
    phone = datum.get('phn')
    company = datum.get('cpn')
    agent = datum.get('agt')
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()
    sql = "INSERT INTO userinfo (username, password, email, phonenumber, companyname, agent) VALUE (" + '"' +  str(username) + '"' + "," + '"' + str(password) + '"' + "," + '"' + str(email) +'"' + "," + '"' + str(phone) + '"' + "," + '"' + str(company) + '"' + "," + '"' +str(agent) + '"' + ")"
    print(sql)
    cursor.execute(sql)
    connect.commit()
    try:
        result_j = "{" + '"status"' + ":" + '"success"' + "," + '"message"' + ":" + '"true"' + "}"

    except:
        connect.rollback()
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    resp.headers['Access-Control-Allow-Headers'] = '*'
    resp.headers['Access-Control-Max-Age'] = '3600'
    return resp


@app_index.route('/reset', methods=['POST','GET'])
def reset():
    data = request.get_data()
    datum = json.loads(data)
    print(datum)
    username = datum.get("usr")
    password = datum.get("pwd")
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()
    sql = "UPDATE userinfo SET password = %s WHERE username = %s"
    print(sql)
    cursor.execute(sql, (password, username))
    connect.commit()
    try:
        result_j = "{" + '"status"' + ":" + '"success"' + "," + '"message"' + ":" + '"true"' + "}"
        print(result_j)

    except:
        connect.rollback()
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    resp.headers['Access-Control-Allow-Headers'] = '*'
    resp.headers['Access-Control-Max-Age'] = '3600'
    return resp


@app_index.route('/checkusername', methods=['POST'])
def checkusername():
    data = request.get_data()
    datum = json.loads(data)
    username = datum.get("usr")
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )
    cursor = connect.cursor()
    sql = "SELECT * FROM userinfo WHERE username=" + '"' + str(username) + '"' + ""
    cursor.execute(sql)
    result = cursor.fetchall()
    try:

        if len(result) == 1:
            result_j += "{" + '"status"' + ":" + '"success"' + "," + '"exist"' + ":" + '"true"' + "}"
        else:
            result_j += "{" + '"status"' + ":" + '"failed"' + "," + '"exist"' + ":" + '"false"' + "}"

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    cursor.close()
    connect.close()
    resp = make_response(result_j)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    resp.headers['Access-Control-Allow-Headers'] = '*'
    resp.headers['Access-Control-Max-Age'] = '3600'
    return resp


@app_index.route('/sumofcondos')
def sumofcondos():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "SELECT COUNT(distinct Project_Name) From dashboard_summ"
    cursor.execute(sql)
    result = cursor.fetchall()
    try:

        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofmarkham')
def sumofmarkham():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as markham, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'markham'"
    cursor.execute(sql)
    result = cursor.fetchall()
    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofdowntown')
def sumofdowntown():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as downtown, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'downtown'"
    cursor.execute(sql)
    result = cursor.fetchall()
    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofnorthyork')
def sumofnorthyork():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as northyork, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'north york'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofmidtown')
def sumofmidtown():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as midtown, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'midtown'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofetobicoke')
def sumofetobicoke():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as etobicoke, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'etobicoke'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofvaughan')
def sumofvaughan():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as vaughan, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'vaughan'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofoakville')
def sumofoakville():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as oakville, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'oakville'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofscarborough')
def sumofscarborough():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as scarborough, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'scarborough'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofmississauga')
def sumofmississauga():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as mississauga, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'mississauga'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofthornhill')
def sumofthornhill():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as thornhill, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'thornhill'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp


@app_index.route('/sumofrichmondhill')
def sumofrichmondhill():
    result_j = ''
    connect = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='hwh19931228',
        db='baystreet_group'
    )

    cursor = connect.cursor()
    sql = "select count(region) as richmondhill, round(avg(cast(avg_psf as SIGNED))) as avg_psf from dashboard_summ where region = 'richmond hill'"
    cursor.execute(sql)
    result = cursor.fetchall()

    try:
        result_j += '[{' + '"' + 'SUM' + '"' + ':' + '"' + str(result[0][0]) + '"' + ',' + '"' + 'PSF' + '"' + ':' + '"' + str(result[0][1]) + '"' + '}]'

    except:
        print('ERROR: unable to fetch data from baystreet_group')
    finally:
        cursor.close()
        connect.close()
        resp = make_response(result_j)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
        return resp

