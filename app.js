const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const userModel = require("./models/user.model");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    let users = await userModel.find()
    console.log(users);
    res.render("all",{users});
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.post("/create", async (req, res) => {
    let {name,mail,img} = req.body;
    console.log(name,mail,img);
    await userModel.create({
        name:name,
        mail:mail,
        img : img
    });
  res.redirect('/');
});
app.get("/update/:mail",  (req, res) => {
  let mail = req.params.mail;
  res.render('update',{mail})
})

app.post("/update", async (req, res) => {
    let {name,oldMail,img} = req.body;
    console.log(name,oldMail,img);
   let updatedUser = await userModel.findOneAndUpdate({
        mail:oldMail,
    },{
      name:name,
      img:img,
    },{new:true});
  res.redirect('/');
});
app.get("/delete/:mail", async (req, res) => {
  let mail = req.params.mail;
  const deletedUser = await userModel.findOneAndDelete({mail:mail})
  res.render('delete',{deletedUser})
})

app.listen(port,()=>{
  console.log('chl bhai');
});
