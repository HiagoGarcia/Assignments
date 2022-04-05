using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

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


        public Human (string name, int strength, int intelligence, int dexterity, int health)
        {
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            Health = health;
        }


        public int Attack(Human target)
        {
            target.Health = target.Health - (target.Strength *5);
            return target.Health;
        }
    }
}
