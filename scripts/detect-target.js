document.addEventListener("DOMContentLoaded", function() {

	const sceneEl = document.querySelector('a-scene');
	const arSystem = sceneEl.systems["mindar-image-system"];

	const calcioTarget = document.querySelector('#calcio-target');
	const multivitTarget = document.querySelector('#multivit-target');
	const complejobTarget = document.querySelector('#complejob-target');
    
	const calciofrasco = document.querySelector('#calcio-frasco');
	const multivitfrasco = document.querySelector('#multivit-frasco');
	const complejobfrasco = document.querySelector('#complejob-frasco');

    /** ======================================================= */

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
    calcioTarget.addEventListener("targetFound", event => {
        console.log("target calcio found");
        console.log(event)
        arSystem.pause(true);
    });

    
    multivitTarget.addEventListener("targetFound", event => {
        console.log("target multivit found");
        console.log(event)
        arSystem.pause(true);
    });

    
    complejobTarget.addEventListener("targetFound", event => {
        console.log("target complejoB found");
        console.log(event)
        arSystem.pause(true);
    });
    /** ======================================================= */


    // Detect frasco click
    // calciofrasco.addEventListener("click", event => {
    //     console.log("frasco calcio click");
    //     console.log(event)
    //     calciofrasco.setAttribute('animation', {
    //         property: 'rotation',
    //         to: '1 0 0',
    //         easing: 'easeInOutQuad',
    //         dur: 1000,
    //         loop: true,
    //         dir: 'alternate'
    //     })
    // });

    // multivitfrasco.addEventListener("click", event => {
    //     console.log("frasco multivit click");
    //     console.log(event)
    //     multivitfrasco.setAttribute('animation', {
    //         property: 'rotation',
    //         to: '1 0 0',
    //         easing: 'easeInOutQuad',
    //         dur: 1000,
    //         loop: true,
    //         dir: 'alternate'
    //     })
    // });

    // complejobfrasco.addEventListener("click", event => {
    //     console.log("frasco complejob click");
    //     console.log(event)
    //     complejobfrasco.setAttribute('animation', {
    //         property: 'rotation',
    //         to: '1 0 0',
    //         easing: 'easeInOutQuad',
    //         dur: 1000,
    //         loop: true,
    //         dir: 'alternate'
    //     })
    // });
    /** ======================================================= */

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