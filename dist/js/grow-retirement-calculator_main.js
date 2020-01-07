var calculator=new Vue({el:"#calculator",data:{currentAge:"",retirementAge:"",baseSalary:"",savingsYesNo:"",currentSavings:"",annualGrowth:"",retirementIncome:"",totalNeeded:"",A:"",saveAmount:"",percentOfSalary:"",ageAdjusted:"",incomeAdjusted:"",seen:!1,showResults:!1,showError:!1,showAgeError:!1,showExpectations:!0},computed:{},methods:{savingsGoal:function(){this.currentAge&&this.retirementAge&&this.baseSalary&&this.annualGrowth&&this.retirementIncome?(this.showResults=!0,this.showError=!1):(this.showError=!0,this.showResults=!1),this.currentAge>this.retirementAge&&(this.showResults=!1,this.showAgeError=!0),"no"==this.savingsYesNo&&this.currentSavings;let t=this.currentSavings,e=this.annualGrowth,s=this.retirementAge-this.currentAge;tW=(54-this.currentAge)/s,tW2=(this.retirementAge-54)/s,console.log("tW: "+tW+" tW2: "+tW2);let o=.03*tW+.015*tW2+1;console.log("weighted average: "+o);let n=Math.pow(o,s)*this.baseSalary,r=90-this.retirementAge;console.log("final salary: "+n);let a=n*this.retirementIncome;for(console.log("annual income: "+a),this.totalNeeded=0,i=0;i<r;i++)this.totalNeeded=this.totalNeeded/Math.pow(1+.04/12,12)+a;console.log("total needed: "+this.totalNeeded),console.log(t),"yes"==this.savingsYesNo&&(this.A=t*Math.pow(1+e/12,12*s),console.log("A: "+this.A),this.totalNeeded=this.totalNeeded-this.A,console.log("Total needed adjusted: "+this.totalNeeded)),console.log(s);let h=this.totalNeeded*(e/12)/(Math.pow(1+e/12,12*s)-1);this.percentOfSalary=Math.round(h/(this.baseSalary/12)*100),h=h.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}),console.log("Payment: "+h),this.saveAmount="$"+h,this.adjustForAge(t,e),this.adjustForIncome(t,e,n,s,r)},adjustForAge:function(t,e){if("70"==this.retirementAge&&".70"==this.retirementIncome)this.showExpectations=!1;else if("70"!==this.retirementAge){let i=70-this.currentAge,s=Math.pow(1.02,i)*this.baseSalary*this.retirementIncome*20;if("yes"==this.savingsYesNo){s-=t*Math.pow(1+e/12,12*i)}let o=s*(e/12)/(Math.pow(1+e/12,12*i)-1);o=o.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}),this.ageAdjusted="If you wait until age 70 to retire, your required monthly savings go down to $"+o+"."}else"70"==this.retirementAge&&(this.ageAdjusted=" ")},adjustForIncome:function(t,e,s,o,n){if(".70"!==this.retirementIncome){let r=.7*s,a=0;for(i=0;i<n;i++)a=a/Math.pow(1+.04/12,12)+r;if("yes"==this.savingsYesNo){a-=t*Math.pow(1+e/12,12*o)}let h=a*(e/12)/(Math.pow(1+e/12,12*o)-1);h=h.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}),this.incomeAdjusted="If you can live on a tighter budget in retirement by adjusting your needs to 70% of your final salary, you only need to save $"+h+" per month"}else this.incomeAdjusted=""}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2FsY3VsYXRvciIsIlZ1ZSIsImVsIiwiZGF0YSIsImN1cnJlbnRBZ2UiLCJyZXRpcmVtZW50QWdlIiwiYmFzZVNhbGFyeSIsInNhdmluZ3NZZXNObyIsImN1cnJlbnRTYXZpbmdzIiwiYW5udWFsR3Jvd3RoIiwicmV0aXJlbWVudEluY29tZSIsInRvdGFsTmVlZGVkIiwiQSIsInNhdmVBbW91bnQiLCJwZXJjZW50T2ZTYWxhcnkiLCJhZ2VBZGp1c3RlZCIsImluY29tZUFkanVzdGVkIiwic2VlbiIsInNob3dSZXN1bHRzIiwic2hvd0Vycm9yIiwic2hvd0FnZUVycm9yIiwic2hvd0V4cGVjdGF0aW9ucyIsImNvbXB1dGVkIiwibWV0aG9kcyIsInNhdmluZ3NHb2FsIiwidGhpcyIsIlAiLCJyIiwidCIsInRXIiwidFcyIiwiY29uc29sZSIsImxvZyIsIndlaWdodGVkQXZlcmFnZSIsImZpbmFsU2FsYXJ5IiwiTWF0aCIsInBvdyIsInllYXJzTmVlZGVkIiwiYW5udWFsSW5jb21lIiwiaSIsIlBNVCIsInJvdW5kIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJhZGp1c3RGb3JBZ2UiLCJhZGp1c3RGb3JJbmNvbWUiLCJ0QSIsImFkanVzdGVkVG90YWxOZWVkZWQiLCJQTVQyIiwiYWRqdXN0ZWRBbm51YWxJbmNvbWUiLCJhZGp1c3RlZFRvdGFsTmVlZGVkMiIsIlBNVDMiXSwibWFwcGluZ3MiOiJBQUNBLElBQUFBLFdBQUEsSUFBQUMsSUFBQSxDQUNBQyxHQUFBLGNBQ0FDLEtBQUEsQ0FDQUMsV0FBQSxHQUNBQyxjQUFBLEdBQ0FDLFdBQUEsR0FDQUMsYUFBQSxHQUNBQyxlQUFBLEdBQ0FDLGFBQUEsR0FDQUMsaUJBQUEsR0FDQUMsWUFBQSxHQUNBQyxFQUFBLEdBQ0FDLFdBQUEsR0FDQUMsZ0JBQUEsR0FDQUMsWUFBQSxHQUNBQyxlQUFBLEdBQ0FDLE1BQUEsRUFDQUMsYUFBQSxFQUNBQyxXQUFBLEVBQ0FDLGNBQUEsRUFDQUMsa0JBQUEsR0FFQUMsU0FBQSxHQUdBQyxRQUFBLENBRUFDLFlBQUEsV0FFQUMsS0FBQXJCLFlBQUFxQixLQUFBcEIsZUFBQW9CLEtBQUFuQixZQUFBbUIsS0FBQWhCLGNBQUFnQixLQUFBZixrQkFDQWUsS0FBQVAsYUFBQSxFQUNBTyxLQUFBTixXQUFBLElBRUFNLEtBQUFOLFdBQUEsRUFDQU0sS0FBQVAsYUFBQSxHQUdBTyxLQUFBckIsV0FBQXFCLEtBQUFwQixnQkFDQW9CLEtBQUFQLGFBQUEsRUFDQU8sS0FBQUwsY0FBQSxHQUdBLE1BQUFLLEtBQUFsQixjQUNBa0IsS0FBQWpCLGVBR0EsSUFBQWtCLEVBQUFELEtBQUFqQixlQUNBbUIsRUFBQUYsS0FBQWhCLGFBQ0FtQixFQUFBSCxLQUFBcEIsY0FBQW9CLEtBQUFyQixXQUNBeUIsSUFBQSxHQUFBSixLQUFBckIsWUFBQXdCLEVBQ0FFLEtBQUFMLEtBQUFwQixjQUFBLElBQUF1QixFQUVBRyxRQUFBQyxJQUFBLE9BQUFILEdBQUEsU0FBQUMsS0FFQSxJQUFBRyxFQUFBLElBQUFKLEdBQUEsS0FBQUMsSUFBQSxFQUVBQyxRQUFBQyxJQUFBLHFCQUFBQyxHQUVBLElBQUFDLEVBQ0FDLEtBQUFDLElBQUFILEVBQUFMLEdBQUFILEtBQUFuQixXQUNBK0IsRUFBQSxHQUFBWixLQUFBcEIsY0FFQTBCLFFBQUFDLElBQUEsaUJBQUFFLEdBRUEsSUFBQUksRUFBQUosRUFBQVQsS0FBQWYsaUJBTUEsSUFKQXFCLFFBQUFDLElBQUEsa0JBQUFNLEdBRUFiLEtBQUFkLFlBQUEsRUFFQTRCLEVBQUEsRUFBQUEsRUFBQUYsRUFBQUUsSUFDQWQsS0FBQWQsWUFBQWMsS0FBQWQsWUFBQXdCLEtBQUFDLElBQUEsRUFBQSxJQUFBLEdBQUEsSUFBQUUsRUFHQVAsUUFBQUMsSUFBQSxpQkFBQVAsS0FBQWQsYUFFQW9CLFFBQUFDLElBQUFOLEdBRUEsT0FBQUQsS0FBQWxCLGVBQ0FrQixLQUFBYixFQUFBYyxFQUFBUyxLQUFBQyxJQUFBLEVBQUFULEVBQUEsR0FBQSxHQUFBQyxHQUNBRyxRQUFBQyxJQUFBLE1BQUFQLEtBQUFiLEdBQ0FhLEtBQUFkLFlBQUFjLEtBQUFkLFlBQUFjLEtBQUFiLEVBQ0FtQixRQUFBQyxJQUFBLDBCQUFBUCxLQUFBZCxjQUlBb0IsUUFBQUMsSUFBQUosR0FFQSxJQUlBWSxFQUpBZixLQUFBZCxhQUFBZ0IsRUFBQSxLQUVBUSxLQUFBQyxJQUFBLEVBQUFULEVBQUEsR0FBQSxHQUFBQyxHQUFBLEdBSUFILEtBQUFYLGdCQUFBcUIsS0FBQU0sTUFBQUQsR0FBQWYsS0FBQW5CLFdBQUEsSUFBQSxLQUVBa0MsRUFBQUEsRUFBQUUsb0JBQUFDLEVBQ0EsQ0FBQUMsc0JBQUEsRUFBQUMsc0JBQUEsSUFFQWQsUUFBQUMsSUFBQSxZQUFBUSxHQUVBZixLQUFBWixXQUFBLElBQUEyQixFQUVBZixLQUFBcUIsYUFBQXBCLEVBQUFDLEdBQ0FGLEtBQUFzQixnQkFBQXJCLEVBQUFDLEVBQUFPLEVBQUFOLEVBQUFTLElBSUFTLGFBQUEsU0FBQXBCLEVBQUFDLEdBQ0EsR0FBQSxNQUFBRixLQUFBcEIsZUFBQSxPQUFBb0IsS0FBQWYsaUJBQ0FlLEtBQUFKLGtCQUFBLE9BQ0EsR0FBQSxPQUFBSSxLQUFBcEIsY0FBQSxDQUNBLElBQUEyQyxFQUFBLEdBQUF2QixLQUFBckIsV0FFQTZDLEVBREFkLEtBQUFDLElBQUEsS0FBQVksR0FBQXZCLEtBQUFuQixXQUNBbUIsS0FBQWYsaUJBQUEsR0FDQSxHQUFBLE9BQUFlLEtBQUFsQixhQUFBLENBRUEwQyxHQURBdkIsRUFBQVMsS0FBQUMsSUFBQSxFQUFBVCxFQUFBLEdBQUEsR0FBQXFCLEdBR0EsSUFJQUUsRUFKQUQsR0FBQXRCLEVBQUEsS0FFQVEsS0FBQUMsSUFBQSxFQUFBVCxFQUFBLEdBQUEsR0FBQXFCLEdBQUEsR0FJQUUsRUFBQUEsRUFBQVIsb0JBQUFDLEVBQ0EsQ0FBQUMsc0JBQUEsRUFBQUMsc0JBQUEsSUFDQXBCLEtBQUFWLFlBQUEsaUZBQUFtQyxFQUFBLFFBQ0EsTUFBQXpCLEtBQUFwQixnQkFDQW9CLEtBQUFWLFlBQUEsTUFHQWdDLGdCQUFBLFNBQUFyQixFQUFBQyxFQUFBTyxFQUFBTixFQUFBUyxHQUNBLEdBQUEsUUFBQVosS0FBQWYsaUJBQUEsQ0FDQSxJQUFBeUMsRUFBQSxHQUFBakIsRUFDQWtCLEVBQUEsRUFDQSxJQUFBYixFQUFBLEVBQUFBLEVBQUFGLEVBQUFFLElBQ0FhLEVBQUFBLEVBQUFqQixLQUFBQyxJQUFBLEVBQUEsSUFBQSxHQUFBLElBQUFlLEVBRUEsR0FBQSxPQUFBMUIsS0FBQWxCLGFBQUEsQ0FFQTZDLEdBREExQixFQUFBUyxLQUFBQyxJQUFBLEVBQUFULEVBQUEsR0FBQSxHQUFBQyxHQUdBLElBSUF5QixFQUpBRCxHQUFBekIsRUFBQSxLQUVBUSxLQUFBQyxJQUFBLEVBQUFULEVBQUEsR0FBQSxHQUFBQyxHQUFBLEdBSUF5QixFQUFBQSxFQUFBWCxvQkFBQUMsRUFDQSxDQUFBQyxzQkFBQSxFQUFBQyxzQkFBQSxJQUNBcEIsS0FBQVQsZUFBQSxpSUFBQXFDLEVBQUEsa0JBRUE1QixLQUFBVCxlQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIHZhciBjYWxjdWxhdG9yID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjY2FsY3VsYXRvcicsXG4gICAgZGF0YToge1xuICAgICAgY3VycmVudEFnZTogJycsXG4gICAgICByZXRpcmVtZW50QWdlOiAnJyxcbiAgICAgIGJhc2VTYWxhcnk6ICcnLFxuICAgICAgc2F2aW5nc1llc05vOiAnJyxcbiAgICAgIGN1cnJlbnRTYXZpbmdzOiAnJyxcbiAgICAgIGFubnVhbEdyb3d0aDogJycsXG4gICAgICByZXRpcmVtZW50SW5jb21lOiAnJyxcbiAgICAgIHRvdGFsTmVlZGVkOiAnJyxcbiAgICAgIEE6ICcnLFxuICAgICAgc2F2ZUFtb3VudDogJycsXG4gICAgICBwZXJjZW50T2ZTYWxhcnk6ICcnLFxuICAgICAgYWdlQWRqdXN0ZWQ6ICcnLFxuICAgICAgaW5jb21lQWRqdXN0ZWQ6ICcnLFxuICAgICAgc2VlbjogZmFsc2UsXG4gICAgICBzaG93UmVzdWx0czogZmFsc2UsXG4gICAgICBzaG93RXJyb3I6IGZhbHNlLFxuICAgICAgc2hvd0FnZUVycm9yOiBmYWxzZSxcbiAgICAgIHNob3dFeHBlY3RhdGlvbnM6IHRydWVcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIC8vIGZ1bmN0aW9ucyBnbyBoZXJlXG4gICAgICBzYXZpbmdzR29hbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFnZSAmJiB0aGlzLnJldGlyZW1lbnRBZ2UgJiYgdGhpcy5iYXNlU2FsYXJ5ICYmIHRoaXMuYW5udWFsR3Jvd3RoICYmIHRoaXMucmV0aXJlbWVudEluY29tZSkge1xuICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBZ2UgPiB0aGlzLnJldGlyZW1lbnRBZ2UpIHtcbiAgICAgICAgICB0aGlzLnNob3dSZXN1bHRzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zaG93QWdlRXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2F2aW5nc1llc05vID09ICdubycpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTYXZpbmdzID09PSAnMCc7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBsZXQgUCA9IHRoaXMuY3VycmVudFNhdmluZ3MsXG4gICAgICAgICAgICByID0gdGhpcy5hbm51YWxHcm93dGgsXG4gICAgICAgICAgICB0ID0gdGhpcy5yZXRpcmVtZW50QWdlIC0gdGhpcy5jdXJyZW50QWdlXG4gICAgICAgICAgICB0VyA9ICg1NCAtIHRoaXMuY3VycmVudEFnZSkvdCxcbiAgICAgICAgICAgIHRXMiA9ICh0aGlzLnJldGlyZW1lbnRBZ2UgLSA1NCkvdDtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0VzogXCIgKyB0VyArIFwiIHRXMjogXCIgKyB0VzIpO1xuXG4gICAgICAgIGxldCB3ZWlnaHRlZEF2ZXJhZ2UgPSAodFcqLjAzICsgdFcyKi4wMTUpKzE7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ3ZWlnaHRlZCBhdmVyYWdlOiBcIiArIHdlaWdodGVkQXZlcmFnZSlcbiAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFNhbGFyeSA9XG4gICAgICAgICAgICBNYXRoLnBvdyh3ZWlnaHRlZEF2ZXJhZ2UsIHQpICogdGhpcy5iYXNlU2FsYXJ5O1xuICAgICAgICBsZXQgeWVhcnNOZWVkZWQgPSA5MCAtIHRoaXMucmV0aXJlbWVudEFnZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmFsIHNhbGFyeTogXCIgKyBmaW5hbFNhbGFyeSlcblxuICAgICAgICBsZXQgYW5udWFsSW5jb21lID0gZmluYWxTYWxhcnkgKiB0aGlzLnJldGlyZW1lbnRJbmNvbWU7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhbm51YWwgaW5jb21lOiBcIiArIGFubnVhbEluY29tZSlcblxuICAgICAgICB0aGlzLnRvdGFsTmVlZGVkID0gMDtcblxuICAgICAgICBmb3IgKGk9MDsgaSA8IHllYXJzTmVlZGVkOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnRvdGFsTmVlZGVkID0gKHRoaXMudG90YWxOZWVkZWQvKE1hdGgucG93KDErKC4wNC8xMiksMTIpKSkgKyBhbm51YWxJbmNvbWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcInRvdGFsIG5lZWRlZDogXCIgKyB0aGlzLnRvdGFsTmVlZGVkKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFApXG5cbiAgICAgICAgaWYgKHRoaXMuc2F2aW5nc1llc05vID09ICd5ZXMnKSB7XG4gICAgICAgICAgdGhpcy5BID0gUCAqIE1hdGgucG93KCgxKyhyLzEyKSksIDEyKnQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQTogXCIgKyB0aGlzLkEpO1xuICAgICAgICAgIHRoaXMudG90YWxOZWVkZWQgPSB0aGlzLnRvdGFsTmVlZGVkIC0gdGhpcy5BO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG90YWwgbmVlZGVkIGFkanVzdGVkOiBcIiArIHRoaXMudG90YWxOZWVkZWQpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHQpXG5cbiAgICAgICAgbGV0IFBNVGNhbGNfdG9wID0gdGhpcy50b3RhbE5lZWRlZCooci8xMik7XG5cbiAgICAgICAgbGV0IFBNVGNhbGNfYm90dG9tID0gTWF0aC5wb3coMSsoci8xMiksIDEyKnQpIC0gMTtcblxuICAgICAgICBsZXQgUE1UID0gUE1UY2FsY190b3AvUE1UY2FsY19ib3R0b207XG5cbiAgICAgICAgdGhpcy5wZXJjZW50T2ZTYWxhcnkgPSBNYXRoLnJvdW5kKFBNVC8odGhpcy5iYXNlU2FsYXJ5LzEyKSAqIDEwMClcblxuICAgICAgICBQTVQgPSBQTVQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgIHsnbWluaW11bUZyYWN0aW9uRGlnaXRzJzowLCdtYXhpbXVtRnJhY3Rpb25EaWdpdHMnOjB9KTs7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJQYXltZW50OiBcIiArIFBNVClcblxuICAgICAgICB0aGlzLnNhdmVBbW91bnQgPSAnJCcgKyBQTVQ7XG5cbiAgICAgICAgdGhpcy5hZGp1c3RGb3JBZ2UoUCwgcik7XG4gICAgICAgIHRoaXMuYWRqdXN0Rm9ySW5jb21lKFAsIHIsIGZpbmFsU2FsYXJ5LCB0LCB5ZWFyc05lZWRlZCk7XG5cblxuICAgICAgfSxcbiAgICAgIGFkanVzdEZvckFnZTogZnVuY3Rpb24oUCwgcikge1xuICAgICAgICBpZiAodGhpcy5yZXRpcmVtZW50QWdlID09ICc3MCcgJiYgdGhpcy5yZXRpcmVtZW50SW5jb21lID09ICcuNzAnKSB7XG4gICAgICAgICAgdGhpcy5zaG93RXhwZWN0YXRpb25zPWZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmV0aXJlbWVudEFnZSAhPT0gJzcwJykge1xuICAgICAgICAgICAgbGV0IHRBID0gNzAgLSB0aGlzLmN1cnJlbnRBZ2U7XG4gICAgICAgICAgICBsZXQgZmluYWxTYWxhcnlBID0gTWF0aC5wb3coMS4wMiwgdEEpICogdGhpcy5iYXNlU2FsYXJ5O1xuICAgICAgICAgICAgbGV0IGFkanVzdGVkVG90YWxOZWVkZWQgPSBmaW5hbFNhbGFyeUEgKiB0aGlzLnJldGlyZW1lbnRJbmNvbWUgKiAyMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmluZ3NZZXNObyA9PSAneWVzJykge1xuICAgICAgICAgICAgICBsZXQgYUEgPSBQICogTWF0aC5wb3coKDErKHIvMTIpKSwgMTIqdEEpO1xuICAgICAgICAgICAgICBhZGp1c3RlZFRvdGFsTmVlZGVkID0gYWRqdXN0ZWRUb3RhbE5lZWRlZCAtIGFBO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IFBNVGNhbGNfdG9wMiA9IGFkanVzdGVkVG90YWxOZWVkZWQqKHIvMTIpO1xuXG4gICAgICAgICAgICBsZXQgUE1UY2FsY19ib3R0b20yID0gTWF0aC5wb3coMSsoci8xMiksIDEyKnRBKSAtIDE7XG5cbiAgICAgICAgICAgIGxldCBQTVQyID0gUE1UY2FsY190b3AyL1BNVGNhbGNfYm90dG9tMjtcblxuICAgICAgICAgICAgUE1UMiA9IFBNVDIudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgICB7J21pbmltdW1GcmFjdGlvbkRpZ2l0cyc6MCwnbWF4aW11bUZyYWN0aW9uRGlnaXRzJzowfSk7O1xuICAgICAgICAgICAgdGhpcy5hZ2VBZGp1c3RlZCA9IFwiSWYgeW91IHdhaXQgdW50aWwgYWdlIDcwIHRvIHJldGlyZSwgeW91ciByZXF1aXJlZCBtb250aGx5IHNhdmluZ3MgZ28gZG93biB0byAkXCIgKyBQTVQyICsgXCIuXCI7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJldGlyZW1lbnRBZ2UgPT0gJzcwJykge1xuICAgICAgICAgICAgdGhpcy5hZ2VBZGp1c3RlZCA9IFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhZGp1c3RGb3JJbmNvbWU6IGZ1bmN0aW9uKFAsIHIsIGZpbmFsU2FsYXJ5LCB0LCB5ZWFyc05lZWRlZCkge1xuICAgICAgICBpZiAodGhpcy5yZXRpcmVtZW50SW5jb21lICE9PSBcIi43MFwiKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRBbm51YWxJbmNvbWUgPSBmaW5hbFNhbGFyeSAqIDAuNztcbiAgICAgICAgICAgIGxldCBhZGp1c3RlZFRvdGFsTmVlZGVkMiA9IDA7XG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IHllYXJzTmVlZGVkOyBpKyspIHtcbiAgICAgICAgICAgICAgYWRqdXN0ZWRUb3RhbE5lZWRlZDIgPSAoYWRqdXN0ZWRUb3RhbE5lZWRlZDIvKE1hdGgucG93KDErKC4wNC8xMiksMTIpKSkgKyBhZGp1c3RlZEFubnVhbEluY29tZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmluZ3NZZXNObyA9PSAneWVzJykge1xuICAgICAgICAgICAgICBsZXQgaUEgPSBQICogTWF0aC5wb3coKDErKHIvMTIpKSwgMTIqdCk7XG4gICAgICAgICAgICAgIGFkanVzdGVkVG90YWxOZWVkZWQyID0gYWRqdXN0ZWRUb3RhbE5lZWRlZDIgLSBpQTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBQTVRjYWxjX3RvcDMgPSBhZGp1c3RlZFRvdGFsTmVlZGVkMiooci8xMik7XG5cbiAgICAgICAgICAgIGxldCBQTVRjYWxjX2JvdHRvbTMgPSBNYXRoLnBvdygxKyhyLzEyKSwgMTIqdCkgLSAxO1xuXG4gICAgICAgICAgICBsZXQgUE1UMyA9IFBNVGNhbGNfdG9wMy9QTVRjYWxjX2JvdHRvbTM7XG5cbiAgICAgICAgICAgIFBNVDMgPSBQTVQzLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgeydtaW5pbXVtRnJhY3Rpb25EaWdpdHMnOjAsJ21heGltdW1GcmFjdGlvbkRpZ2l0cyc6MH0pOztcbiAgICAgICAgICB0aGlzLmluY29tZUFkanVzdGVkID0gXCJJZiB5b3UgY2FuIGxpdmUgb24gYSB0aWdodGVyIGJ1ZGdldCBpbiByZXRpcmVtZW50IGJ5IGFkanVzdGluZyB5b3VyIG5lZWRzIHRvIDcwJSBvZiB5b3VyIGZpbmFsIHNhbGFyeSwgeW91IG9ubHkgbmVlZCB0byBzYXZlICRcIiArIFBNVDMgKyBcIiBwZXIgbW9udGhcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5jb21lQWRqdXN0ZWQgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4vLyB9LCAxMDAwKSJdfQ==
