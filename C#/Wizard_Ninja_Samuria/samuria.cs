using System;

namespace Wizard_Ninja_Samuria
{
    public class Samuria : Human
    {
        public Samuria(string name) : base(name, 3, 3, 3, 200)
        {
        }
        public override int Attack(Human target)
        {
            int dmg = Intelligence * 5;
            target.Health -= dmg;
            if (target.Health <= 50)
            {
                target.Health = 0;
                Console.WriteLine($"{Name} did a final swing, dropping {target.Name}.");
                return target.Health;
            }
            Console.WriteLine($"{Name} slashed {target.Name} for {dmg} damgage!");
            return target.Health;
        }
        public int Meditate()
        {
            Health = 200;
            Console.WriteLine($"{Name} focuses, restoring their health to full.");
            return Health;
        }
    }
}