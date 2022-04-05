using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static int[] RandomArray()
        {
            Random rnd = new Random();
            int[] numbers = new int[10];
            int max;
            int min;
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = rnd.Next(5, 26);
            }
            max = numbers[0];
            min = numbers[0];
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
                else if (numbers[i] < min)
                {
                    min = numbers[i];
                }
            }
            for (int i = 0; i < numbers.Length; i++)
            {
                sum = sum + numbers[i];
            }
            Console.WriteLine(sum);
            Console.WriteLine($"Min: {min}, Max: {max}");
            return numbers;
        }

        static string TossCoin()
        {
            Random rnd = new Random();
            Console.WriteLine("Tossing a Coin!");
            string result;
            int toss = rnd.Next(2);
            if (toss == 0)
            {
                result = "Heads";
            }
            else
            {
                result = "Tails";
            }
            Console.WriteLine(result);
            return result;
        }

        static double TossMultipleCoins(int num)
        {
            double heads = 0;
            for (int i = 0; i < num; i++)
            {
                if (TossCoin() == "Heads")
                {
                    heads++;
                }
            }
            Console.WriteLine($"An ratio of {heads / num} heads to total tosses.");
            return heads / num;
        }

        static List<string> Names()
        {
            Random rnd = new Random();
            List<string> names = new List<string>() { "Todd", "Tiffany", "Charlie", "Geneva", "Sydney" };
            List<string> greaterThen5 = new List<string>();
            for (int i = 0; i < names.Count; i++)
            {
                int index = rnd.Next(names.Count);
                string randomName = names[index];
                names[index] = names[i];
                names[i] = randomName;
            }
            foreach (string name in names)
            {
                Console.WriteLine(name);
            }
            for (int i = 0; i < names.Count; i++)
            {
                if (names[i].Length > 5)
                {
                    greaterThen5.Add(names[i]);
                }
            }
            return greaterThen5;
        }
        static void Main(string[] args)
        {
            RandomArray();
            TossCoin();
            TossMultipleCoins(3);
            Names();
        }
    }
}
