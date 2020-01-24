const lemon = require("../src/lemon");
const b1DefaultData = require("../src/groups");

describe("getCO2Emission", () => {
  const consumption = 1;

  it("should return the coal CO2 emission", () => {
    const result = lemon.getCO2Emission("coal", consumption);
    expect(result).toBe(1.001);
  });

  it("should return the gas CO2 emission", () => {
    const result = lemon.getCO2Emission("gas", consumption);
    expect(result).toBe(0.469);
  });

  it("should return the hydroeletric CO2 emission", () => {
    const result = lemon.getCO2Emission("hydroeletric", consumption);
    expect(result).toBe(0.004);
  });

  it("should return the nuclear CO2 emission", () => {
    const result = lemon.getCO2Emission("nuclear", consumption);
    expect(result).toBe(0.016);
  });

  it("should return the solar CO2 emission", () => {
    const result = lemon.getCO2Emission("solar", consumption);
    expect(result).toBe(0.046);
  });

  it("should return the wind CO2 emission", () => {
    const result = lemon.getCO2Emission("wind", consumption);
    expect(result).toBe(0.012);
  });

  it("should return 0 if the consumption is 0", () => {
    const result = lemon.getCO2Emission("wind", 0);
    expect(result).toBe(0);
  });
});

describe("getInfo - Group B1 default", () => {
  gross_value = 0.5572;
  pisCofins = 0.05;
  const groupB1default = lemon.createGroup(
    b1DefaultData,
    gross_value,
    pisCofins
  );

  it("should return null if the consumption is not in the ranges", () => {
    const bill = -1;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeNull();
    expect(icms).toBeNull();
    expect(cosip).toBeNull();
  });

  it("should return info for consumption = R$ 0.00", () => {
    const bill = 0;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(0);
    expect(icms).toBe(0);
    expect(cosip).toBe(0);
  });

  it("should return info for consumption = R$ 17.59", () => {
    const bill = 17.595;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(30);
    expect(icms).toBe(0);
    expect(cosip).toBe(0);
  });

  it("should return info for consumption = R$ 18.183", () => {
    const bill = 18.183;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(31);
    expect(icms).toBe(0);
    expect(cosip).toBe(0);
  });

  it("should return info for consumption = R$ 29.326", () => {
    const bill = 29.326;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(50);
    expect(icms).toBe(0);
    expect(cosip).toBe(0);
  });

  it("should return info for consumption = R$ 34.238", () => {
    const bill = 34.238;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(51);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(0);
  });

  it("should return info for consumption = R$ 53.706", () => {
    const bill = 53.706;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(80);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(0);
  });

  it("should return info for consumption = R$ 57.338", () => {
    const bill = 57.338;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(81);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(2.96);
  });

  it("should return info for consumption = R$ 70.092", () => {
    const bill = 70.092;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(100);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(2.96);
  });

  it("should return info for consumption = R$ 75.674", () => {
    const bill = 75.674;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(101);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(7.87);
  });

  it("should return info for consumption = R$ 128.708", () => {
    const bill = 128.708;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(180);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(7.87);
  });

  it("should return info for consumption = R$ 131.00", () => {
    const bill = 131.0;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(181);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(9.49);
  });

  it("should return info for consumption = R$ 143.755", () => {
    const bill = 143.755;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(200);
    expect(icms).toBe(0.12);
    expect(cosip).toBe(9.49);
  });

  it("should return info for consumption = R$ 154.941", () => {
    const bill = 154.941;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(201);
    expect(icms).toBe(0.18);
    expect(cosip).toBe(9.49);
  });

  it("should return info for consumption = R$ 168.689", () => {
    const bill = 168.689;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(220);
    expect(icms).toBe(0.18);
    expect(cosip).toBe(9.49);
  });

  it("should return info for consumption = R$ 175.754", () => {
    const bill = 175.754;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(221);
    expect(icms).toBe(0.18);
    expect(cosip).toBe(15.83);
  });

  it("should return info for consumption = R$ 232.920", () => {
    const bill = 232.92;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(300);
    expect(icms).toBe(0.18);
    expect(cosip).toBe(15.83);
  });

  it("should return info for consumption = R$ 248.805", () => {
    const bill = 248.805;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(301);
    expect(icms).toBe(0.21);
    expect(cosip).toBe(22.16);
  });

  it("should return info for consumption = R$ 323.349", () => {
    const bill = 323.349;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(400);
    expect(icms).toBe(0.21);
    expect(cosip).toBe(22.16);
  });

  it("should return info for consumption = R$ 329.623", () => {
    const bill = 329.623;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(401);
    expect(icms).toBe(0.21);
    expect(cosip).toBe(27.68);
  });

  it("should return info for consumption = R$ 404.166", () => {
    const bill = 404.166;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(500);
    expect(icms).toBe(0.21);
    expect(cosip).toBe(27.68);
  });

  it("should return info for consumption = R$ 433.737", () => {
    const bill = 433.737;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(501);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(34.94);
  });

  it("should return info for consumption = R$ 512.539", () => {
    const bill = 512.539;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(600);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(34.94);
  });

  it("should return info for consumption = R$ 519.177", () => {
    const bill = 519.177;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(601);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(40.78);
  });

  it("should return info for consumption = R$ 597.979", () => {
    const bill = 597.979;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(700);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(40.78);
  });

  it("should return info for consumption = R$ 604.607", () => {
    const bill = 604.607;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(701);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(46.61);
  });

  it("should return info for consumption = R$ 683.409", () => {
    const bill = 683.409;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(800);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(46.61);
  });

  it("should return info for consumption = R$ 689.997", () => {
    const bill = 689.997;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(801);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(52.4);
  });

  it("should return info for consumption = R$ 768.799", () => {
    const bill = 768.799;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(900);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(52.4);
  });

  it("should return info for consumption = R$ 775.407", () => {
    const bill = 775.407;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(901);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(58.21);
  });

  it("should return info for consumption = R$ 854.209", () => {
    const bill = 854.209;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(1000);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(58.21);
  });

  it("should return info for consumption = R$ 900.637", () => {
    const bill = 900.637;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(1001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(103.84);
  });

  it("should return info for consumption = R$ 1695.839", () => {
    const bill = 1695.839;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(2000);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(103.84);
  });

  it("should return info for consumption = R$ 1755.577", () => {
    const bill = 1755.577;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(2001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(162.78);
  });

  it("should return info for consumption = R$ 2550.779", () => {
    const bill = 2550.779;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(3000);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(162.78);
  });

  it("should return info for consumption = R$ 2575.587", () => {
    const bill = 2575.587;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(3001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(186.79);
  });

  it("should return info for consumption = R$ 3370.789", () => {
    const bill = 3370.789;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(4000);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(186.79);
  });

  it("should return info for consumption = R$ 3421.347", () => {
    const bill = 3421.347;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(4001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(236.55);
  });

  it("should return info for consumption = R$ 4216.549", () => {
    const bill = 4216.549;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(5000);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(236.55);
  });

  it("should return info for consumption = R$ 4314.687", () => {
    const bill = 4314.687;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(5001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(333.89);
  });

  it("should return info for consumption = R$ 5905.889", () => {
    const bill = 5905.889;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(7000);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(333.89);
  });

  it("should return info for consumption = R$ 6045.727", () => {
    const bill = 6045.727;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(7001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(472.93);
  });

  it("should return info for consumption = R$ 8432.929", () => {
    const bill = 8432.929;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(10000);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(472.93);
  });

  it("should return info for consumption = R$ 8507.797", () => {
    const bill = 8507.797;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(10001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(547);
  });

  it("should return info for consumption = R$ 8507.797", () => {
    const bill = 8507.797;
    const [consumption, icms, cosip] = lemon.getInfo(bill, groupB1default);

    expect(consumption).toBeCloseTo(10001);
    expect(icms).toBe(0.25);
    expect(cosip).toBe(547);
  });
});
