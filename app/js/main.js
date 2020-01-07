// setTimeout(function(){
  var calculator = new Vue({
    el: '#calculator',
    data: {
      // variables
      currentAge: '',
      retirementAge: '',
      baseSalary: '',
      savingsYesNo: '',
      currentSavings: '',
      annualGrowth: '',
      retirementIncome: '',

      // calculation results
      totalNeeded: '',
      A: '',

      // for display in HTML
      saveAmount: '',
      percentOfSalary: '',

      // for adjusted results
      ageAdjusted: '',
      incomeAdjusted: '',

      // controls visibilty
      showResults: false,
      showError: false,
      showAgeError: false,
      showExpectations: true
    },
    computed: {

    },
    methods: {
      // functions go here
      savingsGoal: function() {

        shows results or error based on input
        if (this.currentAge && this.retirementAge && this.baseSalary && this.annualGrowth && this.retirementIncome) {
          this.showResults = true;
          this.showError = false;
          this.showAgeError = false;
        } else {
          this.showError = true;
          this.showResults = false;
          this.showAgeError = false;
        }

        // returns an error message if current age is higher than retirement age
        if (this.currentAge > this.retirementAge) {
          this.showResults = false;
          this.showError = false;
          this.showAgeError = true;
        }

        // resets the savings amount to $0 if the user selects no savings
        if (this.savingsYesNo == 'no') {
          this.currentSavings === '0';
        }
      
        let P = this.currentSavings,
            r = this.annualGrowth,
            t = this.retirementAge - this.currentAge // time to live in retirement
            tW = (54 - this.currentAge)/t, // weighted time till 54 (for higher income increases)
            tW2 = (this.retirementAge - 54)/t; // weighted time after 54 (for lower income increases)

        let weightedAverage = (tW*.03 + tW2*.015)+1; // calculates average income increase
        
        let finalSalary =
            Math.pow(weightedAverage, t) * this.baseSalary;
        let yearsNeeded = 90 - this.retirementAge;

        let annualIncome = finalSalary * this.retirementIncome;

        this.totalNeeded = 0; // at the end of your life, you need $0

        // reverse compound interest formula for every year of retirement.
        // this works backward from $0 in the final year to determine how much
        // money should be in an investment account at retirement.
        for (i=0; i < yearsNeeded; i++) {
          this.totalNeeded = (this.totalNeeded/(Math.pow(1+(.04/12),12))) + annualIncome;
        }

        // if the user already has savings, calculate the value of those savings at retirement.
        // update totalNeeded by subtracting what will be there from money already saved.
        if (this.savingsYesNo == 'yes') {
          this.A = P * Math.pow((1+(r/12)), 12*t);
          this.totalNeeded = this.totalNeeded - this.A;
        }

        // reverse future value of a series formula
        // calculates the monthly savings needed based on the final total needed

        let PMTcalc_top = this.totalNeeded*(r/12);

        let PMTcalc_bottom = Math.pow(1+(r/12), 12*t) - 1;

        let PMT = PMTcalc_top/PMTcalc_bottom;

        this.percentOfSalary = Math.round(PMT/(this.baseSalary/12) * 100)

        PMT = PMT.toLocaleString(undefined,
          {'minimumFractionDigits':0,'maximumFractionDigits':0});;

        this.saveAmount = '$' + PMT;

        this.adjustForAge(P, r);
        this.adjustForIncome(P, r, finalSalary, t, yearsNeeded);


      },
      adjustForAge: function(P, r) {
        // removes this section if the user has selected the lowest expectations
        if (this.retirementAge == '70' && this.retirementIncome == '.70') {
          this.showExpectations=false;
        } else if (this.retirementAge !== '70') {

          // recalculates t and finalSalary from a retirement age of 70
          let tA = 70 - this.currentAge;
          let finalSalaryA = Math.pow(1.02, tA) * this.baseSalary;
          let adjustedTotalNeeded = finalSalaryA * this.retirementIncome * 20;

          // reruns the calculation with the updated variables
          if (this.savingsYesNo == 'yes') {
            let aA = P * Math.pow((1+(r/12)), 12*tA);
            adjustedTotalNeeded = adjustedTotalNeeded - aA;
          }
          let PMTcalc_top2 = adjustedTotalNeeded*(r/12);

          let PMTcalc_bottom2 = Math.pow(1+(r/12), 12*tA) - 1;

          let PMT2 = PMTcalc_top2/PMTcalc_bottom2;

          PMT2 = PMT2.toLocaleString(undefined,
            {'minimumFractionDigits':0,'maximumFractionDigits':0});

          this.ageAdjusted = "If you wait until age 70 to retire, your required monthly savings go down to $" + PMT2 + ".";

        } else if (this.retirementAge == '70') {
          this.ageAdjusted = " "; // doesn't display section if retirement age is already 70
        }
      },
      adjustForIncome: function(P, r, finalSalary, t, yearsNeeded) {
        if (this.retirementIncome !== ".70") {
          // recalculates annual income as 70% of final salary
          let adjustedAnnualIncome = finalSalary * 0.7;
          let adjustedTotalNeeded2 = 0;
          for (i=0; i < yearsNeeded; i++) {
            adjustedTotalNeeded2 = (adjustedTotalNeeded2/(Math.pow(1+(.04/12),12))) + adjustedAnnualIncome;
          }

          // reruns the calculation with updates variables
          if (this.savingsYesNo == 'yes') {
            let iA = P * Math.pow((1+(r/12)), 12*t);
            adjustedTotalNeeded2 = adjustedTotalNeeded2 - iA;
          }
          let PMTcalc_top3 = adjustedTotalNeeded2*(r/12);

          let PMTcalc_bottom3 = Math.pow(1+(r/12), 12*t) - 1;

          let PMT3 = PMTcalc_top3/PMTcalc_bottom3;

          PMT3 = PMT3.toLocaleString(undefined,
            {'minimumFractionDigits':0,'maximumFractionDigits':0});

          this.incomeAdjusted = "If you can live on a tighter budget in retirement by adjusting your needs to 70% of your final salary, you only need to save $" + PMT3 + " per month."
        
        } else {
          this.incomeAdjusted = "" // doesn't display section if income needed is already 70%
        }
      }
    }
  })
// }, 1000)