using System;

namespace Fundamentals_1
{
    class Program
    {
        static void Main(string[] args)
        {
            // PrintDictionary();

                for (int i = 0; i <= 255; i++){
                    Console.WriteLine(i);
                    }

                for (int i = 1; i <= 100; i++){
                    bool divisibleBy3 = i % 3 == 0;
                    bool divisibleBy5 = i % 5 ==0;
                    bool divisibleByBoth = divisibleBy3 && divisibleBy5;

                    if (divisibleByBoth == false && (divisibleBy3 || divisibleBy5)){
                        Console.WriteLine(i);
                    }
                }
                for (int i =1; i <= 100; i++){
                    bool divisibleBy3 = i % 3 == 0;
                    bool divisibleBy5 = i % 5 ==0;
                    bool divisibleByBoth = divisibleBy3 && divisibleBy5;

                    if (divisibleByBoth){
                        Console.WriteLine($"Fizz Buzz (i:{i})");
                    }
                    else if (divisibleBy3){
                        Console.WriteLine($"Fizz (i:{i})");
                    }
                    else if (divisibleBy5){
                        Console.WriteLine($"Buzz (i:{i})");
                    }
                    }
                }
    }
}
