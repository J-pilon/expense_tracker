import { useState } from 'react';

export default function Form(props) {
  const [ expenseName, setExpenseName ] = useState('');
  const [ cost, setCost ] = useState('');
  const [ category, setCategory ] = useState('');
  const { setNewExpense } = props;

  function submitHandler(e) {
    e.preventDefault();
    console.log('$$', {name: expenseName, cost: cost, category: category})
    setNewExpense({name: expenseName, cost: cost, category: category})
  }

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <label>Expense name:</label>
        <input type="text" id="exp-name" onChange={e => setExpenseName(e.target.value)}></input>
        <label>Cost:</label>
        <input type="text" id="exp-cost" onChange={e => setCost(e.target.value)}></input>
        <label>Category:</label>
        <input type="text" id="exp-category" onChange={e => setCategory(e.target.value)}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}