import React, { useState} from "react";
//Destructuring the use state key from the object
import './App.css';

function App() {
  const [brandNewTodo, setbrandNewTodo] = useState("");
  const [brandNewTodos, setbrandNewTodos] = useState([]);
  
  const handlebrandNewTodoSubmit= (event) => {
    //Prevent form from refreshing the page
    event.preventDefault();
    console.log(brandNewTodo);
    
    //Does not add unless there is at least one character
    if (brandNewTodo.length === 0) {
      return;
    }
    //Restructure data: 
    const brandNewTodoItem = {
      text: brandNewTodo,
      complete: false
    }

    //Updates the page
    //Sets brandNewTodos and pass in a brand new array containing all current todos plus 1 more
    setbrandNewTodos([...brandNewTodos, brandNewTodoItem]);
    setbrandNewTodo("");
  };

  const handlebrandNewTodoDelete = (deleteIndex) => {
  const filteredbrandNewTodos = brandNewTodos.filter((brandNewTodo, i) => {
    return i !== deleteIndex;
  });

  setbrandNewTodos(filteredbrandNewTodos);
  };

  //Create new array of same length be able to CHANGE something on the list
  //Checkbox
  const handleToggleComplete = (index) => {
    const updatedbrandNewTodos = brandNewTodos.map((brandNewTodo, i) => {
      if (index === i) {
        //Be able to change the todos 
        brandNewTodo.complete = !brandNewTodo.complete;
        //Avoid mutation below:
        // const updatedbrandNewTodo = {...brandNewTodo,!brandNewTodo.complete };
        // return updatedbrandNewTodo;
      }
      
      return brandNewTodo
    });

      setbrandNewTodos(updatedbrandNewTodos);
  }

  return (
    <div style={{textAlign:"center"}}>
      <form onSubmit={(event) => {
        handlebrandNewTodoSubmit(event);
      }}
      >
        <input
          onChange={(event) => {
            setbrandNewTodo(event.target.value);
        }}
        type="text"
        />
        <div>
          <button>Add</button>
        </div>
      </form>
        <hr/>
    {/* Displays List using mapping */}
      {brandNewTodos.map((brandNewTodo, i) => {
        const brandNewTodoClasses = ["bold"];

        //Allows us to add more classes later. Some have a line through depending. Conditional rendering or CSS.
        if (brandNewTodo.complete) {
          brandNewTodoClasses.push("line-through");
        }

        return (
          <div key={i}>
            {/* Checkbox */}
            <input onChange={(event) => {
              //Change boolean so you can get the to do back
              handleToggleComplete(i);
            }} checked={brandNewTodo.complete} 
            type="checkbox"
            />

            {/* child of the list of items in it. Based on index. */}
            <span className={brandNewTodoClasses.join(" ")}>{brandNewTodo.text}</span>

            {/* Delete function */}
            <button onClick={(event) => {
              handlebrandNewTodoDelete(i);
            }}
            style={{marginLeft: "15px"}}
            >Delete</button>
          </div>
        )
        })}
        </div>
  );
}

export default App;
