const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())


// listening the port
app.listen(PORT, ()=>{
    console.log(`Server ${PORT}da ishlamoqda...`);    
})