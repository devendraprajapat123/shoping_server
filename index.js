import express from 'express'
import 'dotenv/config'
import { DBconfig } from './src/Dbconfig/Dbconfig.js'
import Productrouter from './src/Router/Productroutes.js'

const app = express()
app.use(express.json())



app.use(Productrouter)


//database
DBconfig()



app.listen(process.env.PORT, () => {
    console.log(`server is runnig on ${process.env.PORT}`);
})