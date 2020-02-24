const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
function setTime() {
	const currentTime = new Date();

	const seconds = currentTime.getSeconds(); // getting seconds from currentTime
	const minutes = currentTime.getMinutes(); // getting minutes from currentTime
	const hours = currentTime.getHours(); // getting hours from currentTime
	
	const secondDegree = (seconds/60 * 360) + 90; 
	// converting seconds to degree by adding 360 to it (adding 90 to offset css value)
	const minutesDegree = (minutes/60 * 360) + 90;
	// converting minutes to degree by adding 360 to it (adding 90 to offset css value)
	const hoursDegree = (hours/12 * 360) + 90;	
	secondHand.style.transform = `rotate(${secondDegree}deg)`;
	minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
	hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setTime, 1000);