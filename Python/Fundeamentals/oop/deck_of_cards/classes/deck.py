from tkinter.messagebox import QUESTION
from random import randint
from . import card


class Deck:


    def __init__( self ):
        suits = [ "spades" , "hearts" , "clubs" , "diamonds" ]
        #What holds the deck
        self.cards = []

        #How the cards are made.
        for s in suits:#Becomes the suit strings.
            for i in range(1,14):#Determins what the face is going to be.
                str_val = "" #Accting as a place holder
                game_val = i #To determin how much the card is worth
                if i == 1:
                    str_val = "Ace"
                    game_val = 1
                elif i == 11:
                    str_val = "Jack"
                    game_val = 10
                elif i == 12:
                    str_val = "Queen"
                    game_val = 10
                elif i == 13:
                    str_val = "King"
                    game_val = 10
                else:
                    str_val = str(i)#If i is = 2-10 it turns into a string
                self.cards.append( card.Card( s , i , str_val, game_val))#The is made and is put into the array

    #Shows all the cards in order of index
    def show_cards(self):
        for card in self.cards:
            card.card_info()

    #This is a temp variable that randomizes the original array and sets as the array. 
    def shuffle(self):
        
        print("Start Shuffle")
        randomdeck = []
        
        for x in range(0, len(self.cards)):
            randomdeck.insert(randint(0, len(self.cards)), self.cards[x])
        self.cards = randomdeck
        return self.cards

    #Whats deals out the cards.
    #It checks your score to see if you won or busted or need to hit again.
    def hit(self):
        total_point = 0
        for x in range(len(self.cards)):
            print(f"{self.cards[x].string_val} of {self.cards[x].suit}")
            total_point+=self.cards[x].game_val
            if(total_point>21): #Checks to see if the last hit put you over the ends the function.
                    print("Bust")
                    return 
            elif(total_point == 21):#Checks to see if the last hit put you at 21 and ends the function
                    print("You Win")
                    return
            else:
                print(f"You are at {total_point} points")#Tells you how many points you're at.
                QUESTION = input('Hit? Y/N ').upper()#Prompts the player for and input. Depending on the input determins the next step.
                if QUESTION == ('N'):#N ends the function.
                    print('Shame.')
                    print("Your next card would've put you at 21. Maybe")
                    total_point = 0
                    return
                elif QUESTION != ('Y'):
                    print("That's not a choice.")
                else:
                    print('Good choice.')




