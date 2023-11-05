import styled from "styled-components"
import {useState} from 'react'
import Start from "./Start";
import Ongoing from "./Ongoing";
import Finished from "./Finished";
import CreateTodo from "./CreateTodo";

function App() {

  const [toggle, setToggle] = useState<any>()

  return (
    <div>
      <Add>
        <Button 
          onClick={()=>{
            setToggle(true)
          }}
        >
          Add To Do
        </Button>
      </Add>
      <Container>
         <Start/>
         <Ongoing/>
         <Finished/>
      </Container>
      {toggle && <CreateTodo toggle={toggle} setToggle={setToggle}/>}
    </div>
  )
}

export default App;

const Button = styled.button`
  padding: 8px 22px;
  background-color: #e706fb;
  /* background-color: purple; */
  color: #efe7d9;
  font-weight: 600;
  border: 0;
  margin: 15px;
  border-radius: 4px;
`
const Add = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`
