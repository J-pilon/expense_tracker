import "./styles/expenses.css";

export default function Expenses(props) {
  const { expenses, setDeleteExpense } = props;

  function clickHandler(id) {
    setDeleteExpense(id);
  }

  function totalOfCosts() {
    let totalCost = 0;
    for (const expense of expenses) {
      totalCost += expense.cost_cents;
    }
    return totalCost / 100;
  }

  
  const expenseList = expenses.map((exp, index) => {
    const price = exp.cost_cents / 100;
    return (
      <tr key={index} id={index}>
        <td>{exp.title}</td>
        <td>${price}</td>
        <td>{exp.category}</td>
        <td><button className="delete-button" type="button" onClick={() => clickHandler(exp.id)}>Delete</button></td>
      </tr>
    )
  })
  return (
    <div id="expenses-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {expenseList}
          <tr>
            <td>Total</td>
            <td>${totalOfCosts()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}