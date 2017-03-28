function updateTImer (dealine) {
  var time = deadline - new Date ();
  return {
    'days': Math.floor (time/(1000*60*60*24)),
    'hours': Math.floor ((time/(1000*60*60)) % 24),
    'minutes': Math.floor ((time/1000/60) % 60),
    'seconds': Math.floor ((time/1000) % 60),
    'total' : time
  };
}

function startTimer (id,deadline) {
  car timerInterval = setInerval(function() {
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '<span>'
                    + '<span>' + timer.hours + '<span>'
                    + '<span>' + timer.minutes + '<span>'
                    + '<span>' + timer.seconds + '<span>'
  }, 1000);
}

window.onload = function() {
  var deadline = new Date(March 27, 2017)
  startTimer('clock', deadline);
};
