import "./styles/expenses.css";

export default function Expenses(props) {
  const { expenses } = props;

  // console.log("expenses", expenses);

  function clickHandler(index) {
    console.log("$", index)
  }

  const expenseList = expenses.map((exp, index) => {
    return (
      <tr key={index} id={index}>
        <td>{exp.title}</td>
        <td>{exp.cost_cents}</td>
        <td>{exp.category}</td>
        <td><button type="button" onClick={() => clickHandler(index)}>Delete</button></td>
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
        </tbody>
      </table>
    </div>
  )
}