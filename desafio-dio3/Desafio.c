using System;
public class Desafio 
{
    public static void Main()
    {
        float valorSalario = float.Parse(Console.Readline());
        float valorBeneficios = float.Parse(Console.Readline());

        float valorImposto = 0;
        if (valorSalario >= 0 && valorSalario <= 1100)
        {
            valorImposto = 0.05F * valorSalario;
        }


        float saida = valorSalario - valorImposto + valorBeneficios;
        Console.WriteLine(saida.ToString("0.00"));
    }
}