export default function Form() {
  return (
    <div>
      <form action="/api" method="post">
        <label for="exp-name">Expense name:</label>
        <input type="text" id="exp-name"></input>
        <label for="exp-cost">Cost:</label>
        <input type="text" id="exp-cost"></input>
        <label for="exp-category">Category:</label>
        <input type="text" id="exp-category"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}