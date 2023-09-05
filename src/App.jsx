import './App.css';
import Todo from './components/Todo.jsx'
// import TodoHeadings from './components/TodoHeading.jsx'
import TodoHeading from './components/TodoHeading.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <TodoHeading></TodoHeading>
      <div className="todo__wrapper">
        <Todo 
          title="Finish Frontend Simplified"
          paragraph="Code along with David Step by Step"
        />
        <Todo 
          title="Finish the Interview Section"
          paragraph="Practice leetcode and JS questions"    
        />
        <Todo 
          title="Land $100K Job"
          paragraph="Practice, Practice and Practice!"
        />
        {/* <Todo title={1}/> */}
      </div>
      <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
        }}/>
        <button>Add Todo</button>
      </>
      <Modal title="Do you want to close?"/>
    </div>
    
  );
}

export default App;
