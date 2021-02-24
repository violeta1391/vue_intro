Vue.component('saludo', {
    template:
    `
    <div>
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