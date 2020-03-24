const targetDate = new Date('Dec 05, 2020 00:00:00').getTime();

setInterval(function() {
  const presentTime = new Date().getTime();
  const gap = targetDate - presentTime;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let d = Math.floor(gap/days);
  d = d < 10 ? `0${d}` : d;
  let h = Math.floor((gap%days)/hours);
  h = h < 10 ? `0${h}` : h;
  let m = Math.floor((gap%hours)/minutes);
  m = m < 10 ? `0${m}` : m;
  let s = Math.floor((gap%minutes)/seconds);
  s = s < 10 ? `0${s}` : s;

  $('.clockBox:nth-child(1)').text(d);
  $('.clockBox:nth-child(2)').text(h);
  $('.clockBox:nth-child(3)').text(m);
  $('.clockBox:nth-child(4)').text(s);
}, 1000);

