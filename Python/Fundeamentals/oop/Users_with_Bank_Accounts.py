#Bank account class and functions
class Bank_account:
    all_account = []
    def __init__(self, balance, int_rate=0.01):
        self.int_rate = int_rate
        self.balance = balance
        Bank_account.all_account.append(self)

    def deposit(self, ammount):
        self.balance += ammount
        return self

    def withdrawal(self, ammount):
        if self.balance <= 0:
            self.balance -= 5
            print('Incificiant Funds: Charging a $5 fee')
        elif (self.balance - ammount <0):
            self.balance -= ammount + 5
            print('Incificiant Funds: Charging a $5 fee')
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


#User class and functions
class User:
    def __init__(self, name):
        self.name = name
        self.account = Bank_account(int_rate=0.01, balance=0)

    def deposit(self, ammount):
        self.account.deposit(ammount)
        return self

    def withdrawal(self, ammount):
        self.account.withdrawal(ammount)
        return self

    def display_user_balance(self):
        self.account.display_user_balance()
        return self

    def yield_interest(self):
        self.account.yield_interest()
        return self

    def transfer_money(self, other_user, ammount):
        self.account.transfer_money(other_user, ammount)
        return self

#Users
user1 = User('Guido van Rossum')
user2 = User('Lester')