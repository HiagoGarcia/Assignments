using System;
using System.Collections.Generic;

namespace Person
{
    class Human
    {
        // Fields for Human
        public string Name { get; set; }
        public int Strength { get; set; }
        public int Intelligence { get; set; }
        public int Dexterity { get; set; }
        private int health { get; set; }

        public int Health
        {
            get
            {
                return health;
            }
            set
            {
                if (health > 0)
                {
                    health = value;
                }
            }
        }
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Dexterity = 3;
            Intelligence = 3;
            Health = 100;
        }


        public Human(string name, int strength, int intelligence, int dexterity, int health)
        {
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            Health = health;
        }


        public int Attack(Human target)
        {
            int dmg = Strength * 3;
            target.Health -= dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            return target.Health;
        }

        public int Spell(Human target, Human self)
        {
            int dmg = Intelligence * 5;
            target.Health -= dmg;
            Console.WriteLine($"{Name} tossed a spell at {target.Name} for {dmg} damgage!");
            self.Health += dmg;
            Console.WriteLine($"{Name} healed for {dmg} health");
            return (target.Health); (self.Health);
        }
    }
}
