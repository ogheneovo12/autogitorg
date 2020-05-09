const express = require("express")
const path = require("path")
const app= express();
const axios = require("axios");
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname,"../client/build")))
app.post("/api/invite",async (req,res)=>{
    try{
        const response = await axios.put(
          `https://api.github.com/orgs/ecxTest/memberships/${req.body.username || ""}`,
          null,
          {
            headers: {
              Authorization: process.env.Authorization,
            },
          }
        );
      return  res.status(response.status).json({status:response.statusText,data:response.data})
      }catch(err){
        return  res.status(err.response.status).json({status:err.response.statusText,data:err.response.data})
      }
})
module.exports = app