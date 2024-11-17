import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/cardForm";

function App() {
  const [count, setCount] = useState(0);

  const [TodoList, setList] = useState([]);

  const addList = (list) => {
    setList([...TodoList, list]);
  };

  return (
    <>
      <CardForm addList={addList}></CardForm>
      <div className=" ">
        {TodoList.map((list) => (
          <Card key={list.id} title={list.name}>
            {list.description}
          </Card>
        ))}
      </div>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  );
}

export default App;
