const readline = require("readline");
const lemon = require("./src/lemon");
const b1DefaultData = require("./src/groups");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insira o valor da sua conta: ", answer => {
  const bill = Number(answer);

  gross_value = 0.5572;
  pisCofins = 0.05;
  const groupB1default = lemon.createGroup(
    b1DefaultData,
    gross_value,
    pisCofins
  );

  const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

  console.log(`\n${Math.round(consumption)} para KWH`);
  console.log(`${icms * 100}% para faixa de ICMS`);
  console.log(`${cosip} para COSIP\n`);

  const thermoCO2Emission = lemon.getCO2Emission("coal", consumption);
  const solarCO2Emission = lemon.getCO2Emission("solar", consumption);
  const savedCO2 = thermoCO2Emission - solarCO2Emission;

  console.log(
    `Ao abastecer com a Lemon, você deixaria de emitir ${savedCO2.toFixed(
      2
    )} Kg de CO2.`
  );

  rl.close();
});
