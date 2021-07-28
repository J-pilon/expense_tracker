export default function Form() {

  function submitHandler(e) {
    e.preventDefault();

    console.log("submitted!")
  }

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <label>Expense name:</label>
        <input type="text" id="exp-name"></input>
        <label>Cost:</label>
        <input type="text" id="exp-cost"></input>
        <label>Category:</label>
        <input type="text" id="exp-category"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}