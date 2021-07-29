import { useState } from 'react';

export default function Form(props) {
  const [ expenseName, setExpenseName ] = useState('');
  const [ cost, setCost ] = useState('');
  const [ category, setCategory ] = useState('');
  const { setNewExpense } = props;

  function reset() {
    setExpenseName('');
    setCost('');
    setCategory('');
  }

  function submitHandler(e) {
    e.preventDefault();
    setNewExpense({name: expenseName, cost: cost, category: category})
    reset();
  }

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <label>Expense name:</label>
        <input type="text" id="exp-name" onChange={e => setExpenseName(e.target.value)} value={expenseName}></input>
        <label>Cost:</label>
        <input type="text" id="exp-cost" placeholder="$" onChange={e => setCost(e.target.value)} value={cost}></input>
        <label>Category:</label>
        <input type="text" id="exp-category" onChange={e => setCategory(e.target.value)} value={category}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}