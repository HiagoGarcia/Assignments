using System;
using System.Collections.Generic;

namespace Collections_Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            Dictionary<string, string> likes = new Dictionary<string, string>();
            //List of Flavors
            List<string> ice_cream = new List<string>();
            ice_cream.Add("Vanilla");
            ice_cream.Add("Mint");
            ice_cream.Add("Strawberry");
            ice_cream.Add("CookiesNCreem");
            ice_cream.Add("MooseTracks");
            Console.WriteLine($"{ice_cream.Count}");
            Console.WriteLine($"{ice_cream[2]}");
            ice_cream.RemoveAt(2);
            Console.WriteLine($"{ice_cream.Count}");
            //Three Basic Arrays
            int[] numArray = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            string[] Names = new string[] { "Tim", "Martin", "Nikki", "Sara" };
            foreach (string name in Names)
            {
                int index = rnd.Next(ice_cream.Count);
                string randomFlavor = ice_cream[index];
                likes.Add(name, " " + randomFlavor);
            }

            bool[] EveryOther = new bool[10];
            for (int i = 0; i < 10; i++)
            {
                bool Every = i % 2 == 0;
                EveryOther[i] = Every;
            }
            //User Info Dictionary
            foreach (KeyValuePair<string, string> entry in likes)
            {
                Console.WriteLine(entry.Key + entry.Value);
            }
        }
    }
}
