import { Request, Response } from "express";
// import mongoose from "mongoose";
import { statusCode } from "../utils/statusCode";
import todoModel, { iTodoData } from "../model/todoModel";
import moment from "moment";

// export const createTodo = async(req:Request, res:Response) =>{
//    try{
//     const {task, time} = req.body;
//     let newTime = time * 1000

//     const realtime = new Date().getTime() +newTime

//     const todo  = await todoModel.create({task, deadLine: moment(realtime).format("LLLL")})


//     let timming = setTimeout(async() =>{
//         await todoModel.findOneAndUpdate(
//             todo._id,
//             { achieved: "Terminated"},
//             {new : true}
//         )
//         clearTimeout(timming)
//     }, newTime)
//     // const todo = await todoModel.create({task})
//     return res.status(statusCode.OK).json({
//         message:"created",
//         data: todo
//     })
//    } catch(error){
//     return res.status(statusCode.BAD_REQUEST).json({
//         message:"error",
//     })
//    }
// } 


export const createTodo = async(req:Request, res:Response) =>{
    try{
     const {task, time} = req.body;
    //  let newTime = time * 1000

    let newTime: any = Date.parse(moment(time[1]).format("LLLL")) - Date.parse(moment(time[0]).format("LLLL"))
    console.log(newTime)
    let final = parseInt(`${newTime/86400000}`)
    //  const realtime = new Date().getTime() +newTime
 
     const todo  = await todoModel.create({task, deadLine: (`${final}day(s)`), countDown:(final)})
 
 
     let timming = setTimeout(async() =>{
         await todoModel.findOneAndUpdate(
             todo._id,
             { achieved: "Terminated"},
             {new : true}
         )
         clearTimeout(timming)
     }, newTime)
     // const todo = await todoModel.create({task})
     return res.status(statusCode.OK).json({
         message:"created",
         data: todo
     })
    } catch(error){
     return res.status(statusCode.BAD_REQUEST).json({
         message:"error",
     })
    }
 } 



export const viewTodo = async(req:Request, res:Response) =>{
    try{
     
     const todo = await todoModel.find().sort({
        createdAt: -1
     }).limit(1)
    //  .limit(1).exec()

     return res.status(statusCode.OK).json({
         message:"created",
         data: todo
     })
    } catch(error){
     return res.status(statusCode.BAD_REQUEST).json({
         message:"error",
     })
    }
 } 


 export const viewTodoTop = async(req:Request, res:Response) =>{
    try{
     
     const todo = await todoModel.find().sort({
        createdAt: -1
     }).limit(1).exec()

     return res.status(statusCode.OK).json({
         message:"created",
         data: todo
     })
    } catch(error){
     return res.status(statusCode.BAD_REQUEST).json({
         message:"error",
     })
    }
 } 

 export const viewOneTodo = async(req:Request, res:Response) =>{
    try{
     const {todoID} = req.params
     
     const todo = await todoModel.findById(todoID)
     return res.status(statusCode.OK).json({
         message:"created",
         data: todo
     })
    } catch(error){
     return res.status(statusCode.BAD_REQUEST).json({
         message:"error",
     })
    }
 } 


 export const viewOneAndUpdateTodo = async(req:Request, res:Response) =>{
    try{
        const {done} = req.body;
        const {todoID} = req.params

        const check: iTodoData | null = await todoModel.findById(todoID)

        if (check?.achieved) {
            return res.status(statusCode.BAD_REQUEST).json({
                message:" Time has elapse"
            })
        }  else{
            const todo = await todoModel.findByIdAndUpdate(
                todoID,
                { done },
                { new: true}
            );

            return res.status(statusCode.BAD_REQUEST).json({
                message: "updated",
                data:todo
            })
        }
  
   } catch(error){
    return res.status(statusCode.BAD_REQUEST).json({
        message:"error",
    })
   }
} 


 export const viewOneAndDeleteTodo = async(req:Request, res:Response) =>{
     try{
         const {todoID} = req.params
 
     const todo = await todoModel.findByIdAndDelete(todoID)
     return res.status(statusCode.OK).json({
         message:"deleted",
         data: todo
     })
    } catch(error){
     return res.status(statusCode.BAD_REQUEST).json({
         message:"error",
     })
    }
 } 