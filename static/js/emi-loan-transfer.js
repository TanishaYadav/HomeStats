document.getElementById('find').addEventListener('click',function(e){
   
    e.preventDefault();

// reading variables
    var loan = document.getElementById('principal_loan').value; 
    var curr_interestRate = document.getElementById('curr_rate').value;
    var installments_paid = document.getElementById('installments_paid').value;
    var curr_years = document.getElementById('curr_years').value;
    var processing_fees = document.getElementById('processing_fees').value;
    var new_interestRate = document.getElementById('new_rate').value;
    var new_years = document.getElementById('new_years').value;
 
// current loan emi calculation
    var noOfMonths = Math.floor(curr_years)*12;
    var curr_monthlyRate = curr_interestRate/(12*100);
    var onePlusR = Math.pow( 1 + curr_monthlyRate, noOfMonths );
    var denominator = onePlusR - 1;
    var curr_emi = ( loan * curr_monthlyRate * ( onePlusR / denominator ) ).toPrecision(5);
    var curr_totalAmt = noOfMonths * parseFloat(curr_emi);
    var curr_total_Interest = Math.floor(curr_totalAmt - loan );

// 'interest left ' calculation
    var total_interest_paid = 0.0;
    var monthly_interest = 0.0;
    var curr_monthly_paid = 0.0
    var new_emi = 0.0;
    var balance = loan;

    var i;
    for (i = 1; i <= installments_paid; i++) {
         monthly_interest = (curr_interestRate / (100 * 12) ) * balance;
         curr_monthly_paid = curr_emi - monthly_interest;
         total_interest_paid = total_interest_paid + monthly_interest;
         balance = balance - curr_monthly_paid;
}

    var amt_to_be_paid = balance;
    curr_interest_left = curr_total_Interest - total_interest_paid;


// new loan emi calculation

    var noOfMonths = Math.floor(new_years)*12;
    var new_monthlyRate = new_interestRate/(12*100);
    var onePlusR = Math.pow( 1 + new_monthlyRate, noOfMonths );
    var denominator = onePlusR - 1;
    var new_emi = ( amt_to_be_paid * new_monthlyRate * ( onePlusR / denominator ) ).toPrecision(5);
    var new_totalAmt = noOfMonths * parseFloat(new_emi);                    // new total amount to be paid
    var new_total_Interest = Math.floor(new_totalAmt - amt_to_be_paid );



// Net Savings

    var savings = curr_interest_left - new_total_Interest - (processing_fees / 100) * amt_to_be_paid;

// displaying results

document.getElementById("curr_total_interest").value = ' Rs. ' + curr_total_Interest;
document.getElementById("curr_yrs").value =   curr_years;
document.getElementById("curr_emi").value = ' Rs. ' + curr_emi;

document.getElementById("new_total_interest").value = ' Rs. ' + new_total_Interest;
document.getElementById("new_yrs").value =  new_years;
document.getElementById("new_emi").value = ' Rs. ' + new_emi;

document.getElementById("outstanding_principal").value =' Rs. ' + Number((amt_to_be_paid).toFixed(2));
// document.getElementById("saving").value = savings;
saving.innerHTML = 'Total Savings Rs. ' + Number((savings).toFixed(2));




















});


    // var payableEmi=document.getElementById('emi');
    // var payableamount=document.getElementById('totalAmt');
    // var payableInt=document.getElementById('totalInt');
    // payableEmi.innerHTML="Rs. "+parseFloat(emi);
    // payableamount.innerHTML="Rs. " + parseFloat(totalAmt);
    // payableInt.innerHTML="Rs. " + parseFloat(totalInt);
    
    // // for chart
    // let pietotal=parseFloat(totalAmt)+parseFloat(totalInt);
    // let piePayableloan=(parseFloat(totalAmt)/pietotal)*100;
    // let piePayableInt=(parseFloat(totalInt)/totalAmt)*100;
    // let principal = (parseFloat(loan)/totalAmt)*100

    // var chart = new CanvasJS.Chart("chartContainer", {
    //     animationEnabled: true,
    //     title: {
    //       text: "Break Up of Total Payments"
    //     },
    //     data: [{
    //       type: "pie",
    //       startAngle: 240,
    //       yValueFormatString: "##0.00\"%\"",
    //       indexLabel: "{label} {y}",
    //       dataPoints: [
    //         {y: principal, label: "Principal Loan"},
    //         {y: piePayableInt, label: "Total Interest"},
    //       ]
    //     }]
    //   });
    //   chart.render();
  

// window.onload = function() {
   
    
  
    
//     }