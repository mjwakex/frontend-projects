const countdown = () => {
  // Specify the date and time we are counting down to.
  const countDate = new Date("Nov 20, 2021, 18:52:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  var textDay = Math.floor(remainingTime / day);
  var textHour = Math.floor((remainingTime % day) / hour);
  var textMinute = Math.floor((remainingTime % hour) / minute);
  var textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;

  var x = document.getElementById("theme")
  if (textDay === 0 && textHour === 0 && textMinute === 0 && textSecond == 0){
    console.log("hello")
    x.style.display = "block";
  }  

};




// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);
