import { click } from '@testing-library/user-event/dist/click';
import './Todo.css'
// function deleteTodo(id){
//     console.log("Clicked", id)
// }
//destructuring
function Todo({title, paragraph, clicked}) {
    // function deleteTodo(id){
    //     console.log("Clicked", title)
    //     console.log("Clicked", paragraph.toUpperCase())
    // }

    console.log(title, "", paragraph)  
    return (
        <div className='todo'>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        
        {/* <button onClick={deleteTodo()}>Finish</button>  wrong */}
        {/* <button onClick={deleteTodo}>Submit</button>
        <button onClick={() => deleteTodo(1)}>Submit</button> */}
        <button onClick={clicked}>Delete Todo</button>


        {/* <button onClick={() => {
            console.log("Clicked")
        }}>Finish</button> */}

        </div>
  );
}
// function Todo(props) {
//   console.log(props)  
//   return (
//     <div className='todo'>
//       <h2>{props.title}</h2>
//       <button>Finish</button>
//     </div>
//   );
// }

export default Todo;
