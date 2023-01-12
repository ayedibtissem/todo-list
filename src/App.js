import { useSelector } from "react-redux";
import "./App.css";
import Add from "./Components/Add";
import Filter from "./Components/Filter";
import TodoList from "./Components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const { todos } = useSelector((state) => state.todo);
  const { FilterItems } = useSelector((state) => state.todo);

  return (  
    
    
    <div className="App">
      <div
      style={{

      backgroundImage: `url("https://en.yeeply.com/wp-content/uploads/2020/01/web_application-development_design.jpg")`,backgroundRepeat: 'no-repeat',width:'2200px',height:
      '600px',color:'white'
    }}>
    
    <h2 style={{color:"red"}}>TODO LIST</h2>
    <Filter />
    <br />
    <Add />
    <br />
    <TodoList
      todos={
        FilterItems === "Done"
          ? todos.filter((el) => el.isDone === true)
          : FilterItems === "Undone"
          ? todos.filter((el) => el.isDone === false)
          : todos
      }
    />
    </div>
  </div>
);
}

export default App