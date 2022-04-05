using System;

namespace Puzzles
{
    class Program
    {
        static void RandomArray()
        {
            Random rnd = new Random();
            for (int i = 5; i <= 25; i++)
            {
                int[] numbers = new int[] {rnd.Next()};
            }
        }
        static void Main(string[] args)
        {
            RandomArray();
        }
    }
}
