// const tapModelComponent = () => ({
AFRAME.registerComponent('tap-frasco', {
    schema: {
        frasco: {default: '#multivit'},
        target: {default: '0'},
    },
    init() {
        
        this.el.addEventListener('click', (event) => {
            let sceneEl = document.querySelector('a-scene');
            let Frasco = document.getElementById(this.data.frasco)
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
            setTimeout(() => {
                if (this.data.frasco === ('multivit-frasco-' + this.data.target)) {
                // MOSTRAR COMBINACION
                    // Frasco.remove();
                    Frasco.setAttribute('animation', {
                        property: 'scale',
                        to: '0 0 0',
                        easing: 'easeOutQuad',
                        dur: 500,
                    })
                }
                else if(this.data.frasco === ('calcio-frasco-' + this.data.target)){
                    console.log('clicked calcio')
                    Frasco.setAttribute('animation', {
                        property: 'scale',
                        to: '0 0 0',
                        easing: 'easeOutQuad',
                        dur: 500,
                    });

                    let newElement = document.createElement('a-entity');
    
                    newElement.setAttribute('position', '-0.5 1 0')
                    newElement.setAttribute('visible', 'false')
                    newElement.setAttribute('scale', '2 2 2')
                    newElement.setAttribute('gltf-model', '#multivit-combinacion-glb')

                    sceneEl.appendChild(newElement);
                }
            }, 500)
    
        })
    },
        
});
          
// export {tapModelComponent}