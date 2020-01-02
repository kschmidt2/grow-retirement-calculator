// setTimeout(function(){
  var calculator = new Vue({
    el: '#calculator',
    data: {
      currentAge: '31',
      retirementAge: '65',
      baseSalary: '50000',
      savingsYesNo: 'yes',
      currentSavings: '10000',
      annualGrowth: '.105',
      retirementIncome: '.75',
      socialSecurity: '',
      totalNeeded: '',
      saveAmount: '',
      percentOfSalary: '',
      seen: false,
      adjustResultsByAge: '',
      adjustResultsByPercent: ''
    },
    computed: {
      // calculator math goes here
      savingsGoal: function() {

        if (this.savingsYesNo == 'no') {
          this.currentSavings === '0';
        }

        console.log(this.savingsYesNo)

        console.log(this.currentSavings);
      
        let P = this.currentSavings,
            r = this.annualGrowth,
            t = this.retirementAge - this.currentAge;

        console.log("t: " + t)
        
        let finalSalary =
            Math.pow(1.02, t) * this.baseSalary;
        let yearsNeeded = 90 - this.retirementAge;

        console.log("Retirement salary: " + finalSalary);

        let totalNeeded = finalSalary * this.retirementIncome * yearsNeeded;
        
        console.log("Total needed: " + totalNeeded);


        if (this.savingsYesNo == 'yes') {
          let A = P * Math.pow((1+(r/12)), 12*t);
          console.log("A: " + A);
          totalNeeded = totalNeeded - A;
          console.log("Total needed adjusted: " + totalNeeded)
        }

        let PMTcalc_top = totalNeeded*(r/12);

        let PMTcalc_bottom = Math.pow(1+(r/12), 12*t) - 1;

        let PMT = PMTcalc_top/PMTcalc_bottom;

        this.percentOfSalary = Math.round(PMT/(this.baseSalary/12) * 100)

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