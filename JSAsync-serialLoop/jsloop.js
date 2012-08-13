JSLoopBase = function() {
	
	this.TYPE = {"simple": 1, "timeout": 2, "interval": 3};
		
	this.runningDone = false;
	
	this.runType = this.TYPE.simple;
	
	this.time = 0;
	
	this.isRunningDone = function() {
		return this.runningDone;
	};

	this.setRunningDone = function(val) {
		this.runningDone = val;
	};
	
	this.setRunType = function(type) {
		this.runType = type;
	};
	
	this.setTime = function(time) {
		this.time = time;
	};
	
	this.getRunType = function() {
		return this.runType;
	};
	
	this.getTime = function() {
		return this.time;
	};
	
	
	this.execute = function() {
		// override this function
		return true;
	};
	
	this.run = function() {
		switch (this.getRunType()) {
		case this.TYPE.simple:
			this.runSimple();
			break;
		case this.TYPE.timeout:
			if (this.getTime() == 0) {
				console.log("provide a timeout for setTimeOut");
				break;
			}
			this.runTimeOut(this.getTime());
			break;
		case this.TYPE.interval:
			if (this.getTime() == 0) {
				console.log("provide a timeout for setInterval");
				break;
			}
			this.runInterval(this.getTime());
			break;
		default:
			break;
		}
	};
	
	this.runSimple = function() {
		this.execute();
		this.setRunningDone(true);
	};
	
	this.runTimeOut = function(timeout) {
		var base = this;
		setTimeout(function() {
			base.execute();
			base.setRunningDone(true);
		}, timeout);
	};
	
	this.runInterval = function(interval) {
		var base = this;
		var done = setInterval(function() {
			if(base.execute()) {
				base.setRunningDone(true);
				clearInterval(done);					
			}
		}, interval);
	};
	
	this.createObject = function(child) {
		child.prototype = this;
		var instance = new child();
		return instance;
	};
	
	this.loop = function(repetitions, JSLoopBaseSubClass) {
		var keepRunning = true;
		var free = true;
		var counter = 0;
		
		var loopRunning = setInterval(function() {
			if (counter < repetitions) {
				if (free) {
					free = false;
					//run method
					JSLoopBaseSubClass.run();
				} else {
					console.log('waiting for loop '+counter+' to end...');
				}
				if (JSLoopBaseSubClass.isRunningDone()) {
					console.log('Done for loop '+counter);
					JSLoopBaseSubClass.setRunningDone(false);
					free = true;
					counter++;
				}
			} else {
				keepRunning = false;
			}
			if (!keepRunning) {
				clearInterval(loopRunning);
			}
		},10);
	};
}

//Create your class as Test overriding the execute method
Base = new JSLoopBase();

Test = function() {
	
	this.getRunType = function() {
		return Base.TYPE.timeout;
	};
	
	this.getTime = function() {
		return 2000;
	};
		
	this.execute = function() {
		console.log("doing something");
	};
}

Base.loop(3, Base.createObject(Test));

//call the method as mentioned below

//loop(3, Test);
