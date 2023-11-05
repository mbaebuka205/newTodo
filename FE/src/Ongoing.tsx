import styled from "styled-components";
import {useState, useEffect} from 'react'
import { updatTodo, viewTodo, viewTodoTop } from "./api/Api";

const Ongoing = ()=>{

    const [state, setState] = useState<any>()
    useEffect(()=>{
       viewTodo().then((res:any) =>{
        setState(res)
       })
    }, [])
    return(
        <div>
             <Container>
              {state?.map((prop:any)=>{
                return(
                    <Card key={prop._id}>
                    <Top>{prop.task}</Top>
                    <Middle>
                    <hr/>
                    <TimeFrame>Do well to complete your task ✌</TimeFrame>
                    <hr/>
                    <EnTime>Days Left : {prop.deadLine}</EnTime>
                   
                    </Middle>
                    <div>
                        {/* {prop.done === "start"?("achieved"):("not")} */}
                    </div>
                   {prop.achieved === null ?
                   (
                    <StrBtn 
                    onClick={() =>{
                      updatTodo(prop.id)
                    }}
                  >Upload Finished Task</StrBtn>
                   ): (
                    <div>Tasked terminated</div>
                   )}
                 </Card>
                )
              })}
            </Container>
        </div>
    )
}
export default Ongoing;

const EnTime = styled.div`
font-size: 14px;
font-weight: 600;
/* position: absolute; */
/* right: 0; */
margin-top: 5px;

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
text-align: center;
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
