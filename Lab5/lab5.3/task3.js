function getTime(n) {
	var hour, min, sec;
	var time = "";
	hour = Math.floor(n / 3600);
	min = Math.floor((n%3600) / 60);
	sec = (n%3600)%60;
	
	if(hour==0){
		time += "00";
	}
	else if(hour<10){
		time += "0" + hour;
	}
	else{
		time += hour;
	}
	time += ":";

	if(min==0){
		time += "00";
	}
	else if(min<10){
		time += "0" + min;
	}
	else{
		time += min;
	}
	time += ":";

    if(sec==0){
		time += "00";
	}
	else if(sec<10){
		time += "0" + sec;
	}
	else{
		time += sec;
	}
	return time;
}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask3() {
	assert(getTime(20423) == "05:40:23", "Case '20423'");
	assert(getTime( 5320) == "01:28:40", "Case '5320'");
	assert(getTime(23630) == "06:33:50", "Case '23630'");
	assert(getTime(20381) == "05:39:41", "Case '20381'");
	assert(getTime(42718) == "11:51:58", "Case '42718'");
	assert(getTime(30002) == "08:20:02", "Case '30002'");
	assert(getTime( 3010) == "00:50:10", "Case '3010'");
	assert(getTime(20437) == "05:40:37", "Case '20437'");
	assert(getTime(40315) == "11:11:55", "Case '40315'");
	assert(getTime(18392) == "05:06:32", "Case '18392'");
	console.log("Done!");
}

runTask3();
