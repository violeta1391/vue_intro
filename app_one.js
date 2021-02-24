const script = new Vue({
    el: '#script',
    data: {
        titulo: "Hola mundo!",
        frutas: ['manzana', 'pera', 'frutilla'],
        verduras: [
            { nombre: 'lechuga', cantidad: 10 },
            { nombre: 'brocoli', cantidad: 0 },
            { nombre: 'espinaca', cantidad: 30 }
        ],
        nuevaVerduraNombre: ' ',
        nuevaVerduraCantidad: 0,
        total: 0,
        fondo: 'bg-warning',
        color: false,
        mensaje: 'Hola soy Violeta',
        contador: 0,
        saludo: 'Soy ciclo de vida de vue'

    },
    methods: {
        agregarVerdura() {
            this.verduras.push({
                nombre: this.nuevaVerduraNombre, cantidad: this.nuevaVerduraCantidad
            })
            this.nuevaVerduraNombre = ' ',
                this.nuevaVerduraCantidad = 0
        },
        destruir(){
            this.$destroy();
        }
    },
    computed: {
        sumarVerduras() {
            this.total = 0;
            for (verdura of this.verduras) {
                this.total = this.total + verdura.cantidad;
            }
            return this.total
        },
        invertido(){
            return this.mensaje.split('').reverse().join('')
        },
        colores(){
            return{
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador <20,
                'bg-danger' : this.contador > 20,
            }
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    }
}) 