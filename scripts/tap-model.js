// const tapModelComponent = () => ({
AFRAME.registerComponent('tap-model', {
    schema: {
        boton: {default: '1'},
        video: {default: '#multi-Video'},
        combinacion: {default: '#multi-Combinacion'},
        capsulas: {default: '#multi-Capsulas'},
        rutina: {default: '#multi-Rutina'},
    },
    init() {
        // var sceneEl = document.querySelector('a-scene')
        // console.log(sceneEl.querySelector('#corazon'))
        // let target = sceneEl.querySelector('#multivit')
        // const model = document.getElementById('corazon-glb')  // document.getElementById('corazon')
    
        /*window.screen.orientation.addEventListener("change", function(e) {
            // Do something on change
        console.log('The orientation of the screen is: ' + window.screen.orientation);
        });*/
        // const Sombra = document.getElementById('sombra-multivit')
    
        this.el.addEventListener('click', (event) => {
        /// / Create new entity for the new object
        // const model = this.el  // .getObjectByName('#corazon-glb')
        // console.log('1')
    
        const Combinacion = document.getElementById(this.data.combinacion)
        const Capsulas = document.getElementById(this.data.capsulas)
        const Rutina = document.getElementById(this.data.rutina)
        
        // const btn3d = document.getElementById('text-' + this.data.boton)
        
        // const Video = document.getElementById(this.data.video)
    
        // OCULTAR OTROS
        // Combinacion.setAttribute('visible', 'false')
        Combinacion.setAttribute('animation', {
            property: 'scale',
            to: '0 0 0',
            easing: 'easeOutQuad',
            dur: 500,
        })
        Capsulas.setAttribute('animation', {
            property: 'scale',
            to: '0 0 0',
            easing: 'easeOutQuad',
            dur: 500,
        })
        Rutina.setAttribute('animation', {
            property: 'scale',
            to: '0 0 0',
            easing: 'easeOutQuad',
            dur: 500,
        })
        // Video.setAttribute('animation', {
        // property: 'scale',
        // to: '0 0 0',
        // easing: 'easeOutQuad',
        // dur: 500,
        // })
    
        // MOSTRAR DATOS
        setTimeout(() => {
            if (this.data.boton === '1') {
            // MOSTRAR COMBINACION
            // Combinacion.setAttribute('visible', 'false')
            // Combinacion.setAttribute('visible', 'true')
            Combinacion.setAttribute('animation', {
                property: 'scale',
                to: '.4 .4 .4',
                easing: 'easeOutQuad',
                dur: 800,
            })
    
            // console.log(btn3d.getAttribute('position').x + ' ' + btn3d.getAttribute('position').y)
            // Sombra.setAttribute('position', btn3d.getAttribute('position').x + ' ' + (btn3d.getAttribute('position').y+0.1) + ' -0.2' )
            // Sombra.setAttribute('scale', '.3 .3 .3');
            
            
            } else if (this.data.boton === '2') {
            // MOSTRAR CAPSULAS
            Capsulas.setAttribute('animation', {
                property: 'scale',
                to: '.4 .4 .4',
                easing: 'easeOutQuad',
                dur: 800,
            })
            } else if (this.data.boton === '3') {
            // MOSTRAR RUTINA
            Rutina.setAttribute('animation', {
                property: 'scale',
                to: '.4 .4 .4',
                easing: 'easeOutQuad',
                dur: 800,
            })
            } else if (this.data.boton === '4') {
            // MOSTRAR VIDEO
            // Video.setAttribute('animation', {
            // property: 'scale',
            // to: '.8 .8 .8',
            // easing: 'easeOutQuad',
            // dur: 800,
            // })
            console.log(this.data.video)
            const myWindow = window.open(`https://www.youtube.com/embed/${this.data.video}?rel=0&autoplay=1`,
                '_blank', 'width=800,height=600')
            // myWindow.document.write('<iframe width="560" height="315" src="https://www.youtube.com/embed/IYE105cTtsw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>')
            //
            // if (myWindow.requestFullscreen) {
            // myWindow.requestFullscreen();
            // } else if (myWindow.webkitRequestFullscreen) { // SAFARI
            // myWindow.webkitRequestFullscreen();
            // } else if (myWindow.msRequestFullscreen) { // IE11
            // myWindow.msRequestFullscreen();
            // }
            myWindow.document.close()
            }
        }, 500)
    
        // const newElement = document.createElement('a-entity');
    
        // newElement.setAttribute('position', '0 0 0')
        // newElement.setAttribute('visible', 'false')
        // newElement.setAttribute('scale', '0.0001 0.0001 0.0001')
        })
    },
    
});
      
// export {tapModelComponent}