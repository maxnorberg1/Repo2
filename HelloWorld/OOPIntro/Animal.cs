using System;

namespace OOPIntro
{
    class Person
    {

        public static string _name;
        public int _age;
        public double _height;

        public Animal _pet;


        public void Move()
        {
            Console.WriteLine(_name + " is moving!");
        }

        public void Eat()
        {
            Console.WriteLine(_name + " is eating!");
        }

        public void Communicate()
        {
            Console.WriteLine("Hello");
        }
    }
}
