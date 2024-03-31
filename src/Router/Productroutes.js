import express from 'express'
import { Deleteprodut, Fetchproduct, Saveproduct, Updateproduct } from '../Controller/Productcontoller.js'

const Productrouter = express.Router()


Productrouter.post('/product', Saveproduct)
Productrouter.get('/product', Fetchproduct)
Productrouter.delete('/product/:id', Deleteprodut)
Productrouter.put('/product/:id', Updateproduct)

export default Productrouter;