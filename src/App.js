import NewExpense from "./components/NewExpense";
import Expense from "./components/Expense";
import React, {useState} from "react";

const dummyExpenses = [ 
  {title: "Room Rent", amount: '₹800', date: new Date(2021,8,1)},
  {title: "Transpotation", amount: '₹800', date: new Date(2021,2,1)},
  {title: "Buy Car", amount: '₹800', date: new Date(2019,9,1)},
  {title: "Trip", amount: '₹800', date: new Date(2021,4,1)},
]

function App() {

  const [expenses, setexpenses] = useState(dummyExpenses)

  const addExpenseHandle = (expense) => {
    setexpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div className="container">
        <NewExpense onAddExpense={addExpenseHandle}/>
        <Expense item={expenses}/>
    </div>
  );
}

export default App;
