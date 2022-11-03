const express = require('express')
const cors = require('cors')
const app = express()

 //middleware
 app.use(cors())


 app.get('/users',(req,res)=>{
     res.json([

       {
        userid:1,
        name:'oxford',
        age:23,
        address:{
               city:'louisville',
               suit: "Apt. 556",
               zipcode: "92998-3874",
            },
         
        },

        {
        userid:2,
        name:'brixton',
        age:63,
        address:{
               city:'dale',
               suit: "Apt. 756",
               zipcode: "92998-3874",
            },
        },

        {
        userid:3,
        name:'saxxton',
        age:'36',
        address:{
                   city:'hasta',
                   suit: "Apt. 765",
                   zipcode: "92998-3877",
                },
            },
        
            {
            userid:4,
            name:'saxxton',
            age:36,
            address:{
                city:'hasta',
                suit: "Apt. 765",
                zipcode: "92998-3877",
                },
            },
            {
            userid:5,
            name:"Patricia Lebsack",
            age:36,
            address:{
                   
                    city:"South Elvis",
                    suit: "Apt. 765",
                    zipcode: "92998-3877",
                    },
            },
            {
            userid:6,
            name:"Chelsey Dietrich",
            age:36,
            address:{
                   
                    city:"Kamren",
                    suit: "Apt. 765",
                    zipcode: "92998-3877",
                    },
            },
            {
                userid:6,
                name:" Dietrichester sane",
                age:36,
                address:{
                       
                        city:"Kapelot",
                        suit: "Apt. 765",
                        zipcode: "92998-3877",
                        },
                }
            
            ])
 })




 app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})