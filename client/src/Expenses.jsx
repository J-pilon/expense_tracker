export default function Expenses(props) {
  const { expenses } = props;

  console.log("expenses", expenses);

  const expenseList = expenses.map(exp => {
    return (
      <ul style={{listStyleType: "none"}}>
        <li>{exp.title}</li>
        <li>{exp.cost_cents}</li>
        <li>{exp.category}</li>
      </ul>
    )
  })
  return (
    <div>
      {expenseList}
    </div>
  )
}