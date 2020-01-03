// setTimeout(function(){
  var calculator = new Vue({
    el: '#calculator',
    data: {
      currentAge: '31',
      retirementAge: '67',
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
      adjustForAge: '',
      adjustForIncome: ''
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

        this.totalNeeded = finalSalary * this.retirementIncome * yearsNeeded;
        
        console.log("Total needed: " + this.totalNeeded);


        if (this.savingsYesNo == 'yes') {
          let A = P * Math.pow((1+(r/12)), 12*t);
          console.log("A: " + A);
          this.totalNeeded = this.totalNeeded - A;
          console.log("Total needed adjusted: " + this.totalNeeded)
        }

        let PMTcalc_top = this.totalNeeded*(r/12);

        let PMTcalc_bottom = Math.pow(1+(r/12), 12*t) - 1;

        let PMT = PMTcalc_top/PMTcalc_bottom;

        this.percentOfSalary = Math.round(PMT/(this.baseSalary/12) * 100)

        PMT = PMT.toLocaleString(undefined,
          {'minimumFractionDigits':0,'maximumFractionDigits':0});;

        console.log("Payment: " + PMT)

        let results = '$' + PMT;

        function adjustForAge() {
          console.log(this.retirementAge)
          if (this.retirementAge !== '70') {
            t = 70 - this.currentAge;
            this.adjustForAge = "$XXX";
            console.log(this.adjustForAge)
          } else if (this.retirementAge == '70') {
            this.adjustForAge = "Hello";
            console.log(this.adjustForAge)
          }
        }

        adjustForAge();

        return results;

      }
    },
    methods: {
      // functions go here
      adjustForAge: function() {
        // return "Hello"
        console.log("adjust for age")
      }
    }
  })
// }, 1000)