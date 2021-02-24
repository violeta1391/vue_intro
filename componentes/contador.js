Vue.component('contador', {
    template:
    `
    <div class="p-4 m-5 text-center bg-dark text-white text-center">
    <h1>{{numero}}</h1> 
    <button class="btn btn-primary" @click="numero++"> + </button>
    </div>
    
    `, 
    data(){
        return {
            numero: 0
        }
    }
})