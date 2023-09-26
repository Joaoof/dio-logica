object ReceitaFederal {
    fun calcularImposto(salario: Double): Double {
        val aliquota = when {
            (salario >= 0 && <= 1100) -> 0.05
            (salario >= 1100.01 && <= 2500.00) -> 0.10
            else -> 0.15
        }
        return aliquota * salario
    }
}

fun main() {
    val valorSalario = readLine()!!.toDouble();
    val valorBeneficios = readLine()!!.toDouble();

    val valorImpost = ReceitaFederal.calcularImposto(valorSalario);
    val saida = valorSalario - valorImposto + valorBeneficios;

    println(String.format("%.2f", saida))
}