using System;

namespace Wizard_Ninja_Samuria
{
    public class Ninja : Human
    {
        public Ninja(string name) : base(name, 3, 3, 175, 100)
        {
        }
        public override int Attack(Human target)
        {
            Random rnd = new Random();
            int dmg = Dexterity * 5;
            target.Health -= dmg;
            Console.WriteLine($"{Name} backstabbed {target.Name} for {dmg} damgage!");
            int critical = rnd.Next(100);
            if (critical >= 80)
            {
                target.Health -= 10;
                Console.WriteLine($"{Name} crit for 10 additional damage!");
            }
            return target.Health;
        }
        public int Steal(Human target)
        {
            target.Health -= 5;
            Console.WriteLine($"{Name} leeched {target.Name} for 5 damgage!");
            Health += 5;
            Console.WriteLine($"{Name} healed 5 health!");
            return target.Health;
        }
    }
}