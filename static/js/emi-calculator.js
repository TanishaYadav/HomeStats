document.querySelector('#find').addEventListener('click',function(e){
   
    e.preventDefault();


    var loan = document.getElementById('principal_loan').value;
    var interestRate = document.getElementById('rate').value;
    var tenure = document.getElementById('years').value;
   


    var noOfMonths = Math.floor(tenure)*12;
    var monthlyRate = interestRate/(12*100);
    var onePlusR = Math.pow(1+monthlyRate,noOfMonths)
    var denominator = onePlusR-1;
    var emi = (loan*monthlyRate*(onePlusR/denominator)).toPrecision(5);
    var totalAmt = noOfMonths*parseFloat(emi);
    var totalInt = Math.floor(totalAmt-loan);

    // var payableEmi = document.getElementById('emi');
    // var payableamount = document.getElementById('totalAmt');
    // var payableInt = document.getElementById('totalInt');


    // payableEmi.innerHTML="Rs. "+parseFloat(emi);
    // payableamount.innerHTML="Rs. " + parseFloat(totalAmt);
    // payableInt.innerHTML="Rs. " + parseFloat(totalInt);
    

    document.getElementById("emi").value = 'Rs. ' + emi;
    document.getElementById("total_amount").value = 'Rs. ' + totalAmt;
    document.getElementById("total_interest").value = 'Rs. ' + totalInt;




    // for chart
    let pietotal = parseFloat(totalAmt)+parseFloat(totalInt);
    let piePayableloan=(parseFloat(totalAmt)/pietotal)*100;
    let piePayableInt = (parseFloat(totalInt)/totalAmt)*100;
    let principal = (parseFloat(loan)/totalAmt)*100

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
          text: "Break Up of Total Payments"
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            {y: principal, label: "Principal Loan"},
            {y: piePayableInt, label: "Total Interest"},
          ]
        }]
      });
      chart.render();
  
});
// window.onload = function() {
   
    
  
    
//     }