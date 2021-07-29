import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [ newExpense, setNewExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);
  // const [ deleteExpense, setDeleteExpense ] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/api/expenses")
    .then(result => {
      const data = [...result.data];
      setExpenses(data);
    })
    .catch(err => console.log(err));
  }, []);
  
  console.log('outside', newExpense);

  function addExpense() {
    console.log("reloaded");
    console.log('inside', newExpense);
    if (Object.keys(newExpense).length !== 0) {
      return axios.post("http://localhost:3001/api/expenses", {...newExpense})
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    }
  }

  function deleteExpense(id) {
    return axios.delete(`http://localhost:3001/api/expenses/${id}`)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  return { setNewExpense, expenses, addExpense, deleteExpense, newExpense };
  
}

//   useEffect(() => {
//     console.log("newExpense", newExpense);
//     if (Object.keys(newExpense).length !== 0) {
//       console.log("the object is not empty");
//       axios.post("http://localhost:3001/api/expenses", {...newExpense})
//         .then((response) => {
//           console.log(response);
//         }, (error) => {
//           console.log(error);
//         });
//       }
//   }, [newExpense]);

//   useEffect(() => {
//     // console.log("#", deleteExpense);
//     axios.delete(`http://localhost:3001/api/expenses/${deleteExpense}`)
//       .then((response) => {
//         console.log(response);
//       }, (error) => {
//         console.log(error);
//       });
//   }, [deleteExpense])