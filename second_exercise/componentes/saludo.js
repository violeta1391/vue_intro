Vue.component('saludo', {
    template:
    `
    <div class="p-4 m-5 text-center bg-danger text-white text-center">
    <h1>{{saludo}}</h1> 
    <h3>asd</h3>   
    </div>
    
    `, 
    data(){
        return {
            saludo: 'hola desde vue'
        }
    }
})