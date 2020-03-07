import pyqrcode
from pyqrcode import QRCode
import sys

a= []
for i in range(1,8):
    a.append(sys.argv[i])
print(a)

# a = sys.argv[5]
# b = sys.argv[3]
# c = sys.argv[1]
# d = sys.argv[2]
# e = sys.argv[6]
# f = sys.argv[4]

s = a+','+b+','+c+','+d+','+e+','+f

q = pyqrcode.create(s)

q.png(a+'.png', scale = 10)
 
 print(a)