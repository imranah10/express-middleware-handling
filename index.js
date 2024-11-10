const express=require('express')
const app=express()
app.use((req,res,next)=>{
    console.log(`this is first dummy`,req.url,req.metnod)
    // res.send(`<p>this 1st middleware</p>`)
    next()
    
})

app.use((req,res,next)=>{
    console.log(`this is second dummy`,req.url,req.metnod)
    // res.send(`<p>this 2nd middleware</p>`)
    next()

})

// app.use((req,res)=>{
//     console.log('welcome to express js',req.url,req.metnod)
//     res.send(`<h1>this is response</h1>`)
// })
app.get('/',(req,res,next)=>{
    console.log('handling / for GET')
    res.send(`<h1>welcome to Home page</h1>`)
})


app.get('/contact-us',(req,res,next)=>{
    console.log('handling /  for contact us GET')
    res.send(`<h1>please give your details here</h1>
        <form action="contact-us"method="POST">
        <input type ="text"placeholder="Enter your name"name="name"/>
        <input type ="email"placeholder="Enter your email"name="email"/>
        <input type="submit"/>
        
        </form>
        `)
})
app.post('/contact-us',(req,res,next)=>{
    console.log('handling contact us for POST',req.url,req.metnod)
    res.send(`<h1>We will contact you shortly</h1>`)
})
app.listen(3000,()=>{
    console.log('app is running on port 3000')
})