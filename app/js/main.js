// setTimeout(function(){
  var calculator = new Vue({
    el: '#calculator',
    data: {
      currentAge: '31',
      retirementAge: '65',
      baseSalary: '50000',
      savingsYesNo: 'yes',
      currentSavings: '10000',
      annualGrowth: '.06',
      retirementIncome: '75',
      socialSecurity: '',
      totalNeeded: '',
      saveAmount: '',
      seen: false
    },
    computed: {
      // calculator math goes here
      savingsGoal: function() {
        // let totalNeeded = this.income * (90-this.retirementAge) * .75,
        //     annualAmount = (totalNeeded-this.currentSavings) / (this.retirementAge-this.currentAge),
        //     monthlyAmount = annualAmount/12;

        // let results = '<p><b>Total needed:</b> $' + totalNeeded.toLocaleString(0) +  '</p><p><b>Annual amount:</b> $' + annualAmount.toLocaleString(0) + '</p><p><b>Monthly savings:</b> $' + monthlyAmount.toLocaleString(0) + '</p>';
        // console.log(monthlyAmount)
        
        // return '$' + Math.round(monthlyAmount).toLocaleString();
        console.log("hello")

        if (this.currentAge > this.retirementAge) {
          return "You can't retire in the past"
        };
      
        if (this.retirementAge > 90) {
          return "Congrats on discovering immortality! Why not just retire right now?"
        };
      
        let P = this.currentSavings,
            r = this.annualGrowth,
            t = this.retirementAge - this.currentAge;

        console.log("t: " + t)
        
        let finalSalary =
            Math.pow(1.02, t) * this.baseSalary;
        let yearsNeeded = 90 - this.retirementAge;

        console.log("Retirement salary: " + finalSalary);

        let totalNeeded = finalSalary * yearsNeeded;
        
        console.log("Total needed: " + totalNeeded);

        let PMTcalc_top = totalNeeded*(r/12);

        let PMTcalc_bottom = Math.pow(1+(r/12), 12*t) - 1;

        let PMT = PMTcalc_top/PMTcalc_bottom;

        PMT = PMT.toLocaleString(undefined,
          {'minimumFractionDigits':0,'maximumFractionDigits':0});;

        console.log("Payment: " + PMT)

        let results = '$' + PMT;

        return results;


          


      }
    },
    methods: {
      // functions go here
    }
  })
// }, 1000)