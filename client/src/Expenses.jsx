import { useEffect } from "react";
import axios from "axios";

export default function Expenses() {
  useEffect(() => {
    axios.get("http://localhost:3001/api/expenses")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, [])


  return (
    <div>
      <p>hello</p>
    </div>
  )
}