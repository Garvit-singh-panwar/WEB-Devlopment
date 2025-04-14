const { faker } = require("@faker-js/faker");
const express = require("express");
const mysql = require('mysql2');
const path = require("path");
const port = 8080;
const app = express();
const methodOverride = require('method-override')



app.use(express.static(path.join(__dirname,"public")));
app.set("viewengine", "ejs");
app.set("views",path.join(__dirname,"./views"));
app.use(methodOverride("_method")); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const connection = mysql.createConnection({
   host: 'localhost' ,
   user: 'root' ,
   database: "test_app",
   password: "0000",
});






app.listen(port, ()=>{
   console.log("port is listening");
})

// ROOT DIRECTORY

app.get("/",(req,res)=>{
   let q = "SELECT COUNT(*) FROM user";
   try{
      connection.query(q,(err,result)=>{
         if(err) throw err;
         let count = result[0]['COUNT(*)'];
         console.log(count);
         res.render('home.ejs',{count});
      })
   }catch{
      console.log(err);
      res.send("some error in database");
   }
   

});


// SHOW ALL USER DATA

app.get("/user",(req,res)=>{
   let q = "SELECT * FROM user";
  try{ connection.query(q,(err,users) =>{
      if(err) throw err;
      // let users = result[0];
      // console.log(result)
      res.render('user.ejs',{users}); 
   })
   }catch{
      console.log(err);
   }
})


// GET USER NAME TO EDIT

app.get("/user/:id/edit" , (req,res)=>{
   let {id} = req.params;
   let q = `SELECT * FROM user WHERE id = '${id}'`;
   try{
   connection.query(q, (err,result)=>{
      if(err) throw err;
      // console.log(result[0]);
      let user = result[0];
      res.render('edit.ejs',{user});

   });
}
   catch{
      console.log(err);
   }
});

// EDIT USERNAME

app.patch("/user/:id",(req,res)=>{

   // res.send("update");
   let {id} = req.params;
   let {username: newuser,password: formPass} = req.body;
   let q = `SELECT password FROM user WHERE id = '${id}'`;
   try {
      connection.query(q,(err,result)=>{
         if(err) throw err;
         let user = result[0];
         
         if(formPass == user.password){
            let q2 = `UPDATE user SET username = '${newuser}' WHERE id = '${id}'`; 
            connection.query(q2,(err,result)=>{
               if(err) throw err;
               res.redirect('/user');

            })
         }
         else{
            res.send("WRONG PASSWORD");
         }

   });
   }catch{

   }

})



// try{
// connection.query("SHOW TABLES" , (err, result)=>{
//    if(err) throw err;
//    console.log(result);
// });

// }
// catch(err){
//    console.log(err);
// }




// let q = "INSERT INTO user (id,username,email,password) VALUES ?";

// let users = [
//    ["123b","123_newuserb","abc@gmail.comb","abcb"],
//    ["123c","123_newuserc","abc@gmail.comc","abcc"]
// ];

// try{

//    connection.query(q,[users],(err,result)=>{
//       if(err) throw err;
//       console.log(result);
//       console.log(result.length);
//       console.log(result[0]);
//       console.log(result[1]);
//    });
// }catch{
//    console.log(err);
// }



// 



// connection.end();


// let  createRandomUser = () => {
//  return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//  };
// };
// console.log(createRandomUser());




   //let getRandomUser = ()=>{
   //    return [
   //       faker.string.uuid(),
   //       faker.internet.userName(),
   //       faker.internet.email(),
   //       faker.internet.password()
   //    ];
   // };
   
   
   
   
   
   // try{
   //    connection.query(q,[data] , (err,result)=>{
   //       if(err) throw err;
   //       console.log(result);
   //    });
   // }
   // catch{
   //    console.log(err);
   // }
   
   // connection.end();

