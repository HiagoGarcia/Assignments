#Problem 1
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

#1.1
x[1] = [15,8,9]

#1.2
students[0].update({'last_name' : 'Bryant'})

#1.3
sports_directory.update({'soccer' : ['Anders', 'Roland', 'Rooney']})

#1.4
z[0].update({'y' : 30})

#Problem 2
students = [
        {'first_name' : 'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
# iterateDictionary(students) 
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
""" first_name - Michael, last_name - Jordan
first_name - John, last_name - Rosales
first_name - Mark, last_name - Guillen
first_name - KB, last_name - Tonel
"""
def iterateDictionary(some_list):
    for i in range(len(some_list)):
        for key, value in some_list[i].items():
            print(key, value)
            
    #     print('first_name', '-', key, ',', 'last_name', '-', val)

print(iterateDictionary(students))

#Problem 3
def iterateDictionary2(first_name, some_list):
    for i in range(len(some_list)):
        for first_name in some_list.keys:
            print(first_name)
print(iterateDictionary2(students))

# Problem 4
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def print_info(dict):
    print('----------------')
    print(f"{len(dict['locations'])} Locations")
    for i in range(len(dict['locations'])):
        print(dict['locations'][i])
    print('----------------')
    print(f"{len(dict['instructors'])} INSTRUCTORS")
    for i in range(len(dict['instructors'])):
        print(dict['instructors'][i])
print_info(dojo)