// const tapModelComponent = () => ({
AFRAME.registerComponent('tap-frasco', {
    schema: {
        frasco: {default: '#multivit'},
        target: {default: '0'},
    },
    init() {
        
        this.el.addEventListener('click', (event) => {
            let sceneEl = document.querySelector('a-scene');
            let CalcioFrasco = document.getElementById('calcio-frasco-0')
            let MultivitFrasco = document.getElementById('multivit-frasco-0')
            let ComplejobFrasco = document.getElementById('complejob-frasco-0')
            let Frasco = document.getElementById(this.data.frasco)
            let Close = document.getElementById('close-btn')
            // OCULTAR OTROS
            // Frasco.setAttribute('animation', {
            //     property: 'scale',
            //     to: '0 0 0',
            //     easing: 'easeOutQuad',
            //     dur: 500,
            // })
            // console.log(event)
            // console.log(this.data.frasco)
            console.log(Frasco)
            // MOSTRAR DATOS
                if (this.data.frasco === ('multivit-frasco-' + this.data.target)) {
                // MOSTRAR COMBINACION
                    // Frasco.remove();
                    // Frasco.setAttribute('animation', {
                    //     property: 'scale',
                    //     to: '0 0 0',
                    //     easing: 'easeOutQuad',
                    //     dur: 500,
                    // })
                    CalcioFrasco.remove();
                    ComplejobFrasco.remove();
                }
                else if(this.data.frasco === ('calcio-frasco-' + this.data.target)){
                    console.log('clicked calcio')

                    Frasco.setAttribute("class","notClickable")

                    MultivitFrasco.setAttribute('animation', {
                        property: 'scale',
                        to: '0 0 0',
                        easing: 'easeOutQuad',
                        dur: 500,
                    });
                    ComplejobFrasco.setAttribute('animation', {
                        property: 'scale',
                        to: '0 0 0',
                        easing: 'easeOutQuad',
                        dur: 500,
                    });
                    
                    setTimeout(() => {
                        MultivitFrasco.remove();
                        ComplejobFrasco.remove();

                        Close.setAttribute('animation', {
                            property: 'scale',
                            to: '.5 .5 .5',
                            easing: 'easeInQuad',
                            dur: 500,
                        });
                        let closePos = new THREE.Vector3(0.9, 0.9, -1);
                        closePos.unproject(this.el.sceneEl.camera)
                        Close.setAttribute("position",closePos)

                         // Marco
                        let marco = document.createElement('a-image');
        
                        marco.setAttribute("position", "0 2.5 0")
                        marco.setAttribute("height", "1")
                        marco.setAttribute("width", "3")
                        marco.setAttribute("src", "#marco-calcio")

                        sceneEl.appendChild(marco);

                        // crear Combinacion
                        let Combinacion = document.createElement('a-image');
                        
                        Combinacion.setAttribute("position", "2 0.7 0")
                        Combinacion.setAttribute("width", "3")
                        Combinacion.setAttribute("height", "1")
                        Combinacion.setAttribute("scale", "0 0 0")
                        Combinacion.setAttribute("id", "#calcio-Combinacion")
                        Combinacion.setAttribute("src", "#calcio-combinacion")

                        sceneEl.appendChild(Combinacion);

                        // crear Capsulas
                        let Capsulas = document.createElement('a-image');
                        
                        Capsulas.setAttribute("position", "2 0.7 0")
                        Capsulas.setAttribute("width", "3")
                        Capsulas.setAttribute("height", "1")
                        Capsulas.setAttribute("scale", "0 0 0")
                        Capsulas.setAttribute("id", "#calcio-Capsulas")
                        Capsulas.setAttribute("src", "#calcio-capsulas")

                        sceneEl.appendChild(Capsulas);

                        // crear Rutina
                        let Rutina = document.createElement('a-image');
                        
                        Rutina.setAttribute("position", "2 0.7 0")
                        Rutina.setAttribute("width", "3")
                        Rutina.setAttribute("height", "1")
                        Rutina.setAttribute("scale", "0 0 0")
                        Rutina.setAttribute("id", "#calcio-Rutina")
                        Rutina.setAttribute("src", "#calcio-rutina")

                        sceneEl.appendChild(Rutina);

                        // Crear Video
                        let Video = document.createElement('a-video');
        
                        Video.setAttribute("position", "0 0 1")
                        Video.setAttribute("width", "3")
                        Video.setAttribute("scale", "0 0 0")
                        Video.setAttribute("id", "#calcio-Video")
                        Video.setAttribute("src", "#calcio-video")

                        sceneEl.appendChild(Video);



                        // Combinacion
                        let combinacion = document.createElement('a-entity');
        
                        combinacion.setAttribute("position", "0.340 -2.615 0")
                        combinacion.setAttribute("scale", "5 5 5")
                        combinacion.setAttribute("class", "clickable")
                        combinacion.setAttribute("gltf-model", "#calcio-combinacion-glb")
                        combinacion.setAttribute("tap-model", "boton: 1; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

                        sceneEl.appendChild(combinacion);

                        // Capsulas
                        let capsulas = document.createElement('a-entity');
        
                        capsulas.setAttribute("position", "-0.465 -3.565 0")
                        capsulas.setAttribute("scale", "5 5 5")
                        capsulas.setAttribute("class", "clickable")
                        capsulas.setAttribute("gltf-model", "#calcio-capsulas-glb")
                        capsulas.setAttribute("tap-model", "boton: 2; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

                        sceneEl.appendChild(capsulas);

                        // Rutina
                        let rutina = document.createElement('a-entity');
        
                        rutina.setAttribute("position", "-0.070 -3.167 0")
                        rutina.setAttribute("scale", "5 5 5")
                        rutina.setAttribute("class", "clickable")
                        rutina.setAttribute("gltf-model", "#calcio-rutina-glb")
                        rutina.setAttribute("tap-model", "boton: 3; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

                        sceneEl.appendChild(rutina);

                        // Video
                        let video = document.createElement('a-entity');
        
                        video.setAttribute("position", "0.023 -3.179 0")
                        video.setAttribute("scale", "5 5 5")
                        video.setAttribute("class", "clickable")
                        video.setAttribute("gltf-model", "#calcio-video-glb")
                        video.setAttribute("tap-model", "boton: 4; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

                        sceneEl.appendChild(video);

                    }, 500)

                   
                }
    
        })
    },
        
});