using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void RandomArray(int[] numbers)
        {
            Random rnd = new Random();
            int max = 0;
            int min = max;
            for (int i = 0; i < 10; i++)
            {
                numbers[i] = rnd.Next(5, 26);
                if (min == 0)
                {
                    min = (int)numbers[0];
                }
                if (numbers[i] > max)
                    max = (int)numbers[i];
                {
                }
                if (numbers[i] < min)
                {
                    min = (int)numbers[i];
                }
            }
            for (int id = 0; id < numbers.Length; id++)
            {
                Console.WriteLine(numbers[id]);
            }
            Console.WriteLine($"Min: {min}, Max: {max}");
        }

        static int TossCoin()
        {
            Random rnd = new Random();
            Console.WriteLine((string)"Tossing a Coin!");
            int toss = rnd.Next(1, 3);
            if (toss == 1)
            {
                Console.WriteLine("Heads");
                return (int)1;
            }
            else
            {
                Console.WriteLine("Tails");
                return (int)2;
            }
        }

        static double TossMultipleCoins(int num)
        {
            int heads = 0;
            int tails = 0;
            for (int i = 0; i < num; i++)
            {
                TossCoin();
                if (TossCoin() == 1)
                {
                    heads = heads + 1;
                }
                else
                {
                    tails = tails + 1;
                }
            }
            if (heads > tails)
            {
                Console.WriteLine($"An ratio of {(double)(int)heads / (int)tails} heads to tails");
                return (double)(int)heads / (int)tails;
            }
            else
            {
                Console.WriteLine($"An ratio of {(double)(int)tails / (int)heads} tails to heads");
                return (double)(int)tails / (int)heads;
            }
        }

        static List<string> Names()
        {
            Random rnd = new Random();
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");
            List<string> newList = new List<string>();
            foreach( string name in names)
            {
                int index = rnd.Next(names.Count);
                string randomName = names[index];
                Console.WriteLine(randomName);
                if(name.Length > 5)
                {
                    newList.Add(name);
                }
            }
            return newList;
        }
        static void Main(string[] args)
        {
            RandomArray(new int[10]);
            TossCoin();
            TossMultipleCoins(3);
            Names();
        }
    }
}
