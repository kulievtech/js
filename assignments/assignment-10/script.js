var overallSeconds = Math.floor(Math.random() * 86400) + 0;

var hh = Math.floor(overallSeconds / 3600);
var remainingSeconds = overallSeconds % 3600;
var mm = Math.floor(remainingSeconds / 60);
var ss = remainingSeconds % 60;
