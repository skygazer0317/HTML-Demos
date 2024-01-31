
        function display(){
            let students={'name':'partha','age':20,'mark':78,'branch':'chennai'}
            console.log(students)
            document.getElementById('val').innerHTML=`<br>${JSON.stringify(students)}`
        }
    