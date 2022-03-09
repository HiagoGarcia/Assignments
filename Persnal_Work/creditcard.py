'''

Visa
starts with: 4
number of digits: 13, 16
4012-8888-8888-1881

Mastercard
starts with: 51-55
number of digits: 16
5105-1051-0510-5100


1. Calculate sum of odd indexs
2. double the even numbers indexs. if doubling a number results in a 2 digit number, add the digits.
    Example1: 2*2 = 4 is a single digit
    Example2: 9*2 = 18.
    Instead of 18, the result is 1+8 = 9
3. Add the sum of even places after doubling
4. Add the values from step 2 and 3
5. if the value from step 4 is divisible by 10, it is a valid credit card number
'''
visa = [4,0,1,2,8,8,8,8,8,8,8,8,1,8,8,1]

def validate(card):
    sum = 0
    sum_of_i = 0
    e = 0
    total = 0
    for i in range(len(card)):
        if(i%2 == 1):
            sum += card[i]
        else:
            sum_of_i = card[i] * 2
            if(sum_of_i>=10):
                e += sum_of_i%10 + 1
            else:
                e += sum_of_i
    total = e + sum
    if(total%10 == 0):
        print('It is a valid credit card')
    else:
        print('Is not a valid credit card')


validate(visa)


#how do you split 16 and add into 7
