// const tapModelComponent = () => ({
AFRAME.registerComponent('tap-frasco', {
    schema: {
        frasco: {default: '#multivit'},
    },
    init() {
    
        this.el.addEventListener('click', (event) => {
    
            const Frasco = document.getElementById(this.data.frasco)
            
            // OCULTAR OTROS
            // Frasco.setAttribute('animation', {
            //     property: 'scale',
            //     to: '0 0 0',
            //     easing: 'easeOutQuad',
            //     dur: 500,
            // })
        
            // MOSTRAR DATOS
            alert(this.data.frasco)
            setTimeout(() => {
                if (this.data.frasco === '#multivit-frasco') {
                // MOSTRAR COMBINACION
                    Frasco.setAttribute('animation', {
                        property: 'rotation',
                        to: '1 0 0',
                        easing: 'easeInOutQuad',
                        dur: 1000,
                        loop: true,
                        dir: 'alternate'
                    })
                    alert('multivit touch')
                } 
            }, 500)
    
        })
    },
        
});
          
// export {tapModelComponent}