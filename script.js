function compute()
{
    //p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    
    if(principal == "" || principal <=0){   //Validation for principal
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+ "<span class='highlight'>" + principal+"</span>."+",<br> at an interest rate of "+"<span class='highlight'>" + rate+"</span>%."+"<br> You will receive an amount of "+"<span class='highlight'>" +interest+ "</span>"+",<br> in the year "+"<span class='highlight'>"+year+"</span>";
 }
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
    //Update the current slider value
    rateval.oninput = function(){
        output.innerHTML = this.value;
    }
}

        
