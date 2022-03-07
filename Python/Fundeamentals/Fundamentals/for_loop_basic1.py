#Problem 1
for x in range(0, 151):
    print(x)

#Problem 2
for x in range(5, 1001, 5):
    print(x)

#Problem 3
for x in range(0, 101):
    if x in range(10, 101, 10):
        print("Coding Dojo")
    elif x in range(5, 101, 5):
        print("Coding")
    else:
        print(x)

#Problem 4
x=1
oddsum=0
while x <= 500000:
    if(x%2 != 0):
        oddsum+=x
    x+=1
print(oddsum)

#Problem 5
for x in range(2018, -1, -4):
    print(x)

#Problem 6
lownum=2
highnum=9
mult=3
x=lownum
while x<=highnum:
    if(x%mult == 0):
        print(x)
    x+=1