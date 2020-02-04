class bankaccount:
    def __init__(self,balance,interest_rate):
        self.balance=balance
        self.interest= interest_rate

    def deposit(self,amount):
        self.balance = self.balance+amount
        print(self.balance)
        return self

    def withdraw(self,amount):
        self.balance = self.balance-amount
        print(self.balance)
        return self

    def interestt(self):
        self.balance += (self.interest*self.balance)
        print(self.balance)
        return self
    
    def display(self):
        print(self.balance)
        return self

account1= bankaccount(0,0.2)
account2=bankaccount(0,0.5)
account1.deposit(200).deposit(200).display()
account2.deposit(400).withdraw(100).interestt().display()





