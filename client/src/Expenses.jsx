import "./styles/expenses.css";

export default function Expenses(props) {
  const { expenses } = props;

  // console.log("expenses", expenses);

  const expenseList = expenses.map((exp, index) => {
    return (
      <ul key={index}>
        <li>{exp.title}</li>
        <li>{exp.cost_cents}</li>
        <li>{exp.category}</li>
      </ul>
    )
  })
  return (
    <div id="expenses-list">
      <ul style={{textDecoration: "underline"}}>
        <li>Name</li>
        <li>Amount</li>
        <li>Category</li>
      </ul>
      {expenseList}
    </div>
  )
}