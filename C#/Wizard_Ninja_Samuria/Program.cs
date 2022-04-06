using System;
using Wizard_Ninja_Samuria;

namespace Wizard_Ninja_Samuria
{
    class Program
    {
        static void Main(string[] args)
        {
            Human dummy = new Human("Dummy", 1, 0, 0, 1020);
            Ninja ninja = new Ninja("Ninja");
            Samuria samuria = new Samuria("Samuria");
            Wizard wizard = new Wizard("Wizard");
        }
    }
}
