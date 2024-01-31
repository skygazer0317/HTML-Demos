async function getTodoList(){
    let result=awaitfetch()
    //fetch is a simple promise
    result.json('https://jsonplaceholder.typicode.com/todos/1').then((r)=>{
        document.getElementById('user').innerHTML=JSON.stringify(r)
        console.log(r)})
    }
    getTodoList