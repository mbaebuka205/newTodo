import styled from "styled-components";
import {useState, useEffect} from 'react'
import { updatTodo, viewTodo, viewTodoTop } from "./api/Api";

const Finished = ()=>{

    const [state, setState] = useState<any>()
    useEffect(()=>{
       viewTodo().then((res:any) =>{
        setState(res)
       })
    }, [state])
    return(
        <div>
              <Container>
                {state?.map((prop: any)=>{
                     return(
                        <Card>
                        <StrBtn>Finished</StrBtn>
                         {prop.achieved === null?(
                             <Top>Task Still Ongoing</Top>
                             ):(
                                 <Top>Task Terminated</Top>
                                 
                         )}
                        <Middle>
                        <StTime>Created At: {prop.createdAt}</StTime>
                        <hr/>
                        <TimeFrame>Nice</TimeFrame>
                        <hr/>
                        </Middle>
                       </Card>
                     )
                })}
            </Container>
        </div>
    )
}
export default Finished;

const EnTime = styled.div`
font-size: 14px;
font-weight: 600;
position: absolute;
right: 0;
margin-top: 5px;

`

const StTime = styled.div`
font-size: 14px;
font-weight: 600;
margin-bottom: 5px;

`

const StrBtn = styled.div`
/* padding: 8px 22px; */
background-color: purple;
padding: 5px;
text-align: center;
color: white;
margin-bottom: 5px;
border-radius: 5px;
width: 97%;
height: 60%;
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
