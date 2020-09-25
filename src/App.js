import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  
  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const ListOfItems = () => {
    setItems( (olditems) => {
      return [...olditems, inputList]
    })
    setInputList("")
  }
  
  const deleteItems = (id) => {
    setItems( (olditems) => {
      return olditems.filter((arrelem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>Todo List</h1>
          <br/>
          <input 
            type="text" 
            placeholder="Add some Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={ListOfItems}>+</button>
          <ol>
            {items.map( (itemval, i) => {
              return (
                <TodoList 
                key={i} 
                id={i}
                text={itemval}
                onSelect={deleteItems}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}


export default App;
