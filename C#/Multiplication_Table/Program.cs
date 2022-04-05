using System;
using System.Collections.Generic;

namespace Multiplication_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] array2d = new int[10, 10];
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    array2d[i, j] = (i + 1) * (j + 1);
                }
            }
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    if (j < 9)
                    {
                        Console.Write($"{array2d[i, j]}, ");
                    }
                    else
                    {
                        Console.WriteLine(array2d[i, j]);
                    }
                }
            }
            {
            }
        }
    }
}
