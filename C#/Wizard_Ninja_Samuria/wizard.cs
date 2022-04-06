using System;

namespace Wizard_Ninja_Samuria
{
    public class Wizard : Human
    {
        public Wizard(string name) : base(name, 3, 25, 3, 50)
        {
        }
        public override int Attack(Human target)
        {
            int dmg = Intelligence * 5;
            target.Health -= dmg;
            Console.WriteLine($"{Name} tossed a spell at {target.Name} for {dmg} damgage!");
            Health += dmg;
            Console.WriteLine($"{Name} healed for {dmg} health");
            return target.Health;
        }
        public int Heal(Human target)
        {
            int heal = 10 * Intelligence;
            target.Health += heal;
            Console.WriteLine($"{Name} healed {target.Name} for {heal} health!");
            return target.Health;
        }
    }
}