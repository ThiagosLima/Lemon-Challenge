class Range {
  constructor(minConsumption, maxConsumption, icms, cosip) {
    this.minConsumption = minConsumption;
    this.maxConsumption = maxConsumption;
    this.icms = icms;
    this.cosip = cosip;
    this.gross_value = 0.5572;
    this.pisCofins = 0.05;
    this.aliquot = this.getAliquot();
    this.priceKwh = this.getPriceKwh();
    this.minBill = this.getBill(this.minConsumption);
    this.maxBill = this.getBill(this.maxConsumption);
  }

  getAliquot() {
    const totalTaxes = this.icms + this.pisCofins;
    return totalTaxes / (1 - totalTaxes);
  }

  getPriceKwh() {
    return this.gross_value * (1 + this.aliquot);
  }

  getBill(consumption) {
    return consumption * this.priceKwh + this.cosip;
  }
}

module.exports = Range;
