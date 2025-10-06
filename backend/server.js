const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors')
app.use(express.json());
app.use(cors())

const aiRouter = require('./routes/route')

app.use('/ai',aiRouter);

app.listen(PORT,()=>{
    console.log("server is live at: "+PORT);
})
