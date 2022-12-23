const express = require('express')
const cors = require('cors');
const app = express();
require("dotenv").config();
const path = require('path')
const mongoose = require("mongoose");
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

app.use("/sip",require("./routes/siphandler"))


mongoose.set("strictQuery", false);


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://Dimple:OfPw7ix6xO7qJGCD@dimple.llwb2.mongodb.net/sip?retryWrites=true&w=majority',
    
    {
    
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
    }
  );
  

if (process.env.NODE_ENV == 'production') {
    const path = require('path')

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')))
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log("server started at :", port)
})