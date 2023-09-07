import './App.css';
import Todo from './components/Todo.jsx'
// import TodoHeadings from './components/TodoHeading.jsx'
import TodoHeading from './components/TodoHeading.jsx'
import Modal from './components/Modal.jsx'
import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {
  function clicked(){
    console.log("Emitting events ata boy!")
    setShowModal(true)
  }
  // return <Counter />
  const [showModal, setShowModal] = useState(false)
  // This useState gives us 2 Values, the first one is just the variable, so we are using array destucturing
  //in the parameter we can pass in any data type
  //the second value we get from useState is the function that lets us change this variable
  function confirmModal(){
    console.log("Confirm")
}
  function cancelModal(){
      console.log("Cancel")
}

  function clicked(){
    console.log("Emitting events ata boy!")
    setShowModal(true)
}
  return (
    <div>
      <TodoHeading></TodoHeading>
      <div className="todo__wrapper">
        <Todo 
          title="Finish Frontend Simplified"
          paragraph="Code along with David Step by Step"
          clicked={clicked}
        />
        <Todo 
          title="Finish the Interview Section"
          paragraph="Practice leetcode and JS questions"    
          clicked={clicked}
        />
        <Todo 
          title="Land $100K Job"
          paragraph="Practice, Practice and Practice!"
          clicked={clicked}
        />
        {/* <Todo title={1}/> */}
      </div>

      <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
        }}/>
        <button>Add Todo</button>
        {/* <button onClick={() => setShowModal(true)}>Add Todo</button> */}
      </>

      {/* {isModalOpen ? <Modal title="Do you want to close?"/> : null} */}
      {/* {isModalOpen ? <Modal title="Do you want to close?"/> : <></>} */}
      {showModal && <Modal 
        title="Do you want to close?"
        
        />}
      {/* {isModalOpen && <Modal title="Do you want to close?"/>} */}
      {/* can use this only if one of the value is null */}

      {/* For this one however the variable must be a boolean, true or false, can't be falsy value falsy value will be 
      rendered. Boolean, True or False values won't be rendered.
      To convert a falsy value to boolean use 2 !! */}
      {!!0}

    </div>
    
  );
}

export default App;
