import axios from 'axios'

const URL:string  = 'http://localhost:2233/api/v1'

export const createTodo = async(dat:any) =>{
    try{
        return await axios.post(`${URL}/creat-todo`, dat)
    } catch(error){
        console.log(error)
    }
}

export const viewTodo = async() =>{
    try{
        return await axios.get(`${URL}/view-todo`).then((res:any)=>{
            return res.data.data
        })
    } catch(error){
        console.log(error)
    }
}

export const viewTodoTop = async() =>{
    try{
        return await axios.get(`${URL}/view-1-todo`).then((res)=>{
            return res.data.data
        })
    } catch(error){
       console.log(error)
    }
}

export const updatTodo = async (todoID:string) =>{
    try{
        return await axios.patch(`${URL}/updat-todo/${todoID}`).then((res)=>{
            console.log("update", res);
            
        })
    } catch(error) {
        console.log(error)
    }
}