using System;
using System.Collections.Generic;

namespace Wizard_Ninja_Samuria
{
    public class Human
    {
        // Fields for Human
        public string Name { get; set; }
        public int Strength { get; set; }
        public int Intelligence { get; set; }
        public int Dexterity { get; set; }
        private int health;

        public int Health
        {
            get
            {
                return health;
            }
            set
            {
                health = value;
            }
        }
        public Human(string name, int str, int intel, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = intel;
            Dexterity = dex;
            health = hp;
        }
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Dexterity = 3;
            Intelligence = 3;
            health = 100;
        }

        public virtual int Attack(Human target)
        {
            int dmg = Strength * 3;
            target.health -= dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            return target.health;
        }
        public void GetInfo()
        {
            Console.WriteLine(Name);
            Console.WriteLine($"Strength {Strength}");
            Console.WriteLine($"Intelligence {Intelligence}");
            Console.WriteLine($"Dexterity {Dexterity}");
            Console.WriteLine($"Health: {health}");
        }
    }
}
