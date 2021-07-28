import "./expenses.css";

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
    <div classname="expenses-list">
      {expenseList}
    </div>
  )
}