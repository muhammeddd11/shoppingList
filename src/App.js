import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function saveItem(e) {
    e.preventDefault();
    if (item === "") return;
    const newItems = [...items, item];
    setItems(newItems);
    setItem("");
  }
  function removeItem(item) {
    const newItems = items.filter((it) => it !== item);
    setItems(newItems);
  }
  return (
    <div className="container">
      <section>
        <h1>Project 4: Shopping List</h1>
      </section>
      <section className="items-container">
        <p className="item-heading">Items To Buy</p>
        <form className="add-item">
          <input
            placeholder="Add a new item"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          ></input>
          <button name="item" type="submit" onClick={(e) => saveItem(e)}>
            Add
          </button>
        </form>
        <div className="items">
          {items.map((item, i) => (
            <div className="item" key={i}>
              <p className="item-place">{item}</p>
              <button onClick={() => removeItem(item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fa5252"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="delete-button"
                >
                  <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
