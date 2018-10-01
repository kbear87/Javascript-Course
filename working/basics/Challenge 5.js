


var johnTipCalculator = {
  billValue: [124, 48, 268, 180,42],
  calculateTip() {

    this.tips = [];
    this.finalBill = [];

    for (var i = 0; i < this.billValue.length; i = i + 1) {
      var tipAmount;
      var bill = this.billValue[i];

      if (bill < 50) {
        tipAmount = (bill * 20) / 100;
      } else if (bill >= 50 && bill < 200) {
        tipAmount = (bill * 15) / 100;
      } else {
        tipAmount = (bill * 10) / 100;
      }

      this.tips[i] = (tipAmount);
      this.finalBill[i] = (bill + tipAmount);
    }
  }
}




var markTipCalculator = {
  billValue: [77, 375, 110, 45],
  calculateTip() {

    this.tips = [];
    this.finalBill = [];

    for (var i = 0; i < this.billValue.length; i = i + 1) {
      var tipAmount;
      var bill = this.billValue[i];

      if (bill < 100) {
        tipAmount = (bill * 20) / 100;
      } else if (bill >= 100 && bill < 300) {
        tipAmount = (bill * 10) / 100;
      } else {
        tipAmount = (bill * 25) / 100;
      }

      this.tips[i] = tipAmount;
      this.finalBill[i] = (bill + tipAmount);
    }
  }
}

function averageTip(tips) {
  var sum = 0;

  for (var i = 0; i < tips.length; i = i + 1) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
markTipCalculator.calculateTip();
johnTipCalculator.calculateTip();

johnTipCalculator.average = averageTip(johnTipCalculator.tips);
markTipCalculator.average = averageTip(markTipCalculator.tips);
console.log(johnTipCalculator, markTipCalculator);
