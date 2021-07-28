import { useEffect } from "react";
const fetch = require('node-fetch');

export default function Expenses() {
  useEffect(() => {
    fetch("http://localhost:3000/api/expenses")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  })


  return (
    <div>
      
    </div>
  )
}