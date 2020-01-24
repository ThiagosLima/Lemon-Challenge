const Range = require("./Range");

// Define ranges of a group
function createGroup(groupData, gross_value, pisCofins) {
  let group = [];

  groupData.forEach(element => {
    group.push(new Range({ ...element, gross_value, pisCofins }));
  });

  return group;
}

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

module.exports = { getInfo, getCO2Emission, createGroup };
