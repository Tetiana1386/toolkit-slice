import "./index.css";
import { useDispatch } from "react-redux";
import { createColumn } from "./slices/columnSlice";

export default function App() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createColumn());
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}