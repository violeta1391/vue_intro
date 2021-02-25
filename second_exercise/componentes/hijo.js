Vue.component('hijo', {
    template:
    `
    <div class="p-4 m-5 text-center bg-success text-center">
    <h2>Componente hijo: {{numero}}</h2>     
    <h4>Nombre: {{nombre}}</h4>
    
    </div>
    
    `, 
    props: ['numero'],
    data() {
        return {
            nombre: 'violeta'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre)
    }
})