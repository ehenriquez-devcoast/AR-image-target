document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	const arSystem = sceneEl.systems["mindar-image-system"];
	const target = document.querySelector('#calcio');
	// const exampleTargetLink = document.querySelector('#example-target-link');

	// const compatibilityOverlay = document.querySelector("#example-compatibility-overlay");
	// const loadingOverlay = document.querySelector("#example-loading-overlay");
	// const controlOverlay = document.querySelector("#example-control-overlay");

	// const startButton = document.querySelector("#example-start-button");
	// const pauseButton = document.querySelector("#example-pause-button");
	// const unpauseButton = document.querySelector("#example-unpause-button");
	// const stopButton = document.querySelector("#example-stop-button");
	// const stopARButton = document.querySelector("#example-stop-ar-button");

	// arReady event triggered when ready
    // sceneEl.addEventListener("arReady", (event) => {
	//   loadingOverlay.style.display = "none";
    // });

	// // arError event triggered when something went wrong. Mostly browser compatbility issue
    // sceneEl.addEventListener("arError", (event) => {
	//   loadingOverlay.style.display = "none";
	//   compatibilityOverlay.style.display = "block";
    // });

	// // detect click event on tracking object
    // exampleTargetLink.addEventListener("click", event => {
    //       console.log("clicked...");
    // });

	// detect target found
    target.addEventListener("targetFound", event => {
        console.log("target found");
        console.log(event)
        arSystem.pause(true);
    });

	// detect target lost
    // exampleTarget.addEventListener("targetLost", event => {
    //     console.log("target lost");
    // });


	// loadingOverlay.style.display = "block";
	// controlOverlay.style.display = "block";

	// startButton.addEventListener('click', () => {
	//   arSystem.start(); // start AR 
    // });
	// stopButton.addEventListener('click', () => {
	//   arSystem.stop(); // stop
	// });
	// pauseButton.addEventListener('click', () => {
	//   arSystem.pause(true); // pause AR engine, but keep video feed
	// });
	// unpauseButton.addEventListener('click', () => {
	//   arSystem.unpause();
	// });
});