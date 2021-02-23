const app = new Vue({
    el: '#app',
    data: {
        titulo: "Hola mundo!",
        frutas: ['manzana', 'pera', 'frutilla'],
        verduras: [
            {nombre: 'lechuga', cantidad:10},
            {nombre: 'brocoli', cantidad: 0},
            {nombre: 'espinaca', cantidad:30}
        ]
    }
}) 