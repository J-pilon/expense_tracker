import { useEffect, useState } from "react";
import axios from "axios";
import Form from './Form'
import Expenses from './Expenses';
import './App.css';

function App() {
  const [ newExpense, setNewExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/expenses")
      .then(result => {
        const data = [...result.data];
        setExpenses(data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <Form />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
