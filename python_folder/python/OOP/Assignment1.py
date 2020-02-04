class user:
    def __init__(self,username,useremail,balance):
        self.name = username
        self.email=useremail
        self.balance=balance

    def deposit(self,amount):
        self.balance = self.balance+amount
        print(self.balance)
        return self

    def withdraw(self,amount):
        self.balance = self.balance-amount
        print(self.balance)
        return self
    
    def display(self):
        print(self.balance)
        return self

    def transfer(self,amount,second_user):
        self.balance = self.balance - amount
        second_user.balance = second_user.balance + amount
        return self



marcelo=user("Marcelo","marceloarthurb@gmail.com",50)
brandom=user("Brancom", "Brandom@codingdojo.com",100)
joao=user("John", "Jonh@codingdojo.com", 500)
marcelo.deposit(2)
marcelo.withdraw(2)
marcelo.display()
marcelo.deposit(2)
marcelo.deposit(2)
brandom.deposit(2)
brandom.deposit(2)
marcelo.transfer(1000,brandom)
brandom.display()
brandom.transfer(1000,marcelo)
marcelo.display()

