import {Application, Request, Response} from 'express'
import todo from './router/todoRouter'
const mainApp = (app:Application) =>{
    
    app.use('/api/v1', todo)
    app.get('/', (req:Request, res:Response)=>{

      try{
        res.status(200).json({
            message:"welcome",
            data:""
        })
      } catch(err) {
        res.status(404).json({
            message:"Error",
        })
      }
    })
}

export default mainApp;