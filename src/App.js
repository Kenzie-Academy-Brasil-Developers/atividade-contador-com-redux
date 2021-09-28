import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, subNumber } from "./store/modules/counter/actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  return (
    <main className="App">
      <div>{counter}</div>
      <div>
        <button className="add" onClick={() => dispatch(addNumber(1))}>
          +
        </button>
        <button className="sub" onClick={() => dispatch(subNumber(1))}>
          -
        </button>
      </div>
    </main>
  );
}

export default App;
