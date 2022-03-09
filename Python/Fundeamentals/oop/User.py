class Bank_account:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def deposit(self, ammount):
        self.balance += ammount

    def withdrawal(self, ammount):
        self.balance -= ammount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance ${self.balance}")

    def transfer_money(self, other_user, ammount):
        self.withdrawal(ammount)
        other_user.deposit(ammount)
        print(f"You transfered ${ammount} to {other_user.name}")

user1 = Bank_account('Guido van Rossum', 1500)
user2 = Bank_account('Lester', 3200)
user3 = Bank_account('Andy', 2400)

user1.deposit(150)
user1.deposit(300)
user1.deposit(574)
user1.withdrawal(1500)
user1.display_user_balance()

user2.deposit(1800)
user2.deposit(309)
user2.withdrawal(2256)
user2.withdrawal(1400)
user2.display_user_balance()

user3.deposit(1000)
user3.withdrawal(500)
user3.withdrawal(426)
user3.withdrawal(789)
user3.display_user_balance()

user1.transfer_money(user3, 500)

user1.display_user_balance()
user3.display_user_balance()