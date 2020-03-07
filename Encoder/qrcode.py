import pyqrcode
from pyqrcode import QRCode

a = '70100500'
b = '07/03/2020'
c = 'sanpada'
d = 'nerul'
e = '0'
f = '15:36'

s = a+','+b+','+c+','+d+','+e+','+f

print(s)

q = pyqrcode.create(s)

q.png(a+'.png', scale = 10)
 