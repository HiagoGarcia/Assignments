'''
Visa
starts with: 4
number of digits: 13, 16
4012-8888-8888-1881

Mastercard
starts with: 51-55
number of digits: 16
5105-1051-0510-5100

American Express
starts with: 34,37
length: 15
378-282-246-310-005
'''

#Problem 1
visa = [4,0,1,2,8,8,8,8,8,8,8,8,1,8,8,1]
visa2 = [5,0,2,3,1,8,8,2,6,4,8,9,2,2,2,0]
master = [5,1,0,5,1,0,5,1,0,5,1,0,5,1,0,0]
def sum(visa):
    oddsum = 0
    evensum = 0
    sum = 0
    for x in range(len(visa)):
        if(x%2 == 1):
            oddsum += visa[x]
        else:
            temp= visa[x] * 2
            if(temp>=10):
                evensum += temp%10 + 1
            else:
                evensum += temp
    sum = evensum + oddsum
    if(sum%10 == 0):
        print(f"{visa} is a valid credit card number")
    else:
        print(f"{visa} is not a valid card number")
    print(oddsum)
    print(evensum)
    print(sum)

sum(visa2)



#Problem 2

# def double_even(visa):
#     double_even = 0
#     for x in range(len(visa)):
#         if(visa[x]%2 == 0):
#             visa[x] *= 2
#             if (visa[x]>10):
#                 visa[x] = ''
#                 print(visa[x])
#             else:
#                 print(visa[x])
# double_even(visa)