import { useState } from "react";
import "./App.css";

const Password = 123;
function App() {
  const [count, setCount] = useState(0);
  const [theInput, setTheInput] = useState("");
  const [userIsOnline, setUserIsOnline] = useState(false);
  const handleChange = (e) => {
    // e.preventDefault();
    setTheInput(e.target.value);
  };

  const handleButton = () => {
    {
      Password === Number(theInput) &&
        (setCount(count + 1),
        setUserIsOnline(true));
    }
  };
  return (
    <div className="App">
      <p>Press the button to start to count:</p>
      <input type="text" value={theInput} onChange={(e) => handleChange(e)} />
      {/* {theInput} */}
      <button onClick={handleButton}>{count}</button>
      {userIsOnline && <p>Password is correct, You are Online!</p>}
    </div>
  );
}

export default App;
