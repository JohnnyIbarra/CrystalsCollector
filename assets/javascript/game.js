$(document).ready(function () {

	var totalscore = 0;
	var wins = 0;
	var losses = 0;
	var goal = 0;
	var greenNum = 0;
	var blueNum = 0;
	var orangeNum = 0;
	var pinkNum = 0;

	// function called: startRound
	function startRound() {
		// reset totalscore to zero
		console.log(totalscore);
		totalscore = 0;
		$("#totalscore").html(totalscore);
		console.log(totalscore);
		// generate a random number between 19 and 120
		goal = Math.floor(Math.random() * 120) + 19;
		// insert the generated number in the p tag in the randomnumber div
		$("#randomnumber").html(goal);
		// generate 4 random numbers to assign to the crystals
		greenNum = Math.floor(Math.random() * 15) + 1;
		console.log("The green crystal is " + greenNum);
		blueNum = Math.floor(Math.random() * 15) + 1;
		console.log("The blue crystal is " + blueNum);
		orangeNum = Math.floor(Math.random() * 15) + 1;
		console.log("The orange crystal is " + orangeNum);
		pinkNum = Math.floor(Math.random() * 15) + 1;
		console.log("The pink crystal is " + pinkNum);
	};
	startRound();
	// onclick crystal, it totalscore + colorNum = new totalscore
	$("#greencrystal").on("click", function () {
		totalscore = totalscore + greenNum;
		console.log(totalscore);
		scoreCount();
	});
	$("#bluecrystal").on("click", function () {
		totalscore = totalscore + blueNum;
		console.log(totalscore);
		scoreCount();
	});
	$("#orangecrystal").on("click", function () {
		totalscore = totalscore + orangeNum;
		console.log(totalscore);
		scoreCount();
	});
	$("#pinkcrystal").on("click", function () {
		totalscore = totalscore + pinkNum;
		console.log(totalscore);
		scoreCount();
	});
	// display the = in the total score div
	function scoreCount() {
		$("#totalscore").html(totalscore);
		// if the equals is = the randomnumber, + 1 to wins and restart game
		if (totalscore === goal) {
			wins++;
			$("#wins").html(wins);
			startRound();
		};
		// if the equals i > the randomnumber, + 1 to losses and restart game
		if (totalscore > goal) {
			losses++;
			$("#losses").html(losses);
			startRound();
		};
	};
});