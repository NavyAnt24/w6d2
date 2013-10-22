time = new Date();

function Clock(time){
	this.hours = time.getHours();
	this.minutes = time.getMinutes();
	this.seconds = time.getSeconds();

	this.run = function() {
		this.seconds += 5;
		if (this.seconds >= 60){
			this.seconds %= 60;
			this.minutes += 1;

			if (this.minutes >= 60) {
				this.minutes %= 60;
				this.hours += 1;

				if (this.hours === 24){
					this.hours = 0;
				}
			}
		}
		};
}

aClock = new Clock(time);

var tick = function(){
	aClock.run();
  console.log(aClock.hours + ":" + aClock.minutes + ":" + aClock.seconds);
}

console.log(aClock.hours + ":" + aClock.minutes + ":" + aClock.seconds);
setInterval(tick, 5000);
