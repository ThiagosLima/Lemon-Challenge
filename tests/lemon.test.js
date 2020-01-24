const lemon = require("../src/lemon");

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
