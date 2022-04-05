using System;
using System.Collections.Generic;

namespace Basic_13
{
    class Program
    {
        public static void PrintNumbers(int start = 1, int end = 255)
        {
            // Print all of the integers from 1 to 255.
            for (int i = start; i <= end; i++)
            {
                Console.WriteLine(i);
            }
        }
        public static void PrintOdds(int start = 1, int end = 255)
        {
            // Print all of the odd integers from 1 to 255.
            for (int i = start; i <= end; i++)
            {
                if (i % 2 == 1)
                {
                    Console.WriteLine(i);
                }
            }
        }
        public static void PrintSum(int start = 0, int end = 255, int sum = 0)
        {
            // Print all of the numbers from 0 to 255, 
            // but this time, also print the sum as you go. 
            for (int i = start; i <= end; i++)
            {
                sum = (int)sum + (int)i;
                Console.WriteLine($"New number: {i} Sum: {sum}");
            }
            // For example, your output should be something like this:

            // New number: 0 Sum: 0
            // New number: 1 Sum: 1
            // New Number: 2 Sum: 3
        }
        public static void LoopArray(int[] numbers)
        {
            // Write a function that would iterate through each item of the given integer array and 
            // print each value to the console. 
            foreach (int num in numbers)
            {
                Console.WriteLine(num);
            }
        }
        public static int FindMax(int[] numbers)
        {
            // Write a function that takes an integer array and prints and returns the maximum value in the array. 
            // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), 
            // or even a mix of positive numbers, negative numbers and zero.
            int sum = 0;
            foreach (int num in numbers)
            {
                Console.WriteLine(num);
                sum = (int)sum + (int)num;
            }
            return sum;
        }
        public static void GetAverage(int[] numbers)
        {
            // Write a function that takes an integer array and prints the AVERAGE of the values in the array.
            // For example, with an array [2, 10, 3], your program should write 5 to the console.
            int sum = 0;
            foreach (int num in numbers)
            {
                sum = (int)sum + (int)num;
            }
            int avg = (int)sum / (int)numbers.Length;
            Console.WriteLine(avg);
        }
        public static int[] OddArray()
        {
            // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255. 
            // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
            int[] oddArray = new int[] {};
            for (int i = 0; i <= 255; i++)
            {
                if (i % 2 == 1)
                {
                    oddArray = new int[] {(int) i};
                }
            }
            return oddArray;
        }
        static void Main(string[] args)
        {
            int sum;
            PrintNumbers();
            PrintOdds();
            PrintSum();
            LoopArray(new int[] { 1, 2, 3 });
            sum = FindMax(new int[] { 1, 2, 3, -4 });
            Console.WriteLine(sum);
            GetAverage(new int[] { 2, 10, 4 });
            OddArray();
        }
    }
}
