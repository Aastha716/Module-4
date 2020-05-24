(function(window){
	var byeSpeaker={};
	// byeSpeaker.name="Tonu";
	var speakWord = "Good Bye";
	byeSpeaker.speak= function speak(name) {
  		console.log(speakWord + " " + name);
		}
	window.byeSpeaker=byeSpeaker;
})(window);


