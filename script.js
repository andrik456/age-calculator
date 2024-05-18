
let years=document.getElementById('input_year');
let months=document.getElementById('input_month');
let day =document.getElementById('input_day');
let label=document.getElementsByTagName('label'); 

 submit=document.querySelector("#Submit")
 error =document.getElementsByClassName('error');
 submit.addEventListener("click", () => {
   let a = years.value;
   let b = months.value;
   let c = day.value;
   f=check_years(a);
   e=check_months(b,c);
   g=check_days(b,c);
	calculate(a,b,c,e,f,g);



   
   console.log(years.value);
   console.log(months.value);
   console.log(day.value);
 }


);
function check_years(a) {
	d=new Date();
	current_year=d.getFullYear()
   if (a == "" || a >= current_year || a <= 1920) {
      error[2].classList.remove("hidden");
		label[2].style.color='red';
		return false;
   }
   else{
      error[2].classList.add("hidden");
		label[2].style.color='black'; 
		return true;
   }
}
function check_months(b){
   if (b == "" || b >= 13 || b <= 0) {
      error[1].classList.remove("hidden");
		label[1].style.color='red';
		return false;
   }
   
      else{
      error[1].classList.add("hidden");
		label[1].style.color='black';
		return true;
   }
}
function check_days(b,c){
   let d=true;
   month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
   if(c>month[b-1])
      d=false
   if(c =="" || c<1)
     d=false;
  
   
   if(d){
      error[0].classList.add("hidden");
		label[0].style.color='black';
		return true;
	}
		else{
   error[0].classList.remove("hidden");
	label[0].style.color='red';
	return false;
		}
}
function calculate(a,b,c,e,f,g){
	let d=new Date();
current_day=d.getDate();
current_year=d.getFullYear();
current_month=d.getMonth()+1;
if(e){
	if(f){
		if(g){
			month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
				if ((current_year % 4 === 0 && current_year % 100 !== 0) || (current_year % 400 === 0)) {
					month[1] = 29; 
			  }
			let output_year=current_year-a;
			let output_month=current_month-b;
			let output_day=current_day-c;
			if(output_day<0){
				output_month--;
				output_day=output_day+month[b-1];
			}
		
			
			if(output_month<0){
				output_year--;
				output_month=+12;
			}
			console.log(current_day);
			console.log(current_month);
			console.log(current_year);
			console.log(output_day);

			console.log(output_month);
			console.log(output_year);
			document.getElementById('years').textContent=output_year;
         document.getElementById('months').textContent=output_month;
         document.getElementById('day').textContent=output_day;
         
		}
      else{
         document.getElementById('years').textContent="--";
               document.getElementById('months').textContent="--";
               document.getElementById('day').textContent="--";
      }
	}
   else{
      document.getElementById('years').textContent="--";
            document.getElementById('months').textContent="--";
            document.getElementById('day').textContent="--";
   }
}
else{
   document.getElementById('years').textContent="--";
         document.getElementById('months').textContent="--";
         document.getElementById('day').textContent="--";
}
}