import styled from "styled-components";
import {GiCancel} from 'react-icons/gi'
import { createTodo, viewTodo } from "./api/Api";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment";

interface iProps{
    toggle: any;
    setToggle:any
}
const CreateTodo:React.FC<iProps> = ({toggle, setToggle}) =>{
   const [text, setText] = useState('')
   const [time, setTime] = useState<number>(0)

   const [dateRange, setDateRange]: any = useState([null, null]);
  const [startDate, endDate]: any = dateRange;
  
  let xx = Date.parse(moment(dateRange[1]).format("LLLL")) - Date.parse(moment(dateRange[0]).format("LLLL"));
//   let xx = Date.parse(dateRange[1]!) - Date.parse(dateRange[0]!);
  console.log(xx / 86400000);

  const sorted:number = endDate - startDate
  console.log()
    return(
        <div>
          <Container>
             <Card>
                <Icon>
                    <GiCancel
                       onClick={()=>{
                        setToggle(false)
                     }}
                    />
                </Icon>
               <Task
                 placeholder="Enter your task"
                 value={text}
                 onChange={(e:any)=>{
                   setText(e.target.value)
                 }}
               ></Task>
               <Time
                  //  type="number"
                  //  placeholder="Enter time in minute"
                  //  value={time}
                  //  onChange={(e: any) => {
                  //    setTime(e.target.value);
                  //  }}
               placeholderText="Enter you task date deadline"
               selectsRange={true}
               startDate={startDate}
               endDate={endDate}
               onChange={(update: [Date | null, Date | null] | any) => {
                 setDateRange(update);
               }}
               isClearable={true}
                />
                {/* </Time> */}
               <Button>
                 <Upload
                   onClick={()=>{
                     let dat = {
                        task: text,
                        time: dateRange
                        // :(`${xx} day`)
                        // :[(`${moment(startDate).format("LLLL")} -`),(`- ${moment(endDate).format("LLLL")}`)]
                     }
                     createTodo(dat)
                     setToggle(false)
                     localStorage.setItem("Dtodo", JSON.stringify(dat))
                   }}
                 >
                    Upload Task
                 </Upload>
               </Button>
             </Card>
          </Container>
        </div>
    )
}

export default CreateTodo;
const Upload = styled.button`
   padding: 8px 22px;
   background-color: purple;
   font-size: 15px;
   font-weight: 600;
   color: white;
   border-radius: 5px;
`
const Button = styled.div`
   width : 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`
// const Time = styled.input`
//    width :95% ;
//    height: 50px;
//    border: 1px solid silver;
//    background-color: white;
//    padding-left: 5px;
//    border-radius: 5px;
// `
const Time = styled(DatePicker)`
   width :95% ;
   height: 50px;
   border: 1px solid silver;
   background-color: white;
   padding-left: 5px;
   border-radius: 5px;
`
const Icon = styled.div`
   font-size : 17px;
   margin: 10px;
`
const Task = styled.textarea`
   height : 250px;
   width: 92%;
   border: 1px solid silver;
   margin-top: 5px;
   border-radius: 6px;
   padding: 10px;
`
const Card = styled.div`
   height: 500px;
   width: 470px;
   background-color: white;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
`
const Container = styled.div`
   height: 100%;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;

   background-color: rgb(128, 0, 128, 0.2);
   /* background-color:  rgba(144, 19, 254, 0.15); */
   /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
   backdrop-filter: blur(5.5px);
   -webkit-backdrop-filter: blur(5.5px);
   /* border-radius: 10px; */
   /* border: 1px solid rgba(255, 255, 255, 0.18); */
   

`

