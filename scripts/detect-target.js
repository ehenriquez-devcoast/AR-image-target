document.addEventListener("DOMContentLoaded", function() {

	let sceneEl = document.querySelector('a-scene');
	let arSystem = sceneEl.systems["mindar-image-system"];

	let calcioTarget = document.querySelector('#calcio-target');
	let multivitTarget = document.querySelector('#multivit-target');
	let complejobTarget = document.querySelector('#complejob-target');

    // let CalcioFrasco = document.getElementById('calcio-frasco-0')
    // let MultivitFrasco = document.getElementById('multivit-frasco-0')
    // let ComplejobFrasco = document.getElementById('complejob-frasco-0')
    
	// const calciofrasco = document.querySelector('#calcio-frasco');
	// const multivitfrasco = document.querySelector('#multivit-frasco');
	// const complejobfrasco = document.querySelector('#complejob-frasco');

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

        let CalcioFrasco = document.createElement('a-entity');
                        
        CalcioFrasco.setAttribute("id", "calcio-frasco-0")
        CalcioFrasco.setAttribute("class", "clickable")
        CalcioFrasco.setAttribute("tap-frasco", "frasco: calcio-frasco-0; target:0;")
        CalcioFrasco.setAttribute("position", "0 0 0")
        CalcioFrasco.setAttribute("scale", "3 3 3")
        CalcioFrasco.setAttribute("gltf-model", "#calcio-frasco-glb")
        CalcioFrasco.setAttribute("animation", "property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(CalcioFrasco);

        let MultivitFrasco = document.createElement('a-entity');
                        
        MultivitFrasco.setAttribute("id", "multivit-frasco-0")
        MultivitFrasco.setAttribute("class", "clickable")
        MultivitFrasco.setAttribute("tap-frasco", "frasco: multivit-frasco-0; target:0;")
        MultivitFrasco.setAttribute("position", "-1 0 0")
        MultivitFrasco.setAttribute("scale", "3 3 3")
        MultivitFrasco.setAttribute("gltf-model", "#multivit-frasco-glb")
        MultivitFrasco.setAttribute("animation", "property: position; to: -1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(MultivitFrasco);

        let ComplejoFrasco = document.createElement('a-entity');
                        
        ComplejoFrasco.setAttribute("id", "complejob-frasco-0")
        ComplejoFrasco.setAttribute("class", "clickable")
        ComplejoFrasco.setAttribute("tap-frasco", "frasco: complejob-frasco-0; target:0;")
        ComplejoFrasco.setAttribute("position", "1 0 0")
        ComplejoFrasco.setAttribute("scale", "3 3 3")
        ComplejoFrasco.setAttribute("gltf-model", "#complejob-frasco-glb")
        ComplejoFrasco.setAttribute("animation", "property: position; to: 1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(ComplejoFrasco);
    });

    
    multivitTarget.addEventListener("targetFound", event => {
        console.log("target multivit found");
        console.log(event)
        arSystem.pause(true);

        let CalcioFrasco = document.createElement('a-entity');
                        
        CalcioFrasco.setAttribute("id", "calcio-frasco-0")
        CalcioFrasco.setAttribute("class", "clickable")
        CalcioFrasco.setAttribute("tap-frasco", "frasco: calcio-frasco-0; target:0;")
        CalcioFrasco.setAttribute("position", "-1 0 0")
        CalcioFrasco.setAttribute("scale", "3 3 3")
        CalcioFrasco.setAttribute("gltf-model", "#calcio-frasco-glb")
        CalcioFrasco.setAttribute("animation", "property: position; to: -1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(CalcioFrasco);

        let MultivitFrasco = document.createElement('a-entity');
                        
        MultivitFrasco.setAttribute("id", "multivit-frasco-0")
        MultivitFrasco.setAttribute("class", "clickable")
        MultivitFrasco.setAttribute("tap-frasco", "frasco: multivit-frasco-0; target:0;")
        MultivitFrasco.setAttribute("position", "0 0 0")
        MultivitFrasco.setAttribute("scale", "3 3 3")
        MultivitFrasco.setAttribute("gltf-model", "#multivit-frasco-glb")
        MultivitFrasco.setAttribute("animation", "property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(MultivitFrasco);

        let ComplejoFrasco = document.createElement('a-entity');
                        
        ComplejoFrasco.setAttribute("id", "complejob-frasco-0")
        ComplejoFrasco.setAttribute("class", "clickable")
        ComplejoFrasco.setAttribute("tap-frasco", "frasco: complejob-frasco-0; target:0;")
        ComplejoFrasco.setAttribute("position", "1 0 0")
        ComplejoFrasco.setAttribute("scale", "3 3 3")
        ComplejoFrasco.setAttribute("gltf-model", "#complejob-frasco-glb")
        ComplejoFrasco.setAttribute("animation", "property: position; to: 1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(ComplejoFrasco);
    });

    
    complejobTarget.addEventListener("targetFound", event => {
        console.log("target complejoB found");
        console.log(event)
        arSystem.pause(true);

        let CalcioFrasco = document.createElement('a-entity');
                        
        CalcioFrasco.setAttribute("id", "calcio-frasco-0")
        CalcioFrasco.setAttribute("class", "clickable")
        CalcioFrasco.setAttribute("tap-frasco", "frasco: calcio-frasco-0; target:0;")
        CalcioFrasco.setAttribute("position", "1 0 0")
        CalcioFrasco.setAttribute("scale", "3 3 3")
        CalcioFrasco.setAttribute("gltf-model", "#calcio-frasco-glb")
        CalcioFrasco.setAttribute("animation", "property: position; to: 1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(CalcioFrasco);

        let MultivitFrasco = document.createElement('a-entity');
                        
        MultivitFrasco.setAttribute("id", "multivit-frasco-0")
        MultivitFrasco.setAttribute("class", "clickable")
        MultivitFrasco.setAttribute("tap-frasco", "frasco: multivit-frasco-0; target:0;")
        MultivitFrasco.setAttribute("position", "-1 0 0")
        MultivitFrasco.setAttribute("scale", "3 3 3")
        MultivitFrasco.setAttribute("gltf-model", "#multivit-frasco-glb")
        MultivitFrasco.setAttribute("animation", "property: position; to: -1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(MultivitFrasco);

        let ComplejoFrasco = document.createElement('a-entity');
                        
        ComplejoFrasco.setAttribute("id", "complejob-frasco-0")
        ComplejoFrasco.setAttribute("class", "clickable")
        ComplejoFrasco.setAttribute("tap-frasco", "frasco: complejob-frasco-0; target:0;")
        ComplejoFrasco.setAttribute("position", "0 0 0")
        ComplejoFrasco.setAttribute("scale", "3 3 3")
        ComplejoFrasco.setAttribute("gltf-model", "#complejob-frasco-glb")
        ComplejoFrasco.setAttribute("animation", "property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

        sceneEl.appendChild(ComplejoFrasco);
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