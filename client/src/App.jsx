import Form from './Form'
import Expenses from './Expenses';
import useApplicationData from './hooks/useApplicationData';

import './styles/App.css';

function App() {
  const { setNewExpense, expenses, addExpense, deleteExpense } = useApplicationData();
  // console.log(newExpense);

  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <div className="App-body">
        <Form setNewExpense={(val) => setNewExpense(val)} addExpense={(val) => addExpense(val)} />
        <Expenses expenses={expenses} deleteExpense={id => deleteExpense(id)}/>
      </div>
    </div>
  );
}

export default App;
