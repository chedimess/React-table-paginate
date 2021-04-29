import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [nameerror, setNameerror] = useState("");
  const [names, setNames] = useState([]);

  const validate = () => {
    let nameerror = "";
    if (!name) {
      nameerror = "name is required";
      setNameerror(nameerror);
    }
    if (nameerror) {
      return false;
    }
    return true;
  };

  const Addname = () => {
    let isvalid = validate();
    if (isvalid) {
      setNameerror("");

      setNames([...names, name]);
      setName("");
    }
  };
  return (
    <div className="App">
      <input type="email" placeholder="email" />

      <br />
      <input type="password" placeholder="password" />
      <br />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameerror}
      <br />
      <button onClick={Addname}>add</button>
    </div>
  );
};

export default App;
