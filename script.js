function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}

function compute() {
  //with this we clean the values
  var clear = document.getElementById("result");
  clear.innerHTML = "";

  //declaration of variables
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);

  var res = document.getElementById("result");
  //validation if principal is empty
  if (principal == "") {
    alert("you forgot to enter the amount!");
    document.getElementById("principal").focus();
    res.innerHTML = "you forgot to enter the amount!"
  } 
    //validation if principal is zero or negative
    else if (principal <= 0) {
    alert("you must enter a positive number!");
    document.getElementById("principal").focus();
    res.innerHTML = "you must enter a positive number!"
  }
  else {
    //set the values
    res.innerHTML += "If you deposit <spam class='highlight'>" + principal + "</spam>, <br />";
    res.innerHTML += "at an interest rate of <spam class='highlight'>" + rate + "%</spam>. <br />";
    res.innerHTML += "You will receive an amount of <spam class='highlight'>" + interest + "</spam>, <br />";
    res.innerHTML += "in the year <spam class='highlight'>" + year + "</spam>";
  }
}