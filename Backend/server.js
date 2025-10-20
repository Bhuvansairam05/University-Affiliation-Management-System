const  express = require("express");
const cors = require("cors");
const app = new express();
app.use(cors);
// app.use('../Frontend/public');
app.listen(3000,()=>{
    console.log("Server is started.")
})