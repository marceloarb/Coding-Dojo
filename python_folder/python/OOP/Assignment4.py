
        
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

    def transfer(self,amount,second_user):
        self.balance = self.balance - amount
        second_user.balance = second_user.balance + amount
        return self


class user:
    def __init__(self,username,useremail,balance,interest_rate):
        self.name = username
        self.email=useremail
        self.bank=bankaccount(balance,interest_rate)

        #self.balance=bankaccount(0,0.5)

    def deposit(self):
        self.bank.deposit
        print(self.bank.balance)
        return self

    def withdraw(self):
        self.bank.withdraw
        print(self.bank.balance)
        return self
    
    def display(self):
        print(self.bank.balance)
        return self




marcelo=user("Marcelo","marceloarthurb@gmail.com",0,0)
brandom=user("Brandom", "Brandom@codingdojo.com",0,0)
joao=user("John", "Jonh@codingdojo.com",0,0)

marcelo.bank.deposit(300).withdraw(100).display()
