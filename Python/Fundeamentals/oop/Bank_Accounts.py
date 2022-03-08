class Bank_account:
    all_account = []
    def __init__(self, name, balance, int_rate=0.01):
        self.name = name
        self.int_rate = int_rate
        self.balance = balance
        Bank_account.all_account.append(self)

    def deposit(self, ammount):
        self.balance += ammount
        return self

    def withdrawal(self, ammount):
        if self.balance <= 0:
            self.balance -= 5
            print('Charging a $5 fee')
        elif (self.balance - ammount <0):
            self.balance -= ammount + 5
            print('Charging a $5 fee')
        else:
            self.balance -= ammount

        return self

    def display_user_balance(self):
        print(f"Balance: ${self.balance}")

    def yield_interest(self):
        if self.balance>0:
            self.balance += ((self.balance)*self.int_rate)
        return self

    def transfer_money(self, other_user, ammount):
        self.withdrawal(ammount)
        other_user.deposit(ammount)
        print(f"You transfered ${ammount} to {other_user.name}")
        return self

    @classmethod
    def all_balances(cls):
        sum=0
        for account in cls.all_account:
            sum = account.balance
            print(f"${sum}")
        return sum

user1 = Bank_account('Guido van Rossum', 1500)
user2 = Bank_account('Lester', 2200)

user1.deposit(500).deposit(456).deposit(789).withdrawal(2000).yield_interest().display_user_balance()
user2.deposit(300).deposit(680).withdrawal(400).withdrawal(900).withdrawal(1800).withdrawal(81).yield_interest().display_user_balance()
Bank_account.all_balances()