using System;
using System.Linq;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)


        {
            Console.WriteLine("Hello Niklas!\r\n");
            Console.WriteLine("Vad heter du?");
            string name = Console.ReadLine();

            Console.WriteLine("Hej simp-" + name + "!\r\n");

            string[] names = { "Max", "David", "Niklas", "Mazda" };

            names.Reverse();

            foreach (var arrayName in names)
            {
                Console.WriteLine(arrayName);
            }

            Console.WriteLine("Hur gammal är du?");

            var age = Convert.ToInt32(Console.ReadLine());

            if (age < 18)
            {
                Console.WriteLine("hihi segt!\r\n");
            }
            else
            {
                Console.WriteLine("häng med ut på krogen hihi\r\n");
            }


            var breakLoop = false;

            while (!breakLoop)
            {

                Console.WriteLine("Lever du?");

                var aliveInput = Console.ReadLine().ToUpper();

                if (aliveInput == "JA")
                {
                    Console.WriteLine("Gott o höra!\r\n");
                    breakLoop = true;
                }
                else if (aliveInput == "NEJ")
                {
                    for (var i = 0; i < 5; i++)
                    {
                        Console.WriteLine("wtf! svara igen!\r\n");
                    }

                }
                else
                {
                    Console.WriteLine("Det du skrev var inte giltligt. Testa igen.\r\n");
                }
            }

            var gameOver = false;

            while (!gameOver)
            {



                Console.WriteLine("Vilken rätt gillar du mest?");
                Console.WriteLine("(1) Köttfärssås o spaghetti");
                Console.WriteLine("(2) Hamburgare o pommes");
                Console.WriteLine("(3) Tacos");

                var food = Convert.ToInt32(Console.ReadLine());

                switch (food)
                {
                    case 1:
                        Console.WriteLine("Köttfärssås med spaghetti – en italiensk klassiker som har gått rakt in i den svenska folksjälen och blivit älskad av alla! Den här smarriga såsen har en bas av nötfärs och får sina ljuvliga smaker av vitlök, timjan och morötter. Toppa rätten med färsk tomat och persilja.\r\n");
                        break;

                    case 2:
                        Console.WriteLine("En hamburgare är en maträtt bestående av en platt köttfärsbiff av nötkött mellan hamburgerbröd eller annat bröd. I regel används vitt bröd, men även fullkornsvarianter finns. Hamburgare säljs ofta som snabbmat på hamburgerrestauranger - exempelvis Burger King, McDonald’s eller Max.\r\n");
                        break;

                    case 3:
                        Console.WriteLine("Taco, plural: tacos, är ett mexikanskt sätt att äta olika maträtter i ett bröd bakat på majs eller vetemjöl. Principen bygger på att brödet fylls och äts för hand, så kallad plockmat. Fyllningarna är ofta kryddstarka och ofta av typen köttfärssås.\r\n ");
                        break;

                    default:
                        Console.WriteLine("Mat är gott hihi\r\n");
                        break;
                }

                Console.WriteLine("Vill du veta mer om en annan maträtt? Ja eller nej.");

                var goAgain = Console.ReadLine().ToUpper();

                if (goAgain == "JA")
                {
                    Console.WriteLine();
                    gameOver = false;
                   
                } else if (goAgain == "NEJ")
                {
                    gameOver = true;
                    Environment.Exit(0);
                } else
                {
                    Console.WriteLine("Det du skrev var inte giltligt. Testa igen.\r\n");
                }


            }


        }
    }
}
