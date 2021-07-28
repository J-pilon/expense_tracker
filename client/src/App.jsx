import Form from './Form'
import Expenses from './Expenses';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <Form />
      <Expenses />
    </div>
  );
}

export default App;
