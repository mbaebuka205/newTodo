import express, {Application} from 'express'
import mainApp from './mainApp';
import cors from 'cors'
import { mainConnection } from './utils/dbConfig';

const port:number = 2233;
const app:Application = express()

app.use(cors())
app.use(express.json())
mainApp(app)
const server = app.listen(port, () =>{
    mainConnection()
})

process.on('uncaughtException', (err:Error)=>{
    console.log('uncaughtException', err)
    process.exit(1)
})

process.on('rejectionHandled', (reason:any)=>{
    console.log('rejectionHandled', reason)
    server.close(()=>{
        process.exit(1)
    })
})