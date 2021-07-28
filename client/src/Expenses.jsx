import "./styles/expenses.css";

export default function Expenses(props) {
  const { expenses } = props;

  // console.log("expenses", expenses);

  const expenseList = expenses.map((exp, index) => {
    return (
      <tr key={index}>
        <td>{exp.title}</td>
        <td>{exp.cost_cents}</td>
        <td>{exp.category}</td>
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