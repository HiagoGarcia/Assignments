using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void RandomArray(int[] numbers)
        {
            Random rnd = new Random();
            for (int i = 0; i < 10; i++)
            {
                numbers[i] = rnd.Next(5,25);
            }
            for( int id = 0; id < numbers.Length; id++)
            {
                Console.WriteLine(numbers[id]);
            }
        }
        static void Main(string[] args)
        {
            RandomArray(new int[10]);
        }
    }
}
