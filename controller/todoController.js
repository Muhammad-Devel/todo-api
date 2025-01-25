const fs = require('fs');

exports.addTodo = (todos)=>{
    fs.existsSync('todos.json',function (exists) {
        if (exists) {
            console.log('yes file');
            fs.readFile('todos.json', function readFileCallBack(err,data){
                if (err) {
                    console.log(err);
                }else{
                    
                }
            })
        }
    })
}