import axios from "axios";
import { useEffect, useState } from "react";
const Usetutorial3 = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
        setData(response.data[0].email);
      }, []);
  });
  return (
    <div>
      {" "}
      <h1> {data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};
export default Usetutorial3;
