function TodoList(task,time,completed=false){
    return{
        task,
        time,
        completed,
        toogleCompleted:function()
        {
           this.completed=!this.completed;
        },
        display:function(){
            return`Todo: ${task} Date of Completion:${time} Iscompleted:${this.completed}`
        }
    };
}
let todo1=new TodoList("finish assignment","14.9.23");

function completed(){
todo1.toogleCompleted();
}

function displaydo(){
document.getElementById('display').innerHTML= todo1.display()
}