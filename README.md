# Desafio #1 - Entender sua conta de energia


### ENTRADA:
- Quanto foi gasto em R$ no referido mês
### SAÍDA:
- O valor total em KWH
- Em qual faixa de ICMS o consumidor se encontra 
- Valor da contribuição de iluminação pública

### OBSERVAÇÕES:
- Considere o valor bruto(sem impostos) do KWH= 0.5572
- Considerar que todos os casos testados serão residencial/bifásico
- Considerar que todos os casos ocorrem e Brasília
- Desconsiderar multas e/ou atrasos
- Desconsiderar bandeiras tarifárias

### BONUS: 
Se as unidades residenciais dos exemplos anteriores tivessem sido 100% abastecidas por termelétricas e trocassem para serem 100% abastecidas pela lemon, quantos KG de CO2 deixariam de ser produzidos?

---
## Estudo
O que é preciso saber antes de responder o desafio.

- [Informações da CEB](http://www.ceb.com.br/index.php/tudo-sobre-a-conta-de-luz/370-tudo-sobre-a-conta-de-luz)

### Como calcular o valor da conta de luz?
A aliquota é o total de impostos sobre o produto. Ela é calculada por dentro do preço final de acordo com a seguinte fórlula:
$$
impostos = PIS+ COFINS + ICMS 
$$

$$
aliquota = \frac{impostos} {1 - impostos}
$$

O valor kWh é determinado pelo valor bruto do kWh e sua aliquota:

$$
preçoKWh = valorBruto * (1 + aliquota)
$$

Para saber o valor total a **pagar** (total), multiplique o total **faturado** em kWh (consumo) pelo valor da aliquota do estado mais a taxa de iluminação pública COSIP.

$$
total = (consumo * aliquota ) + COSIP
$$

### Como calcular o consumo em kWh dado o valor da conta?

$$
consumo = \frac{(total - COSIP )}{ aliquota}
$$

### Como definir a faixa de ICMS o consumidor se encontra?
O ICMS é definido pelo grupo, tipo de tarifa e faixa de consumo.
A tabela a seguir é para o grupo B, tarifa convencional:

|              Consumo              |  ICMS  |  R$/kWh   |
| :-------------------------------: | :----: | :-------: |
|    B1 - Residencial até 50 kWh    | Isento | 0,5602375 |
| B1 - Residencial de 51 a 200 kWh  |   12   | 0,6410993 |
| B1 - Residencial de 201 a 300 kWh |   18   | 0,6909644 |
| B1 - Residencial de 301 a 500 kWh |   21   | 0,7189236 |
| B1 - Residencial acima de 500 kWh |   25   | 0,7599230 |


### Como calcular o valor da contribuição de iluminação pública?

 A taxa de iluminação pública obedece a [tabela](http://www.sinj.df.gov.br/sinj/Norma/c6ce901131f74766841b8afd9f50755e/Decreto_39530_17_12_2018.html) a seguir:

| Consumo mês (kWh) | Taxa residencial (R$/mês) |
| :---------------: | :-----------------------: |
|       0-30        |           0,00            |
|       31-50       |           0,00            |
|       51-80       |           0,00            |
|      81-100       |           2,96            |
|      101-180      |           7,87            |
|      181-220      |           9,49            |
|      221-300      |           15,83           |
|      301-400      |           22,16           |
|      401-500      |           27,68           |
|      501-600      |           34,94           |
|      601-700      |           40,78           |
|      701-800      |           46,61           |
|      801-900      |           52,40           |
|     901-1000      |           58,21           |
|     1001-2000     |          103,84           |
|     2001-3000     |          162,78           |
|     3001-4000     |          186,79           |
|     4001-5000     |          236,55           |
|     5001-7000     |          333,89           |
|    7001-10000     |          472,93           |
|  Acima de 10000   |          547,03           |

### Como funcionam as bandeiras (mesmo que não seja preciso disso no problema)?

A bandeira tarifária representa o custo real da geração de energia no Brasil, que é variável, pois depende das usinas que estão sendo usadas. Quando ela for paga, terá o mesmo valor para todos os consumidores do país. É importante lembrar que a bandeira tarifária não faz parte da tarifa de energia. Entenda como funciona o sistema de bandeiras tarifárias:

- **Bandeira Verde:** condições favoráveis de geração de energia. A tarifa não sofre nenhum acréscimo.
- **Bandeira Amarela:** condições de geração menos favoráveis. A tarifa sofre um acréscimo para compensar o custo da condição menos favorável para geração de energia.
- **Bandeira Vermelha - Patamar 1:** condições mais custosas de geração. A tarifa sofre um acréscimo maior que o da Bandeira Amarela. 
- **Bandeira Vermelha - Patamar 2:** condições ainda mais custosas de geração. A tarifa sofre um acréscimo maior que o da Bandeira Vermelha - Patamar 1.

- **[Bandeira Branca](http://www.ceb.com.br/index.php/component/content/article/83-tarifa-branca/476-tarifa-branca-de-energia):** É uma opção de tarifa para clientes atendidos em baixa tensão (127, 220, 380 ou 440 Volts) em que o valor da energia muda de acordo com os dias e **horários de consumo**.
  - **Ponta** (das 18h às 21h): Energia 80,6% mais cara;
  - **Intermediário** (das 17h às 18h e das 21h às 22h): Energia 16,9% mais cara;
  - **Foda de ponta** (das 22h às 17h, finais de semana e feriádos): Energia 14,5% mais barata.


### Como calcular a emissão de CO2 por fonte de energia?
De acordo com um relatório do Painel Intergovernamental sobre Mudanças Climáticas ([IPCC, 2011](https://en.wikipedia.org/wiki/Life-cycle_greenhouse-gas_emissions_of_energy_sources#cite_note-IPCC_Annex_II-8)), a emissão pode ser calculada de acordo com a tabela a seguir:

|       Fonte        | g CO2/kWh |
| :----------------: | :-------: |
|       Carvão       |   1001    |
|       Eólica       |    12     |
|    Gás natural     |    469    |
|    Hidrelétrica    |     4     |
|      Nuclear       |    16     |
| Solar fotovoltaica |    46     |