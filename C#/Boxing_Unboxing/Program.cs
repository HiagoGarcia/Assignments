using System;
using System.Collections.Generic;

namespace Boxing_Unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            //Box some string data into a variable
            object BoxedData = "This is clearly a string";
            //Make sure it is the type you need before proceeding
            if (BoxedData is int)
            {
                //This shouldn't run
                Console.WriteLine("I guess we have an integer value in this box?");
            }
            if (BoxedData is string)
            {
                Console.WriteLine("It is totally a string in the box!");
            }
            int sum = 0;
            List<Object> box = new List<object>();
            box.Add(7);
            box.Add(28);
            box.Add(-1);
            box.Add(true);
            box.Add("chair");
            foreach( object item in box)
            {
                if(item is string)
                {
                    object actualString = item;
                    string ExplicitString = actualString as string;
                    Console.WriteLine(ExplicitString);
                }
                if(item is int)
                {
                    Console.WriteLine(item);
                    sum = sum + (int)item;
                }
                if(item is bool)
                {
                    Console.WriteLine(item);
                }
            }
                Console.WriteLine(sum);
        }
    }
}
