const router = require("express").Router();
const generateAuthToken = require("../utils/generateJwtToken");
const Admin = require("../models/Admin");


const credential={fname:'admin',
lname:'singh',
email:'admin@gmail.com',
password:'admin@123'}

router.post("/login", async (req, res) => {

if(!req.body.email||!req.body.password){
  return res.status(401).send('Invalid payload')
}

if(req.body.email===credential.email&&req.body.password===credential.password){
  const token = generateAuthToken({
    email: req.body.email
  });
  const {fname,lname,email}=credential;
  return res.send({user:{fname,lname,email}, token });
}
return res.status(401).send('invalid email or password')

// write code for scenario where we have to check for user email registered in the database

module.exports = router;
