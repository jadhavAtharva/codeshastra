import pyqrcode
from pyqrcode import QRCode
from datetime import datetime
from datetime import date
from random import randint
import sys
import pymongo
from pymongo import MongoClient
from random import randint
import random
import string

client = MongoClient()
client = MongoClient('localhost',27017)

def rand(n):
  alphabet = string.ascii_letters + string.digits
  return ''.join(random.choice(alphabet) for i in range(n))

now = datetime.now()

current_time = now.strftime("%H:%M")
today = date.today()
d1 = today.strftime("%d-%m-%Y")

db = client.ticketplease

a = rand(8)
b = d1
c = sys.argv[1]
d = sys.argv[2]
e = sys.argv[3]
f = current_time

tasks = db.tasks
data = {
    "src":c,
    "dest":d,
    "AFB":a,
    "ret":e,
    "date":b,
    "time":f
}

result_id = tasks.insert_one(data).inserted_id

s = a+','+b+','+c+','+d+','+e+','+f
print(c)
q = pyqrcode.create(s)

q.png('hey1.png', scale = 10)