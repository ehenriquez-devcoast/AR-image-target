AFRAME.registerComponent('tap-model', {
    schema: {
        boton: {default: ''},
        video: {default: '#multi-Video'},
        combinacion: {default: '#multi-Combinacion'},
        capsulas: {default: '#multi-Capsulas'},
        rutina: {default: '#multi-Rutina'},
    },
    init() {
        // CLICK EVENT
        const Combinacion = document.getElementById(this.data.combinacion)
        const Capsulas = document.getElementById(this.data.capsulas)
        const Rutina = document.getElementById(this.data.rutina)
        const Video = document.getElementById(this.data.video)
        let VideoAsset = document.getElementById((this.data.video.includes('multivit') ? 'multivit' : this.data.video.includes('calcio') ? 'calcio' : 'complejob' ) + '-video')
        

        this.el.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            
            // OCULTAR OTROS
            if (this.data.boton) {
                VideoAsset.pause();
                VideoAsset.currentTime = 0;

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
                Video.setAttribute('animation', {
                    property: 'scale',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                })
            }
            
            // MOSTRAR DATOS
            setTimeout(() => {
                if (this.data.boton === '1') {
                    // MOSTRAR COMBINACION
                    Combinacion.setAttribute('animation', {
                        property: 'scale',
                        to: '1 1 1',
                        easing: 'easeOutQuad',
                        dur: 800,
                    })
                
                } else if (this.data.boton === '2') {
                    // MOSTRAR CAPSULAS
                    Capsulas.setAttribute('animation', {
                        property: 'scale',
                        to: '1 1 1',
                        easing: 'easeOutQuad',
                        dur: 800,
                    })
                } else if (this.data.boton === '3') {
                    // MOSTRAR RUTINA
                    Rutina.setAttribute('animation', {
                        property: 'scale',
                        to: '1 1 1',
                        easing: 'easeOutQuad',
                        dur: 800,
                    })
                } else if (this.data.boton === '4') {
                    // MOSTRAR VIDEO
                    Video.setAttribute('animation', {
                    property: 'scale',
                    to: '2 2 2',
                    easing: 'easeOutQuad',
                    dur: 800,
                    })

                    VideoAsset.play()


                    // console.log(this.data.video)
                    // const myWindow = window.open(`https://www.youtube.com/embed/${this.data.video}?rel=0&autoplay=1`,
                    //     '_blank', 'width=800,height=600')
                    // myWindow.document.write('<iframe width="560" height="315" src="https://www.youtube.com/embed/IYE105cTtsw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>')
                    //

                    // if (myWindow.requestFullscreen) {
                    // myWindow.requestFullscreen();
                    // } else if (myWindow.webkitRequestFullscreen) { // SAFARI
                    // myWindow.webkitRequestFullscreen();
                    // } else if (myWindow.msRequestFullscreen) { // IE11
                    // myWindow.msRequestFullscreen();
                    // }

                    // myWindow.document.close()
                }
            }, 500)
    
        }, { passive: false })
    },
    
});