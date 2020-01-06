// setTimeout(function(){
  var calculator = new Vue({
    el: '#calculator',
    data: {
      currentAge: '',
      retirementAge: '',
      baseSalary: '',
      savingsYesNo: '',
      currentSavings: '',
      annualGrowth: '',
      retirementIncome: '',
      totalNeeded: '',
      A: '',
      saveAmount: '',
      percentOfSalary: '',
      ageAdjusted: '',
      incomeAdjusted: '',
      seen: false,
      showResults: false,
      showError: false,
      showAgeError: false,
      showExpectations: true
    },
    computed: {
      // calculator math goes here
      
    },
    methods: {
      // functions go here
      savingsGoal: function() {

        if (this.currentAge && this.retirementAge && this.baseSalary && this.annualGrowth && this.retirementIncome) {
          this.showResults = true;
          this.showError = false;
        } else {
          this.showError = true;
          this.showResults = false;
        }

        if (this.currentAge > this.retirementAge) {
          this.showResults = false;
          this.showAgeError = true;
        }

        if (this.savingsYesNo == 'no') {
          this.currentSavings === '0';
        }
      
        let P = this.currentSavings,
            r = this.annualGrowth,
            t = this.retirementAge - this.currentAge
            tW = (54 - this.currentAge)/t,
            tW2 = (this.retirementAge - 54)/t;

            console.log("tW: " + tW + " tW2: " + tW2);

        let weightedAverage = (tW*.03 + tW2*.015)+1;

        console.log("weighted average: " + weightedAverage)
        
        let finalSalary =
            Math.pow(weightedAverage, t) * this.baseSalary;
        let yearsNeeded = 90 - this.retirementAge;

        console.log("final salary: " + finalSalary)

        this.totalNeeded = finalSalary * this.retirementIncome * yearsNeeded;

        if (this.savingsYesNo == 'yes') {
          this.A = P * Math.pow((1+(r/12)), 12*t);
          console.log("A: " + this.A);
          this.totalNeeded = this.totalNeeded - this.A;
          console.log("Total needed adjusted: " + this.totalNeeded)
        }

        console.log(t)

        let PMTcalc_top = this.totalNeeded*(r/12);

        let PMTcalc_bottom = Math.pow(1+(r/12), 12*t) - 1;

        let PMT = PMTcalc_top/PMTcalc_bottom;

        this.percentOfSalary = Math.round(PMT/(this.baseSalary/12) * 100)

        PMT = PMT.toLocaleString(undefined,
          {'minimumFractionDigits':0,'maximumFractionDigits':0});;

        console.log("Payment: " + PMT)

        this.saveAmount = '$' + PMT;

        this.adjustForAge(P, r);
        this.adjustForIncome(P, r, finalSalary, t, yearsNeeded);


      },
      adjustForAge: function(P, r) {
        if (this.retirementAge == '70' && this.retirementIncome == '.70') {
          this.showExpectations=false;
        } else if (this.retirementAge !== '70') {
            let tA = 70 - this.currentAge;
            let finalSalaryA = Math.pow(1.02, tA) * this.baseSalary;
            let adjustedTotalNeeded = finalSalaryA * this.retirementIncome * 20;
            if (this.savingsYesNo == 'yes') {
              let aA = P * Math.pow((1+(r/12)), 12*tA);
              adjustedTotalNeeded = adjustedTotalNeeded - aA;
            }
            let PMTcalc_top2 = adjustedTotalNeeded*(r/12);

            let PMTcalc_bottom2 = Math.pow(1+(r/12), 12*tA) - 1;

            let PMT2 = PMTcalc_top2/PMTcalc_bottom2;

            PMT2 = PMT2.toLocaleString(undefined,
              {'minimumFractionDigits':0,'maximumFractionDigits':0});;
            this.ageAdjusted = "If you wait until age 70 to retire, your required monthly savings go down to $" + PMT2 + ".";
          } else if (this.retirementAge == '70') {
            this.ageAdjusted = " ";
          }
      },
      adjustForIncome: function(P, r, finalSalary, t, yearsNeeded) {
        if (this.retirementIncome !== ".70") {
            let adjustedTotalNeeded2 = finalSalary * 0.7 * yearsNeeded;
            if (this.savingsYesNo == 'yes') {
              let iA = P * Math.pow((1+(r/12)), 12*t);
              adjustedTotalNeeded2 = adjustedTotalNeeded2 - iA;
            }
            let PMTcalc_top3 = adjustedTotalNeeded2*(r/12);

            let PMTcalc_bottom3 = Math.pow(1+(r/12), 12*t) - 1;

            let PMT3 = PMTcalc_top3/PMTcalc_bottom3;

            PMT3 = PMT3.toLocaleString(undefined,
              {'minimumFractionDigits':0,'maximumFractionDigits':0});;
          this.incomeAdjusted = "If you can live on a tighter budget in retirement by adjusting your needs to 70% of your final salary, you only need to save $" + PMT3 + " per month"
        } else {
          this.incomeAdjusted = ""
        }
      }
    }
  })
// }, 1000)