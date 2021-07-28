import { useEffect } from "react";
import axios from "axios";

export default function Expenses() {
  useEffect(() => {
    axios("http://localhost:8080/api/expenses")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  })


  return (
    <div>
      
    </div>
  )
}