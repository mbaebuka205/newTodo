import styled from "styled-components";
import { viewTodo, viewTodoTop } from "./api/Api";
import {useState, useEffect} from 'react'
import moment from "moment";

const Start = ()=>{

    const [state, setState] = useState<any>([])

    useEffect(() =>{
         viewTodo().then((res)=>{
          setState(res)
         })
        // setState(JSON.parse(localStorage.getItem("Dtodo")!))
    },[state])
    // console.log(state)
    return(
        <div>
            <Container>
               {state?.map((prop:any)=>{
                 return(
                   <Card  >
                    <StrBt>Started To Do</StrBt>
                  <Top>{prop.task}</Top>
                  <Middle>
                  <StTime>Time Frame : {prop.deadLine}</StTime>
                  
                  <hr/>
                  <TimeFrame>Weldone you just created a task 👍</TimeFrame>
                  <hr/>
                  </Middle>
                 {prop.achieved === null?(
                   <StrBtn>Started To Do</StrBtn>
                 ):(
                  <div>Tasked terminated</div>
                 )}
              </Card>
                )
               })}
              
            </Container>
        </div>
    )
}
export default Start;

const StrBt = styled.div`
width: 97%;
text-align: center;
padding: 5px;
background-color: purple;
color: white;
margin-bottom: 5px;
border-radius: 5px;

`

const StTime = styled.div`
font-size: 14px;
font-weight: 600;
margin-bottom: 5px;

`

const StrBtn = styled.button`
padding: 8px 22px;
background-color: purple;
color: white;
margin-bottom: 5px;
border-radius: 5px;
`
const Middle = styled.div`
width: 100%;
position: relative;
margin-top: 5px;
margin-bottom: 30px;
`
const TimeFrame = styled.div`
text-align: center;
`
const Top = styled.div`
min-height: 100px;
width: 95%;
border: 1px solid silver;
margin-top: 5px;
`
const Card = styled.div`
   border-radius: 7px;
  width: 270px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid silver;
`
const Container = styled.div`
 margin: 10px;
`
