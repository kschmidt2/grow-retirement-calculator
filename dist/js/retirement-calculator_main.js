setTimeout(function(){new Vue({el:"#calculator",data:{currentAge:"",retirementAge:"",income:"",incomeIncrease:"",savingsYesNo:"",currentSavings:"0",annualGrowth:"",retirementIncome:"",socialSecurity:"",totalNeeded:"",saveAmount:"",seen:!1},computed:{savingsGoal:function(){let e=this.income*(90-this.retirementAge)*.75,t=(e-this.currentSavings)/(this.retirementAge-this.currentAge),n=t/12;e.toLocaleString(0),t.toLocaleString(0),n.toLocaleString(0);return console.log(n),"$"+Math.round(n).toLocaleString()}},methods:{}})},1e3);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2V0VGltZW91dCIsIlZ1ZSIsImVsIiwiZGF0YSIsImN1cnJlbnRBZ2UiLCJyZXRpcmVtZW50QWdlIiwiaW5jb21lIiwiaW5jb21lSW5jcmVhc2UiLCJzYXZpbmdzWWVzTm8iLCJjdXJyZW50U2F2aW5ncyIsImFubnVhbEdyb3d0aCIsInJldGlyZW1lbnRJbmNvbWUiLCJzb2NpYWxTZWN1cml0eSIsInRvdGFsTmVlZGVkIiwic2F2ZUFtb3VudCIsInNlZW4iLCJjb21wdXRlZCIsInNhdmluZ3NHb2FsIiwidGhpcyIsImFubnVhbEFtb3VudCIsIm1vbnRobHlBbW91bnQiLCJ0b0xvY2FsZVN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwicm91bmQiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiQUFBQUEsV0FBQSxXQUNBLElBQUFDLElBQUEsQ0FDQUMsR0FBQSxjQUNBQyxLQUFBLENBQ0FDLFdBQUEsR0FDQUMsY0FBQSxHQUNBQyxPQUFBLEdBQ0FDLGVBQUEsR0FDQUMsYUFBQSxHQUNBQyxlQUFBLElBQ0FDLGFBQUEsR0FDQUMsaUJBQUEsR0FDQUMsZUFBQSxHQUNBQyxZQUFBLEdBQ0FDLFdBQUEsR0FDQUMsTUFBQSxHQUVBQyxTQUFBLENBRUFDLFlBQUEsV0FDQSxJQUFBSixFQUFBSyxLQUFBWixRQUFBLEdBQUFZLEtBQUFiLGVBQUEsSUFDQWMsR0FBQU4sRUFBQUssS0FBQVQsaUJBQUFTLEtBQUFiLGNBQUFhLEtBQUFkLFlBQ0FnQixFQUFBRCxFQUFBLEdBRUFOLEVBQUFRLGVBQUEsR0FBQUYsRUFBQUUsZUFBQSxHQUFBRCxFQUFBQyxlQUFBLEdBR0EsT0FGQUMsUUFBQUMsSUFBQUgsR0FFQSxJQUFBSSxLQUFBQyxNQUFBTCxHQUFBQyxtQkFHQUssUUFBQSxNQUlBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIHZhciBjYWxjdWxhdG9yID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjY2FsY3VsYXRvcicsXG4gICAgZGF0YToge1xuICAgICAgY3VycmVudEFnZTogJycsXG4gICAgICByZXRpcmVtZW50QWdlOiAnJyxcbiAgICAgIGluY29tZTogJycsXG4gICAgICBpbmNvbWVJbmNyZWFzZTogJycsXG4gICAgICBzYXZpbmdzWWVzTm86ICcnLFxuICAgICAgY3VycmVudFNhdmluZ3M6ICcwJyxcbiAgICAgIGFubnVhbEdyb3d0aDogJycsXG4gICAgICByZXRpcmVtZW50SW5jb21lOiAnJyxcbiAgICAgIHNvY2lhbFNlY3VyaXR5OiAnJyxcbiAgICAgIHRvdGFsTmVlZGVkOiAnJyxcbiAgICAgIHNhdmVBbW91bnQ6ICcnLFxuICAgICAgc2VlbjogZmFsc2VcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAvLyBjYWxjdWxhdG9yIG1hdGggZ29lcyBoZXJlXG4gICAgICBzYXZpbmdzR29hbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b3RhbE5lZWRlZCA9IHRoaXMuaW5jb21lICogKDkwLXRoaXMucmV0aXJlbWVudEFnZSkgKiAuNzUsXG4gICAgICAgICAgICBhbm51YWxBbW91bnQgPSAodG90YWxOZWVkZWQtdGhpcy5jdXJyZW50U2F2aW5ncykgLyAodGhpcy5yZXRpcmVtZW50QWdlLXRoaXMuY3VycmVudEFnZSksXG4gICAgICAgICAgICBtb250aGx5QW1vdW50ID0gYW5udWFsQW1vdW50LzEyO1xuXG4gICAgICAgIGxldCByZXN1bHRzID0gJzxwPjxiPlRvdGFsIG5lZWRlZDo8L2I+ICQnICsgdG90YWxOZWVkZWQudG9Mb2NhbGVTdHJpbmcoMCkgKyAgJzwvcD48cD48Yj5Bbm51YWwgYW1vdW50OjwvYj4gJCcgKyBhbm51YWxBbW91bnQudG9Mb2NhbGVTdHJpbmcoMCkgKyAnPC9wPjxwPjxiPk1vbnRobHkgc2F2aW5nczo8L2I+ICQnICsgbW9udGhseUFtb3VudC50b0xvY2FsZVN0cmluZygwKSArICc8L3A+JztcbiAgICAgICAgY29uc29sZS5sb2cobW9udGhseUFtb3VudClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAnJCcgKyBNYXRoLnJvdW5kKG1vbnRobHlBbW91bnQpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAvLyBmdW5jdGlvbnMgZ28gaGVyZVxuICAgIH1cbiAgfSlcbn0sIDEwMDApIl19
