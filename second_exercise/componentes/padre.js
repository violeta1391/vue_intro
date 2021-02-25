Vue.component('padre', {
    template:
    `
    <div class="p-4 m-5 text-center bg-dark text-white text-center">
    <h1>Componente padre: {{numeroPadre}}</h1>
    <button class="btn btn-primary" @click="numeroPadre++"> + </button>     
    <hijo :numero="numeroPadre" @nombreHijo="nombrePadre =$event"></hijo>
    {{nombrePadre}}
    </div>
    
    `, 
    data(){
        return {
            numeroPadre: 0,
            nombrePadre: " "
        }
    }
})