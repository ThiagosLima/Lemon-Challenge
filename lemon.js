const readline = require("readline");
const Range = require("./Range");

// Define ranges of group B1 default
// Each range has (minConsumption, maxConsumption, icms, cosip)
const groupB1default = [
  new Range(0, 30, 0, 0),
  new Range(31, 50, 0, 0),
  new Range(51, 80, 0.12, 0),
  new Range(81, 100, 0.12, 2.96),
  new Range(101, 180, 0.12, 7.87),
  new Range(181, 200, 0.12, 9.49),
  new Range(201, 220, 0.18, 9.49),
  new Range(221, 300, 0.18, 15.83),
  new Range(301, 400, 0.21, 22.16),
  new Range(401, 500, 0.21, 27.68),
  new Range(501, 600, 0.25, 34.94),
  new Range(601, 700, 0.25, 40.78),
  new Range(701, 800, 0.25, 46.61),
  new Range(801, 900, 0.25, 52.4),
  new Range(901, 1000, 0.25, 58.21),
  new Range(1001, 2000, 0.25, 103.84),
  new Range(2001, 3000, 0.25, 162.78),
  new Range(3001, 4000, 0.25, 186.79),
  new Range(4001, 5000, 0.25, 236.55),
  new Range(5001, 7000, 0.25, 333.89),
  new Range(7001, 10000, 0.25, 472.93),
  new Range(10001, Infinity, 0.25, 547.03)
];

// Given the bill value and the group, search which is its range
// and returns consumption, icms and cosip
function getInfo(bill, group) {
  for (const range of group) {
    if (bill >= range.minBill && bill < range.maxBill) {
      let partialBill = bill - range.cosip;
      const consumption = partialBill / range.priceKwh;

      return [consumption, range.icms, range.cosip];
    }
  }
}

// Get user source and consumption and returns
// the CO2 emission in Kg
function getCO2Emission(userSource, consumption) {
  const sources = [
    { name: "coal", emission: 1.001 },
    { name: "gas", emission: 0.469 },
    { name: "hydroeletric", emission: 0.004 },
    { name: "nuclear", emission: 0.016 },
    { name: "solar", emission: 0.046 },
    { name: "wind", emission: 0.012 }
  ];

  for (const source of sources) {
    if (source.name === userSource) {
      return source.emission * consumption;
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insira o valor da sua conta: ", answer => {
  const bill = Number(answer);

  const [consumption, icms, cosip] = getInfo(bill, groupB1default);

  console.log(`${Math.round(consumption)} para KWH`);
  console.log(`${icms * 100}% para faixa de ICMS`);
  console.log(`${cosip} para COSIP`);

  const thermoCO2Emission = getCO2Emission("coal", consumption);
  const solarCO2Emission = getCO2Emission("solar", consumption);
  const savedCO2 = thermoCO2Emission - solarCO2Emission;

  console.log(
    `Ao abastecer com a Lemon, você deixaria de emitir ${savedCO2.toFixed(
      2
    )} Kg de CO2.`
  );

  rl.close();
});
