import { useEffect, useState } from "react";
import axios from "axios";
import Form from './Form'
import Expenses from './Expenses';
import './styles/App.css';

function App() {
  const [ newExpense, setNewExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);
  const [ deleteExpense, setDeleteExpense ] = useState('')

  
  useEffect(() => {
    axios.get("http://localhost:3001/api/expenses")
    .then(result => {
      const data = [...result.data];
      setExpenses(data);
    })
    .catch(err => console.log(err));
  }, []);
  
  useEffect(() => {
    console.log("newExpense", newExpense);
    if (Object.keys(newExpense).length !== 0) {
      console.log("the object is not empty");
      axios.post("http://localhost:3001/api/expenses", {...newExpense})
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
      }
  }, [newExpense]);

  useEffect(() => {
    axios.delete(`http://localhost:3001/api/expenses/${deleteExpense}`)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }, [deleteExpense])

  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <div className="App-body">
        <Form setNewExpense={(val) => setNewExpense(val)}/>
        <Expenses expenses={expenses} delete={(val) => setDeleteExpense(val)}/>
      </div>
    </div>
  );
}

export default App;
