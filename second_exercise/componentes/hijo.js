Vue.component('hijo', {
    template:
    `
    <div class="p-4 m-5 text-center bg-success text-center">
    <h2>Componente hijo: {{numero}}</h2>     
    </div>
    
    `, 
    props: ['numero']
})