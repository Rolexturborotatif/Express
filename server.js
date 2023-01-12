const express = require('express');
const UserRoutes = require('./Routes/UserRoutes')
//init express
const app = express()

//parse data
app.use(express.json())

//AuthMiddleWare
/* const AuthMiddleWare = (req,res,next)=>{
    const auth = false;
    if(auth){
        next()
    }
    else {
       res.send('You are not authorized !')
    }
}

app.use(AuthMiddleWare)



//create endPoints
app.get('/',(req,res)=>{
    // res.send('<h1>this is a ws of express</h1>')
    res.sendFile(__dirname + '/views/Home.html')
})



app.get('/contact',AuthMiddleWare,(req,res)=>{
    res.sendFile(__dirname + '/views/Contact.html')
})

app.get('/CSS/Home.css',(req,res)=>{
    res.sendFile(__dirname + '/views/CSS/Home.css')
}) 

app.use(express.static(__dirname + '/views')) */
app.use('/api/users', UserRoutes )

const PORT = 5000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on port ${PORT} ...`))