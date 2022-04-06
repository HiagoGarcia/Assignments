using System;
using Person;

namespace Wizard_Ninja_Samuria
{
    class Program
    {
        static void Main(string[] args)
        {
            Human wizard = new Human("Wizard", 5, 25, 10, 50);
            Human ninja = new Human("Ninja", 20, 20, 125, 175);
            Human samuria= new Human("Samuria", 8, 3, 5, 200);
        }
    }
}
