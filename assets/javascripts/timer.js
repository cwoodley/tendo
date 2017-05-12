var socket = io('//localhost:3000');

function startTheClock(end){
  var now = moment().format('YYYY-MM-DD H:mm');
  var timeObject = moment(now).countdown(end,countdown.HOURS|countdown.MINUTES, NaN, 2);

  $('#timer .hours').text(timeObject.hours + 'h');
  $('#timer .minutes').text(timeObject.minutes + 'm');

  localStorage.setItem('timerHours', timeObject.hours + 'h');
  localStorage.setItem('timerMinutes', timeObject.minutes + 'h');

  var now = moment().format('YYYY-MM-DD H:mm');
  $('#currentTime .data').text(moment(now).format('h:mm a'));

}

socket.on('endDateTime', function (data) {
  startTheClock(data);
  setInterval(function() {startTheClock(data)}, 60000);
});
