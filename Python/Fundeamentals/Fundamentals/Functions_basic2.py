#Problem 1 Countdown
def countdown(num):
    output = []
    for i in range(num,-1,-1):
        output.append(i)
    return output

print(countdown(5))

#Problem 2 Print and Return
def print_and_return(list):
    print(list[0])
    return list[1]

print(print_and_return([1,2]))

#Problem 3 First Plus Length
def first_plus_length(list):
    return list[0] + len(list)

print(first_plus_length([1,2,3,4,5]))

#Problem 4 Values Greater than Second
def greater(list):
    if len(list) <2:
        return False
    output = []
    for i in range(0,len(list)):
        if list[i] > list[1]:
            output.append(list[i])
    print(len(output))
    return output
print(greater([5,2,3,2,1,4]))
print(greater([3]))

#Problem 5 This Length, That Value

def this_length(num1,num2):
    output=[]
    for i in range(0, num1):
        output.append(num2)
    return output

print(this_length(4,7))
print(this_length(6,2))