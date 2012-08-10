function loop(repetitions, JSLoopBaseSubClass) {
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
}

JSLoopBase = {
		runningDone: false,
		
		isRunningDone: function() {
			return this.runningDone;
		},

		setRunningDone: function(val) {
			this.runningDone = val;
		},
		
		execute: function() {
			// override this function
		},
		
		run: function() {
			this.execute();
			this.setRunningDone(true);
		}
},

//Create your class as Test overriding the execute method

Test = {
		execute: function() {
			setTimeout(function() {
				console.log("doing something");
			}, 2000);
		}
}.prototype = JSLoopBase;

//call the method as mentioned below

loop(3, Test);
