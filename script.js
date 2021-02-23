const app = new Vue({
    el: '#app',
    data: {
        titulo: "Hola mundo!",
        frutas: ['manzana', 'pera', 'frutilla'],
        verduras: [
            {nombre: 'lechuga', cantidad:10},
            {nombre: 'brocoli', cantidad: 0},
            {nombre: 'espinaca', cantidad:30}
        ],
        nuevaVerduraNombre:' ',
        nuevaVerduraCantidad:' ',
        total: 0 
    },
    methods: {
        agregarVerdura() {
            this.verduras.push({
                nombre: this.nuevaVerduraNombre, cantidad: this.nuevaVerduraCantidad
            })
            this.nuevaVerduraNombre= ' ',
            this.nuevaVerduraCantidad= ' '
        }
    },
    computed: {
        sumarVerduras() {
            this.total = 0;
            for(verdura of this.verduras){
                this.total = this.total + verdura.cantidad;
            }
            return this.total
        }
    }
}) 