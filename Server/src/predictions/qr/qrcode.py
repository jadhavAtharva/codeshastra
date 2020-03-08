import pyqrcode
from pyqrcode import QRCode
from datetime import datetime
from datetime import date
from random import randint
import sys
from random import randint

now = datetime.now()

current_time = now.strftime("%H:%M")
today = date.today()
d1 = today.strftime("%d-%m-%Y")

a = sys.argv[3]
b = d1
c = sys.argv[1]
d = sys.argv[2]
e = sys.argv[4]
f = current_time

s = a+','+b+','+c+','+d+','+e+','+f

q = pyqrcode.create(s)

q.png('hey.png', scale = 10)

print(s)