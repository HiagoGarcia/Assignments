class Male_Hero:
    all_Male_Heros = []
    def __init__(self, name, height, weight, age, power, catchphrase=''):
        self.name = name
        self.height = height
        self.weight = weight
        self.age = age
        self.power = power
        self.catchphrase = catchphrase
        Male_Hero.all_Male_Heros.append(self)

    def addcatchphrase(self):
        self.catchphrase=(f"I {self.name} shall stop you with the power of {self.power}")
        print(self.catchphrase)
        return self

    @classmethod
    def older(cls):
        older = ''
        for Male_Hero in cls.all_Male_Heros:
            if (Male_Hero.age > 30):
                older = (f"{Male_Hero.name} is over 30")
                print(older)
            return older


class Female_Hero:
    def __init__(self, name, height, weight, age, power):
        self.name = name
        self.height = height
        self.weight = weight
        self.age = age
        self.power = power

    def addcatchphrase(self):
        self.catchphrase=(f"I {self.name} shall stop you with the power of {self.power}")
        print(self.catchphrase)
        return self
        # def oldest(self,other_hero):
            # if (self.age hero > self.age other_hero)
                #make hero.append(oldest)
            #as a for loop to cycle through all other heros
        #retrun self



# class Heros:
#     def __init__(self)

Male_Hero1 = Male_Hero('HTML', 6, 120, 20, 'People Pleaser')

Female_Hero1 = Female_Hero('CSS', 4, 90, 13, 'Perfectionist')

Male_Hero2 = Male_Hero('JavaScript', 7, 180, 31, 'Super Strong')

Female_Hero2 = Female_Hero('Python', 2, 200, 40, 'Emotion Manipulation')

Male_Hero3 = Male_Hero('MERN', 6, 150, 27, 'X-ray Vision')

Male_Hero1.addcatchphrase()
Female_Hero1.addcatchphrase()
# Male_Hero.older()