// const tapModelComponent = () => ({
AFRAME.registerComponent('tap-frasco', {
    schema: {
        frasco: {default: '#multivit'},
    },
    init() {
        const Frasco = document.getElementById(this.data.frasco)
    
        this.el.addEventListener('click', (event) => {
            
            // OCULTAR OTROS
            // Frasco.setAttribute('animation', {
            //     property: 'scale',
            //     to: '0 0 0',
            //     easing: 'easeOutQuad',
            //     dur: 500,
            // })
        
            // MOSTRAR DATOS
            setTimeout(() => {
                if (this.data.frasco === '#multivit-frasco') {
                // MOSTRAR COMBINACION
                    alert(Frasco)
                    Frasco.remove();
                    // Frasco.setAttribute('animation', {
                    //     property: 'scale',
                    //     to: '0 0 0',
                    //     easing: 'easeOutQuad',
                    //     dur: 500,
                    // })
                } 
            }, 500)
    
        })
    },
        
});
          
// export {tapModelComponent}